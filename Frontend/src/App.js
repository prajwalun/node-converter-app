import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";
import Fileupload from "./components/Upload/upload";
import Process from "./components/Process/process";

function App() {
  return(
    <div className = "App">
      <Router>
        <Route exact path = "/" component = {Fileupload} />
        <Route exact path="/process" component={Process} />
      </Router>
    </div>
  );
}

export default App;


