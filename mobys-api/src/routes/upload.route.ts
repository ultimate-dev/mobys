import express, { NextFunction, Request, Response } from "express";
const upload = require("../helpers/upload");

const router = express.Router();

router.post("/", upload.single("file"), async (req: any, res: Response, next: NextFunction) => {
  try {
    let { file = "" } = req.body;
    if (req.file && req.file.path) {
      let file = req.file.path.split("public")[1];
      console.log( file.slice(1, file.length))
      let path = process.env.BASE_URL + "/public/" + file.slice(1, file.length);
      res.json(path);
    } else res.json(file);
  } catch (error) {
    console.error(error);
    res.json({ error: true });
  }
});

module.exports = router;
