const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../")));

app.get("/", function (req, res) {
  res.render("save");
});

// // app.get("/search", function (req, res) {
// //   res.render("search");
// // });
// router.get("/search", async (req, res, next) => {
//     try {
//       let data = await userFunction.getReceipt(req.exercises.SystemName);
//       // res.json(data);
//       res.render("search", { data: data });
//     } catch (error) {
//       return next(error);
//     }
//   });

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require("./routes/exercises");
const userRouter = require("./routes/user");

app.use("/exercises", exercisesRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
