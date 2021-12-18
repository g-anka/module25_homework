import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App.js";
import Registration1 from "./components/Registration1/Registration1";
import Test from "./components/Test";
import Registration2 from "./components/Registration2/Registration2";




ReactDOM.render(
   <React.StrictMode>
        <Router>
            <Registration2 />
        </Router>
   </React.StrictMode>,
    document.getElementById("root")
);