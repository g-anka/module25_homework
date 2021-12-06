import React, {useState} from "react";

export default function useServerError() {

    const [serverError, setServerError] = useState(true); //Для отображения компонента RegistrationError

    const [errorMessage, setErrorMessage] = useState(""); //Для отображения текста в компоненте RegistrationError

    return {serverError, setServerError, errorMessage, setErrorMessage}
}
