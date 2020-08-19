import express from "express";
import routes from "../routes";
import {
    getJoin,
    getLogin,
    postJoin,
    postLogin,
    logout,
} from "../controllers/userControllers";

const pageRouter = express.Router();

pageRouter.get(routes.home, (req, res) => {
    res.render("home", { pageTitle: "홈" });
});

pageRouter.get(routes.login, getLogin);
pageRouter.post(routes.login, postLogin);

pageRouter.get(routes.join, getJoin);
pageRouter.post(routes.join, postJoin, postLogin);

pageRouter.get(routes.logout, logout);

export default pageRouter;