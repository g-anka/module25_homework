import React, {useState} from "react";
import "./RegistrationError.css"
import useServerError from "../../hooks/useServerError";

function RegistrationError(props) {

   // const {serverError} = useServerError();

        return (
            <div className={props.className} style={props.style} >
                <p>{props.text}</p>
            </div>
        );

}

export default RegistrationError;