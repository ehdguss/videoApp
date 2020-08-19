import passport from "passport";

import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "회원가입" });
};

export const postJoin = async(req, res, next) => {
    const {
        body: { name, email, password, password2 }
    } = req;

    if(password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "회원가입" });
    } else {
        try {
            const user = await User({
                name,
                email
            });

            await User.register(user, password);
            next();
        } catch(err) {
            console.log(err);
            res.redirect(routes.home);
        }
    }
};


export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "로그인" });
};

export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home,
    successFlash: "환영합니다.",
    failureFlash: "이메일 또는 비밀번호를 확인해주세요"
});

export const logout = (req, res) => {
    req.flash("info", "로그아웃");
    req.logout();
    res.redirect(routes.home);
};