

import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Video";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    console.log(req.user);
    next();
};