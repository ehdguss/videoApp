import express from "express";
import routes from "../routes";

import {
    home,
    getUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.home, home);

videoRouter.get(routes.upload, getUpload);

export default videoRouter;