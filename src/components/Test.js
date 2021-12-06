import React, {useState} from "react";
import "../components/RegistrationError/RegistrationError.css"

function Test() {

    const [serverError, useServerError] = useState(false)

    function handle() {
        useServerError(true)
    }

    return (
        <>
            <div className="reg_error" style={{display: serverError ? "flex" : "none" }} >
                <p>Это тест</p>
            </div>
            <button onClick={handle}>Включить див</button>
        </>
    );

}

export default Test;