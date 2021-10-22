const express = require('express');
const cors = require("cors");
const fs = require("fs");
const app = express();

const uploadRoute = require('./api/routes/upload');

app.use(cors());
app.use('/upload', uploadRoute);

module.exports = app;