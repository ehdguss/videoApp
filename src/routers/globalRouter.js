import express from "express";
import passport from "passport";
import routes from "../routes";
import {
    getJoin,
    getLogin,
    postJoin,
    postLogin,
    logout,
    googleLogin,
    postGoogleLogin,
    facebookLogin,
    postFacebookLogin
} from "../controllers/userControllers";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.google, googleLogin);
globalRouter.get(routes.googleCallback, 
    passport.authenticate("google", { failureRedirect: "/login" }),
    postGoogleLogin
);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(routes.facebookCallback,
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    postFacebookLogin    
);

export default globalRouter;