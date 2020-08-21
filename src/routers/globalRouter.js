import express from "express";
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
import passport from "passport";

const globalRouter = express.Router();

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.logout, logout);

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