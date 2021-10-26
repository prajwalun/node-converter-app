const express = require('express');
const cors = require("cors");
const fs = require("fs");
const app = express();

const uploadRoute = require('./api/routes/upload');
const processRoute = require('./api/routes/process');

app.use(cors());
app.use('/upload', uploadRoute);
app.use('/process', processRoute);

module.exports = app;