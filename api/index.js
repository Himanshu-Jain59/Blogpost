const multer = require("multer");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/categories");
const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

dotenv.config();

mongoose
  .connect(process.env.Mongo_url)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => {
    console.log("error: ", err);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "image.jpeg");
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  console.log("file uploaded");
  res.status(200).json("file uploaded");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/categories", catRoute);

app.listen("4000", () => console.log("Backend is running"));
