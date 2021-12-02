import React from "react";
import {Route, Switch} from "react-router-dom";
import "../styles/App.css";
import AboutUs from "./AboutUs";
import FAQ from "./FAQ";
import Registration1 from "./Registration1/Registration1";
import Registration2 from "./Registration2/Registration2";
import Registration3 from "./Registration3/Registration3";
import RegistrationSuccess from "./RegistrationSuccess/RegistrationSuccess";
import Main from "./Main/Main";


function App() {

    return (
        <div className = "App">
            <Switch>
                <Route path="/about_us" component={AboutUs} />
                <Route path="/FAQ" component={FAQ} />
                <Route path="/register/step1" component={<Registration1 />} />
                <Route path="/register/step2" component={Registration2} />
                <Route path="/register/step3" component={Registration3} />
                <Route path="/register/success" component={RegistrationSuccess} />
                <Route path="/" component={Main} />
            </Switch>
        </div>
    );
}

export default App;