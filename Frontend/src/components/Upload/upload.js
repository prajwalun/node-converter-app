import React, { useState } from "react";
import axios from "axios";
import convert from "./../../Assets/Group 4.png";
import icon1 from "./../../Assets/Group 5.png";
import "./upload.css";


// Function for uploading a file
function Fileupload() {
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [showText, setShowText] = useState(false);
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    const uploadFile = async (e) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", fileName);
      try {
        const res = await axios.post("http://localhost:5000/upload", formData);
        alert("File Has been Uploaded");
        setShowText(true);
        console.log(res);
      } catch (exc) {
        alert("Select the correct file");
        console.log(exc);
      }
    };
    return (
        <div class="container">
          <h1>Converter: ASCII zu CSV</h1>
          <div class="frame">
            <div class="brdr">
              <div class="icon1">
                <img class="icon1img" src={icon1} />
              </div>
              <div class="center">
                <div class="dropzone">
                  <label>
                    <input
                      type="file"
                      className="upload-input one"
                      onChange={saveFile}
                      accept=".asc"
                    />
                    Choose File
                  </label>
                </div>
                <button className="upload-btn" onClick={uploadFile}>
                  Upload
                </button>
              </div>
            </div>
          </div>
          <br></br>
          {showText && (
            <div>
              <a class="convert-btn" href="/process">
                Convert zu CSV
              </a>
            </div>
          )}
          <div class="section2">
            <div class="imgsec">
              <img src={convert} />
            </div>
            <div class="listsec">
              <ol>
                <li>ASCII-Datei auswählen und auf Upload klicken.</li>
                <li>Conversion zu CSV per Klick starten.</li>
                <li>
                  {" "}
                  Nach Ende des Conversion-Vorgangs steht die CSV-Datei zum Download
                  bereit.
                </li>
              </ol>
            </div>
          </div>
        </div>
      );
}

export default Fileupload ;

