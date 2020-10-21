import routes from "../routes";
import User from "../models/User";
import Video from "../models/Video";
import Comment from "../models/Comment";

export const home = (req, res) => {
    res.render("home", { pageTitle: "홈" });
};

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "업로드" });
    console.log(req.user);
};

export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { location }
    } = req;

    const newVideo = await Video.create({
        fileUrl: location,
        title,
        description,
        creator: req.user.id
    });

    // req.user.videos.push(newVideo.id);  
    // req.user.save();

    res.redirect(routes.videoDetail(newVideo.id));
}; 