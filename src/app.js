import express from "express";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";

import routes from "./routes";
import pageRouter from "./routers/page";

const app = express();

dotenv.config();
app.use(helmet());
//
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/static", express.static(path.join(__dirname, "static")));
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan("dev"));

app.use("/", pageRouter);

export default app;