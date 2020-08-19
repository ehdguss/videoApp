import passport from "passport";
import google from "passport-google-oauth";
import facebook from "passport-facebook";

import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());