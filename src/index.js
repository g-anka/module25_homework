import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App.js";
import Registration1 from "./components/Registration1/Registration1";
import Test from "./components/Test";




ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Registration1 />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);