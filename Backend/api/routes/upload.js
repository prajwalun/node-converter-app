const express = require('express');
const router = express.Router();


router.post("/upload", (req, res) => {
    const newpath = "../../Files/uploaded/";
   // const uploadedfile = req.files.uploadedfile;
   // const filename = req.files.uploadedfile.name;
   // uploadedfile.mv(`${newpath}${filename}`, (err) => {
    const {file} = req.files;
    const filename = file.name;
    file.mv(`${newpath}${filename}`, (err) => { 
      const path = require("path");
      const extension = path.extname(`${filename}`);
      if (extension != ".asc" || `${filename}` === null) {
        //res.status(500).send({ message: "File upload failed", code: 200 });
      } else {
        //res.status(200).send({ message: "File Uploaded", code: 200 });
      }
    });
});


module.exports = router;