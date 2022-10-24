import express, { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({
      error: false,
      message: "Hello Api",
    });
  } catch (error) {
    res.json({
      error: true,
    });
  }
});

module.exports = router;
