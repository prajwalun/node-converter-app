import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";
import Fileupload from "./components/Upload/upload";

function App() {
  return(
    <div className = "App">
      <Router>
        <Route exact path = "/" component = {Fileupload} />
      </Router>
    </div>
  );
}

export default App;


