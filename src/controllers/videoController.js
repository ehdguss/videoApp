import routes from "../routes";

export const home = (req, res) => {
    res.render("home", { pageTitle: "홈" });
};

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "업로드" });
};