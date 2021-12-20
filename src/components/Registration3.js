import React, {useState} from "react";
import "../styles/Registration.css"
import Header from "./Header";
import Button from "./Button/Button";
import BackArrow from "./BackArrow";
import ErrorPopup from "./ErrorPopup";

function Registration3() {
    const [serverError, setServerError] = useState(false); //Для отображения компонента ErrorPopup
    const [errorMessage, setErrorMessage] = useState(""); //Для отображения текста в компоненте ErrorPopup

    return (
        <>
            <ErrorPopup
                className="reg_error"
                text={errorMessage}
                style={{display: serverError ? "flex" : "none" }}/>

            <Header />
            <BackArrow />
            <main className="reg__main">
                <section className="reg__main-heading">
                    <p>Шаг 3 из 3</p>
                    <h1>Загрузите документы</h1>
                    <h6 id="h6-reg3">Разворот паспорта и страницу с пропиской, а также водительское удостоверение с двух сторон</h6>
                </section>

                <div className="upload-frame is-desktop">
                    <img className="file-upload-icon" src={require("../img/file-upload.svg").default} alt="иконка"/>
                    <h4>Перетащите или <span>выберите файл</span></h4>
                    <h5>JPG или PNG, не более 30 мб</h5>
                </div>

                <div className="upload-frame-mobile is-mobile">
                    <img className="file-upload-icon-mobile" src={require("../img/file-upload_mobile.svg").default} alt="иконка"/>
                    <div>
                        <h4>Загрузить файл</h4>
                        <h5>JPG или PNG, не более 30 мб</h5>
                    </div>
                </div>

                <hr size="1" color="#E5E5E5"/>
                <Button
                    className="reg__main_btn"
                    type="submit" btnName="Зарегистрироваться" />
            </main>
        </>
    );
}

export default Registration3;