import express, { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    let marbleBlocks = await prisma.marbleBlock.findMany();
    res.json({
      marbleBlocks,
      error: false,
    });
  } catch (error) {
    res.json({
      error: true,
    });
  }
});

module.exports = router;
