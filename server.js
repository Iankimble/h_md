const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

var request = require("request");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

//Routes
const authRoutes = require("./routes/auth-routes");
const userRoutes = require("./routes/user-routes");
const noteRoutes = require("./routes/note-routes");

//Middleware/ Checkware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());
app.use("/", noteRoutes, userRoutes, authRoutes);

// // MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connected"))
  .catch(err => {
    console.log("DB connection error");
    process.exit();
  });

//Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is on ${port}`);
});

// React front end
app.use(express.static(path.join(__dirname, "client", "build")));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
