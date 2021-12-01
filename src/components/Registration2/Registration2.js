import React from "react";
import "../Registration1/Registration1.css"
import Header from "../Header";
import RegistrationHeading from "../RegistrationHeading/RegistrationHeading";
import Button from "../Button/Button";
import SelfieUpload from "../SelfieUpload/SelfieUpload";
import BackArrow from "../BackArrow/BackArrow";
import RegistrationError from "../RegistrationError/RegistrationError";

function Registration2() {

    return (
        <>
            <RegistrationError
                className="reg_error"
                text="Не удалось загрузить фото"
            />
            <Header />
            <main className="reg__main">
                <BackArrow />
                <RegistrationHeading
                    className="reg__main-heading"
                    step="Шаг 2 из 3"
                    heading="Загрузите селфи"
                    text="Смотрите прямо в камеру, без солнцезащитных очков и головных уборов." />

                <SelfieUpload />

                <hr noshade size="1" color="#E5E5E5"/>
                <Button
                    className="reg__main_btn"
                    type="submit" btnName="Продолжить" />
            </main>
        </>
    );
};

export default Registration2;