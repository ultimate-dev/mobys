import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = require("express").Router();
const prisma = new PrismaClient();

const SECRET_KEY: any = process.env.SECRET_KEY;

router.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { supplier = false } = req.query;
    let { email, password } = req.body;

    let user = await prisma.user.findFirst({
      where: {
        status: "ACTIVE",
        email,
        company: supplier ? { type: "SUPPLIER" } : {},
      },
      include: { company: true },
    });
    if (user) {
      let passwordCompare = await bcrypt.compare(password, user.password);

      if (passwordCompare) {
        // @ts-ignore
        user["letters"] = user.name[0] + user.surname[0];

        let token = await jwt.sign({ ...user, time: new Date() }, SECRET_KEY);
        res.json({
          error: false,
          user,
          token,
        });
      } else {
        res.json({
          error: true,
        });
      }
    } else {
      res.json({
        error: true,
      });
    }
  } catch (error) {
    res.json({
      error: true,
    });
  }
});

router.post("/verify", async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { supplier = false } = req.query;
    let { token } = req.body;
    if (token) {
      let decoded: any = await jwt.verify(token, SECRET_KEY);
      if (decoded) {
        let user = await prisma.user.findFirst({
          where: {
            status: "ACTIVE",
            email: decoded.email,
            company: supplier ? { type: "SUPPLIER" } : {},
          },
          include: { company: true },
        });
        if (user)
          res.json({
            error: false,
            user: decoded,
          });
        else {
          res.json({
            error: true,
          });
        }
      } else {
        res.json({
          error: true,
        });
      }
    } else {
      res.json({
        error: true,
      });
    }
  } catch (error) {
    res.json({
      error: true,
    });
  }
});

module.exports = router;
