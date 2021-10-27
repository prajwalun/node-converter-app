const express = require('express');
const router = express.Router();

router.get("/download/", (req, res) => {
    const fs = require("fs");
    var files = fs.createReadStream("./files/downloaded/converted.csv");
    res.writeHead(200, {
      "Content-disposition": "attachment; filename=converted.csv",
    }); //here you can add more headers
    files.pipe(res);
});

module.exports = router;