import express, { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import marbleService from "../../services/marble.service";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req: any, res, next) => {
  try {
    let marbleBlocks = await prisma.marbleBlock.findMany({
      where: {
        companyId: req.companyId,
        status: "ACTIVE",
      },
      include: { marbleBlockImages: true },
    });
    res.json({
      error: false,
      marbleBlocks,
    });
  } catch (error) {
    console.error(error);
    res.json({ error: true });
  }
});

router.put("/", async (req: any, res: Response, next: NextFunction) => {
  try {
    let { x, y, z, weight, images, companyId } = req.body;
    console.log(images);

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
        companyId: req.companyId || companyId,
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

router.post("/:id", async (req: any, res: Response, next: NextFunction) => {
  try {
    let { id } = req.params;
    let { x, y, z, weight, images, companyId } = req.body;

    let colors = {};
    await Promise.all(
      Object.keys(images).map(async (key) => {
        
        let data = await marbleService.imageService(images[key]);
        colors = { ...data.colors };
      })
    );

    await prisma.marbleBlock.update({
      where: { id: parseInt(id) },
      data: {
        x: parseFloat(x),
        y: parseFloat(y),
        z: parseFloat(z),
        colors,
        weight: parseFloat(weight),
        marbleBlockImages: {
          deleteMany: {
            marbleBlockId: parseInt(id),
          },
          create: Object.keys(images).map((key) => {
            let type: any = key.toUpperCase();
            return {
              type,
              image: images[key],
            };
          }),
        },
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

router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    await prisma.marbleBlock.update({
      where: { id: parseInt(id) },
      data: { status: "DELETED" },
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
