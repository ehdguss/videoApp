import express from "express";
import routes from "../routes";

import {
    home,
    getUpload,
    postUpload
} from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";


const videoRouter = express.Router();

videoRouter.get(routes.home, home);

videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

export default videoRouter;