import express from "express";
import routes from "../routes";

const pageRouter = express.Router();

pageRouter.get(routes.home, (req, res) => {
    res.render("home", { pageTitle: "홈" });
});

pageRouter.get(routes.login, (req, res) => {
    res.render("login", { pageTitle: "로그인" });
});

pageRouter.get(routes.join, (req, res) => {
    res.render("join", { pageTitle: "회원가입" });
})

export default pageRouter;