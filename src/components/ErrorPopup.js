import React from "react";
import "../styles/ErrorPopup.css"


function ErrorPopup(props) {

        return (
            <div className={props.className} style={props.style} >
                <p>{props.text}</p>
            </div>
        );
}

export default ErrorPopup;