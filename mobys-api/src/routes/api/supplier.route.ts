import express, { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import marbleService from "../../services/marble.service";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  try {
    let suppliers = await prisma.company.findMany({
      where: {
        type: "SUPPLIER",
      },
    });
    res.json({
      error: false,
      suppliers,
    });
  } catch (error) {
    console.error(error);
    res.json({ error: true });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let supplier = await prisma.company.findFirst({
      where: {
        id: parseInt(id),
        type: "SUPPLIER",
      },
      include: { marbleBlocks: true },
    });
    res.json({
      error: false,
      supplier,
    });
  } catch (error) {
    console.error(error);
    res.json({ error: true });
  }
});

module.exports = router;
