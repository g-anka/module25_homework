import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "../Registration1/Registration1.css"
import Header from "../Header";
import RegistrationHeading from "../RegistrationHeading/RegistrationHeading";
import Button from "../Button/Button";
import SelfieUpload from "../SelfieUpload/SelfieUpload";
import BackArrow from "../BackArrow/BackArrow";
import RegistrationError from "../RegistrationError/RegistrationError";
import selfieUpload from "../../img/selfie_upload.svg";



function Registration2() {

    const [serverError, setServerError] = useState(false); //Для отображения компонента RegistrationError
    const [errorMessage, setErrorMessage] = useState(""); //Для отображения текста в компоненте RegistrationError
    const history = useHistory(); //Для перехода на другую станицу
   // const [image, setImage] = useState(null);

    return (
        <>
            <RegistrationError
                className="reg_error"
                text={errorMessage}
                style={{display: serverError ? "flex" : "none" }}/>

            <Header />
            <main className="reg__main">
                <BackArrow />
                <RegistrationHeading
                    className="reg__main-heading"
                    step="Шаг 2 из 3"
                    heading="Загрузите селфи"
                    text="Смотрите прямо в камеру, без солнцезащитных очков и головных уборов." />

                <SelfieUpload/>

                <hr size="1" color="#E5E5E5"/>
                <Button
                    className="reg__main_btn"
                    type="submit"
                    btnName="Продолжить" />
            </main>
        </>
    );
};

export default Registration2;