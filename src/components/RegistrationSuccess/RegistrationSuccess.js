import React from "react";
import "./RegistrationSuccess.css"
import HeaderLogo from "../HeaderLogo";
import Button from "../Button/Button";

function RegistrationSuccess() {

    return (
        <>
            <header className="reg_success__header">
                <HeaderLogo />
            </header>
            <main className="reg__main reg_success__main">
                <img className="reg_success_img" src="./src/img/reg_success.png" alt="иллюстрация"/>
                <h2>Успех!</h2>
                <h6>Вы успешно зарегистрировались. Дождитесь проверки документов и начните пользоваться сервисом.</h6>
                <Button
                    className="reg_success_btn"
                    type="submit" btnName="Перейти на главную"/>
            </main>
        </>
    );
}

export default RegistrationSuccess;