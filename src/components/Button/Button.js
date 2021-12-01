import React from "react";
import "./Button.css"

function Button(props) {


    return (
        <>
            <button className={props.className} type={props.type} onClick={props.onClick} disabled={props.disabled}> {props.btnName} </button>
        </>
    );
}

export default Button;