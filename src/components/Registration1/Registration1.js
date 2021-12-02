import React from "react";
import "./Registration1.css"
import Header from "../Header";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import RegistrationHeading from "../RegistrationHeading/RegistrationHeading";
import Button from "../Button/Button";
import RegistrationError from "../RegistrationError/RegistrationError";


function Registration1() {


    return (
        <>
            <RegistrationError
                className="reg_error"
                text="Не удалось продолжить регистрацию. Попробуйте ещё раз" />
            <Header />
            <main className="reg__main reg__main-hr">
                <RegistrationHeading
                    step="Шаг 1 из 3"
                    heading="Расскажите о себе" />

                <RegistrationForm />
            </main>
        </>
    );
};

export default Registration1;