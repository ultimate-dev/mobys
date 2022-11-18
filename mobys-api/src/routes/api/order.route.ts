import express, { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import marbleService from "../../services/marble.service";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req: any, res, next) => {
  try {
    let { customer } = req.query;
    let orders = [];
    if (customer)
      orders = await prisma.order.findMany({
        where: {
          customerId: req.companyId,
        },
        include: { customer: true },
      });
    else
      orders = await prisma.order.findMany({
        where: {
          marbleBlock: { companyId: req.companyId },
        },
        include: { customer: true },
      });
    res.json({
      error: false,
      orders,
    });
  } catch (error) {
    console.error(error);
    res.json({ error: true });
  }
});

router.put("/:id", async (req: any, res, next) => {
  try {
    let { id } = req.params;
    await prisma.order.create({
      data: {
        marbleBlockId: parseInt(id),
        customerId: req.companyId,
      },
    });
    await prisma.marbleBlock.update({
      where: {
        id: parseInt(id),
      },
      data: {
        order: true,
      },
    });
    res.json({
      error: false,
    });
  } catch (error) {
    console.error(error);
    res.json({ error: true });
  }
});

module.exports = router;
