import express from "express";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import flash from "express-flash";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import session from "express-session";
import mongoose from "mongoose";
import passport from "passport";

import routes from "./routes";
import pageRouter from "./routers/page";

import "./passport";
import { localsMiddleware } from "./middlewares";

const app = express();

const CokieStore = MongoStore(session);

dotenv.config();
app.use(helmet());
//
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/static", express.static(path.join(__dirname, "static")));
//
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan("dev"));

app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: true,
        saveUninitialized: false,
        store: new CokieStore({ mongooseConnection: mongoose.connection })
    })
    );
    
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(localsMiddleware);

app.use(routes.home, pageRouter);

export default app;