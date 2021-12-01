import React  from "react";
import "./RegistrationFormUnit.css";

function RegistrationFormUnit(props) {

    return (
        <div className={ `form_unit ${props.formIcon}` } >
            <label className="form_name" htmlFor={props.htmlFor}>{ props.label }</label>
            <input name={props.name} className={props.inputClass} id={ props.id } type={ props.type } value={props.value} onChange={props.onChange} onBlur={props.onBlur} placeholder={props.placeholder}  />
            <div className={ props.divIcon }><img src={props.img} alt="иконка"></img></div>
        </div>
    );
}

export default RegistrationFormUnit;