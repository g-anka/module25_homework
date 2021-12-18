import React from "react";
import "../Registration1/Registration1.css"
import Header from "../Header";
import RegistrationHeading from "../RegistrationHeading/RegistrationHeading";
import Button from "../Button/Button";
import BackArrow from "../BackArrow/BackArrow";
import FileUpload from "../FileUpload/FileUpload";
import RegistrationError from "../RegistrationError/RegistrationError";

function Registration3() {

    return (
        <>
            <RegistrationError
                className="reg_error"
                text="Не удалось продолжить регистрацию. Попробуйте ещё раз"
            />
            <Header />
            <BackArrow />
            <main className="reg__main">
                <RegistrationHeading
                    className="reg__main-heading"
                    step="Шаг 3 из 3"
                    heading="Загрузите документы"
                    text="Разворот паспорта и страницу с пропиской, а также водительское удостоверение с двух сторон"
                    id="h6-reg3"/>

                <FileUpload />

                <hr size="1" color="#E5E5E5"/>
                <Button
                    className="reg__main_btn"
                    type="submit" btnName="Зарегистрироваться" />
            </main>
        </>
    );
}

export default Registration3;