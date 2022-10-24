import { NextFunction, Request, Response } from "express";
const router = require("express").Router();

router.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({
      error: false,
    });
  } catch (error) {
    res.json({
      error: true,
    });
  }
});

router.post("/verify", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({
      error: false,
    });
  } catch (error) {
    res.json({
      error: true,
    });
  }
});

module.exports = router;
