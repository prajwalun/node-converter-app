const express = require('express');
const router = express.Router();

router.post("/process", (req, res) => {
    const newpath = "./files/uploaded/";   
    const {file} = req.files;
    const filename = file.name;
    file.mv(`${newpath}${filename}`, (err) => {
      const path = require("path");
      const extension = path.extname(`${filename}`);
      if (extension != ".asc" || `${filename}` === null) {
         //res.status(500).send({ message: "File upload failed", code: 200 });
      } else {
        
        function save_file(callback) {
          const origin = fs.createReadStream(
          `${newpath}${filename}`, 
          {encoding:'latin1'}
          );
  
          const transform = new stream.Transform({
            writableObjectMode: true,
            encoding: 'utf8',
            transform: function removeNewLines(chunk, encoding, callback) {
                let formatted = chunk.replace(/,/g, ".").replace(/;/g, ",")
              callback(
                  null, 
                  utf8.encode(formatted)
              );
            },
          });
  
          const destination = fs.createWriteStream(
            "./files/processing/original.csv",
            {encoding:'utf8'}
            );
            
            origin
            .pipe(transform)
            .pipe(destination);
  
            // const data = fs.readFileSync(`${newpath}${filename}`,
            //   {encoding:'latin1', flag:'r'});
            // fs.writeFileSync("./programming.csv",data);
  
  
          setTimeout(function () {
            console.log("save_file function executed");
            callback();
          }, 3000);
  
          
        }

    }save_file( function() {

    });
},
    )});

module.exports = router;