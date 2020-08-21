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

export const googleLogin = passport.authenticate("google", { scope: ["profile", "email", "openid"] });

export const googleLoginCallback = async(_, __, profile, cb) => {
    const {
        _json: { id, avata_url, name, email }
    } = profile;
    try {
        const user = await User.findOne({ email });
        if(user) {
            user.googleId = id;
            user.save();
            return cb(null, user);
        }
        const newUser = await User.create({
            email,
            name,
            googleId: id,
            avataUrl: avata_url
        });
        return cb(null, newUser);
    } catch(err) {
        return cb(err);
    }
};

export const postGoogleLogin = (req, res) => {
    res.redirect(routes.home);
};

export const facebookLogin = passport.authenticate("facebook", {
    successFlash: "환영합니다",
    failureFlash: "로그인 실패"
});

export const facebookLoginCallback = async(_, __, profile, cb) => {
    const {
        _json: { id, name, email }
    } = profile;
    try {
        const user = await User.findOne({ email });
        if(user) {
            user.facebookId = id;
            user.avataUrl = `https://graph.facebook.com/${id}/picture?type=large`;
            user.save();
            return cb(null, user);
        }
        const newUser = await User.create({
            email,
            name,
            facebookId: id,
            avataUrl: `https://graph.facebook.com/${id}/picture?type=large`
        });
        return cb(null, newUser);
    } catch(err) {
        return cb(err);
    }
};

export const postFacebookLogin = (req, res) => {
    res.redirect(routes.home);
};