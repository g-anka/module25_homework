import React from "react";
import "./RegistrationHeading.css"

function RegistrationHeading(props) {
    return (
        <section className={props.className}>
            <p>{props.step}</p>
            <h1>{props.heading}</h1>
            <h6 id={props.id}>{props.text}</h6>
        </section>
    );
}

export default RegistrationHeading;