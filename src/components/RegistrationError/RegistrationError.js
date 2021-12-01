import React from "react";
import "./RegistrationError.css"

function RegistrationError(props) {

    return (
        <div className={props.className} >
            <p>{props.text}</p>
        </div>
    );
}

export default RegistrationError;