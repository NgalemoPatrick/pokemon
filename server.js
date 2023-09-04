require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const PORT = process.env.PORT || 9000;
const { logger } = require("./middleware/logEvents");


// onnect to mongoDb
connectDB();
// custom middlewar logger
app.use(logger);
// content-type: application/x-www-form-urlencoded get data when form is submitted
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// built-in middleware to serve static files
app.use(express.static(path.join(__dirname, "/public")));

// provide routes
app.use("/", require("./routes/root"));
app.use("/pokemon", require("./routes/api/pokemon"));

// route

// catch all
app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// listen to the connect with database before connect to port
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
});
