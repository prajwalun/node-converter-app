const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const stream = require("stream");
const fastcsv = require("fast-csv");
const utf8 = require("utf8");
const fileUpload = require("express-fileupload");

const uploadRoute = require("./api/routes/upload");
const processRoute = require("./api/routes/process");
const downloadRoute = require("./api/routes/download");


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });


app.use(cors());
app.use(fileUpload());
app.use(express.static("files"));


app.use("/upload", uploadRoute);
app.use("/process", processRoute);
app.use("/download", downloadRoute);



module.exports = app;