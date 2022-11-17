import express, { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import marbleService from "../../services/marble.service";

const router = express.Router();
const prisma = new PrismaClient();

router.put("/", async (req: any, res: Response, next: NextFunction) => {
  try {
    let { x, y, z, weight, images, supplierId } = req.body;
    let colors = {};
    await Promise.all(
      Object.keys(images).map(async (key) => {
        let data = await marbleService.imageService(images[key]);
        colors = { ...data.colors };
      })
    );

    await prisma.marbleBlock.create({
      data: {
        x: parseFloat(x),
        y: parseFloat(y),
        z: parseFloat(z),
        colors,
        weight: parseFloat(weight),
        marbleBlockImages: {
          create: Object.keys(images).map((key) => {
            let type: any = key.toUpperCase();
            return {
              type,
              image: images[key],
            };
          }),
        },
        supplierId: req.supplierId || supplierId,
      },
    });

    res.json({
      error: false,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: true,
    });
  }
});

module.exports = router;
