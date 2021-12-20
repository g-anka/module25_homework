import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App.js";
import Registration1 from "./components/Registration1";
import Test from "./components/Test";
import Registration2 from "./components/Registration2";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Registration3 from "./components/Registration3";
import RegistrationSuccess from "./components/RegistrationSuccess";




ReactDOM.render(
   <React.StrictMode>
        <Router>
            <Registration3 />
        </Router>
   </React.StrictMode>,
    document.getElementById("root")
);