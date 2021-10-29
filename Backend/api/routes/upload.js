const express = require('express');
const router = express.Router();


router.post("/upload", (req, res) => {
    //const newpath = "../../Files/uploaded/";
   // const uploadedfile = req.files.uploadedfile;
   // const filename = req.files.uploadedfile.name;
   // uploadedfile.mv(`${newpath}${filename}`, (err) => {
    let myFile;
    let path;

    if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).send('No files were uploaded.');
      return;
    }

    myFile = req.files.myFile;
    path = __dirname + "../../Files/uploaded/" + myFile.name;
    myFile.mv(path,(err) => { 
      //const path = require("path");
      //const extension = path.extname(`${filename}`);
      //if (extension != ".asc" || `${filename}` === null) {
      //  res.status(500).send({ message: "File upload failed", code: 200 });
      //} else {
      //  res.status(200).send({ message: "File Uploaded", code: 200 });
      //}
      if( err ) {
        return res.status(500).send(err);
      }
      return res.send({ status: "success", path: path });
    
    });
});


module.exports = router;