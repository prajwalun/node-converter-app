const express = require('express');
const cors = require("cors");
const fs = require("fs");
const app = express();
const stream = require("stream");
const fastcsv = require("fast-csv");
const utf8 = require("utf8");
const fileupload = require("express-fileupload");


const uploadRoute = require('./api/routes/upload');
const processRoute = require('./api/routes/process');
const downloadRoute = require('./api/routes/download');

app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use('/upload', uploadRoute);
app.use('/process', processRoute);
app.use('/download', downloadRoute);

module.exports = app;