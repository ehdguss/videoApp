import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = "mongodb://localhost:27017/videoDB";

mongoose.connect(MONGODB_URL,
    {
        useNewUrlParser: true
    }
);
const db = mongoose.connection;

const handleOpen = () => console.log("● ○ Connected to DB");
const handleError = err => console.log(`● X Error on DB Connection: ${err}`);

db.once("open", handleOpen);
db.on("error", handleError);