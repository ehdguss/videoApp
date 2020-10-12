import express from "express";
import routes from "../routes";

import {
    home,
    getUpload,
    getUpload2,
    postUpload1
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.home, home);

videoRouter.get(routes.upload, getUpload);
videoRouter.get(routes.upload2, getUpload2);

videoRouter.post(routes.upload2, postUpload1);

export default videoRouter;