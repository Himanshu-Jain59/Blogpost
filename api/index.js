const multer = require("multer");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/categories");
const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(express.static(path.resolve("./public")));
app.use("/public", express.static(path.join(__dirname, "./public")));

dotenv.config();

mongoose
  .connect(process.env.Mongo_url)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => {
    console.log("error: ", err);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./public");
  },
  filename: (req, file, cb) => {
    return cb(null, `${new Date().toJSON().slice(0, 10)}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
app.use("/api/upload", upload.single("file"), (req, res) => {
  console.log("file uploaded");
  console.log(req.file);
  res.status(200).json("file uploaded");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/categories", catRoute);

app.listen("4000", () => console.log("Backend is running"));
