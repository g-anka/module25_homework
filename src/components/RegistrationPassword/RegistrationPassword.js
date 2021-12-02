import React, {useState} from "react";
import "./RegistrationPassword.css"
import useInput from "../../hooks/useInput";
import eyeOpen from "../../img/password-seen.svg";
import eyeClose from "../../img/password-hidden.svg";


function RegistrationPassword(props) {

    const [hidden, setHide ] = useState(true);

    function changeVisibility() {
        let currentState = hidden;
        if (currentState) {
            currentState = false;
        } else {
            currentState = true;
        }
        setHide (currentState);
    }


    return (
        <form className={ `form_unit form-icon` }>
            <label className="form_name" htmlFor={props.htmlFor}>Придумайте пароль</label>
            <input name={props.name} className="input-long" id={ props.id } value={props.value} onChange={props.onChange} onBlur={props.onBlur} type={ hidden ? "password" : "text"} placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" required/>
            <div className="div-icon password" onClick={changeVisibility}><img src={ hidden ? eyeClose : eyeOpen} alt="иконка"></img></div>
        </form>
    );
};

export default RegistrationPassword;