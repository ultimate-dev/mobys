import express, { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import marbleService from "../../services/marble.service";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  try {
    let customers = await prisma.company.findMany({
      where: {
        type: "CUSTOMER",
      },
    });
    res.json({
      error: false,
      customers,
    });
  } catch (error) {
    console.error(error);
    res.json({ error: true });
  }
});

module.exports = router;
