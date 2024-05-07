import express from "express";
import morgan from "morgan";
import cors from "cors";
import crudRouter from "./routes/user.routes.js";
import bodyParser from "body-parser";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", crudRouter);

export default app;
