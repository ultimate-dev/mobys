/**
 * Dependencies
 */
import express, { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

/**
 * App
 */
const app = express();

/**
 * Middlewares
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/public", express.static(__dirname + "/public"));

/**
 * Start Page
 */
app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.json({
    error: false,
    message: "Hello World",
  });
});

/**
 * Routes
 */
app.use("/auth", require("./routes/auth.route"));
// Api Routes
//app.use(`/api`, require("./middlewares/token.verify"));
app.use(`/api`, require("./routes/api/index.route"));
app.use(`/api/marble/block`, require("./routes/api/marbleBlock.route"));

/**
 * Http 404 Error
 */
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createError.NotFound());
});

export default app;