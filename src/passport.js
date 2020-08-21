import passport from "passport";
import google from "passport-google-oauth";
import FacebookStrategy from "passport-facebook";

import {
    googleLoginCallback,
    facebookLoginCallback
} from "./controllers/userControllers";

import User from "./models/User";

const GoogleStrategy = google.OAuth2Strategy;

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:4000/login/google/callback"
    },
    googleLoginCallback
));

passport.use(
    new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: "http://localhost:4000/login/facebook/callback"
    },
    facebookLoginCallback
));

passport.use(User.createStrategy());

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});