import routes from "../routes";

export const home = (req, res) => {
    res.render("home", { pageTitle: "홈" });
};

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "업로드" });
};

export const getUpload2 = (req, res) => {
    res.render("upload2", { pageTitle: "업로드" });
};

export const postUpload1 = (req, res) => {
    console.log(req.body.videoFile);
};