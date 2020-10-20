// global
const HOME = "/";
const LOGIN = "/login";
const JOIN = "/join";
const LOGOUT = "/logout";

const VIDEOS = "/video";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";

const GOOGLE = "/login/google";
const GOOGLE_CALLBACK = "/login/google/callback";
const FACEBOOK = "/login/facebook";
const FACEBOOK_CALLBACK = "/login/facebook/callback";

const routes = {
    home: HOME,
    login: LOGIN,
    join: JOIN,
    logout: LOGOUT,
    google: GOOGLE,
    googleCallback: GOOGLE_CALLBACK,
    facebook: FACEBOOK,
    facebookCallback: FACEBOOK_CALLBACK,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: id => {
        if(id) {
            return `/videos/${id}`;
        } else {
            return VIDEO_DETAIL;
        }
    }
};

export default routes;