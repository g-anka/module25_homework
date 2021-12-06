import React, {useState} from "react";
import axios from "axios";
import Header from "../Header";
import RegistrationHeading from "../RegistrationHeading/RegistrationHeading";
import Button from "../Button/Button";
import RegistrationError from "../RegistrationError/RegistrationError";
import RegistrationFormUnit from "../RegistrationFormUnit/RegistrationFormUnit";
import RegistrationPassword from "../RegistrationPassword/RegistrationPassword";
import "./Registration1.css"
import useInput from "../../hooks/useInput";
import useServerError from "../../hooks/useServerError";
import calendar from "../../img/calendar.svg";
import spinner from "../../img/loader-spinner.svg";

function Registration1() {

    const username = useInput('', {isEmpty: true});
    const birthDate = useInput('', {isEmpty: true});
    const email = useInput('', {isEmpty: true, isEmail: false});
    const phone = useInput('', {isEmpty: true});
    const passport = useInput('', {isEmpty: true});
    const passportDate = useInput('', {isEmpty: true});
    const passportWhoGave = useInput('', {isEmpty: true});
    const passportOfficeNumber = useInput('', {isEmpty: true});
    const drivingLicence = useInput('', {isEmpty: true});
    const drivingLicenceDate = useInput('', {isEmpty: true});
    const password = useInput('', {isEmpty: true});
    const password2 = useInput('', {isEmpty: true});


    // Функции для стилизации валидированных полей
    const colorInputRed = (id) => {
        let inputField = document.getElementById(id);
        inputField.classList.add("error-border")
    }

    const removeInputRed = (id) => {
        let inputField = document.getElementById(id);
        inputField.classList.remove("error-border")
    }

    //Отправка данных на сервер
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false); //Для иконки прогрузки на кнопке submit
    const [serverError, setServerError] = useState(false); //Для отображения компонента RegistrationError
    const [errorMessage, setErrorMessage] = useState(""); //Для отображения текста в компоненте RegistrationError


    /*useEffect(() => {
        fetch('/api/register/step1')
            .then(res => res.json())
            .then(json => setUsers(json))

    }, [])*/


    console.log("myERRORSERVERstart: ", serverError)

    function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        axios.post('http://localhost:8000/api/register/step1', {
            username: username.value,
            birthDate: birthDate.value,
            email: email.value,
            phone: phone.value,
            passport: passport.value,
            passportDate: passportDate.value,
            passportWhoGave: passportWhoGave.value,
            passportOfficeNumber: passportOfficeNumber.value,
            drivingLicence: drivingLicence.value,
            drivingLicenceDate: drivingLicenceDate.value,
            password: password.value })
            .then((res) => {
                console.log("RES: ", res);
                res.data;
            })
            .then(data => setUsers(data))
            .catch((error) => {
                setLoading(false);
                setErrorMessage(error.response.data.message)
                setServerError (true)
                console.log("res.data.MESSAGE: ", error.response.data.message)
                console.log("myERRORSERVER: ", serverError)
            })
    }


    return (
        <>
            <RegistrationError
                className="reg_error"
                text={errorMessage}
                style={{display: serverError ? "flex" : "none" }}/>

            <Header />
            <main className="reg__main reg__main-hr">
                <RegistrationHeading
                    step="Шаг 1 из 3"
                    heading="Расскажите о себе" />

                <section>
                    <form className="reg-form">
                        <div className="form-container">
                            <h3>Информация о вас</h3>
                            <RegistrationFormUnit
                                label="ФИО"
                                htmlFor="username"
                                name="username"
                                id="username"
                                placeholder="ФИО полностью"
                                type="text"
                                inputClass="input input-long"
                                divIcon="nodiv-icon"
                                value={username.value}
                                onChange={e => username.handleChange(e)}
                                onBlur={e => username.onBlur(e)} />
                            {(username.isClicked && username.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(username.isClicked && username.isEmpty) && colorInputRed("username")}
                            {(username.isClicked && !username.isEmpty) && removeInputRed("username")}



                            <RegistrationFormUnit
                                label="Дата рождения"
                                htmlFor="birthDate"
                                name="birthDate"
                                id="birthDate"
                                type="data"
                                formIcon="form-icon"
                                divIcon="div-icon"
                                img={calendar}
                                value={birthDate.value}
                                onChange={e => birthDate.handleChange(e)}
                                onBlur={e => birthDate.onBlur(e)} />

                            <RegistrationFormUnit
                                label="Электронная почта"
                                htmlFor="email"
                                name="email"
                                id="email"
                                placeholder="mail@example.com"
                                type="email"
                                inputClass="input input-long"
                                divIcon="nodiv-icon"
                                value={email.value}
                                onChange={e => email.handleChange(e)}
                                onBlur={e => email.onBlur(e)} />
                            {(email.isClicked && email.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(email.isClicked && !email.isEmpty && email.emailError) && <div className="input-error-message">Не верная почта</div>}
                            {(email.isClicked && !email.inputValid) && colorInputRed("email")}
                            {(email.isClicked && email.inputValid) && removeInputRed("email")}



                            <RegistrationFormUnit
                                label="Телефон"
                                htmlFor="phone"
                                name="phone"
                                id="phone"
                                placeholder="+7 900 000-00-00"
                                type="tel"
                                divIcon="nodiv-icon"
                                value={phone.value}
                                onChange={e => phone.handleChange(e)}
                                onBlur={e => phone.onBlur(e)} />
                            {(phone.isClicked && phone.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(phone.isClicked && phone.isEmpty) && colorInputRed("phone")}
                            {(phone.isClicked && !phone.isEmpty) && removeInputRed("phone")}

                            <h3>Паспорт</h3>
                            <RegistrationFormUnit
                                label="Серия и номер"
                                htmlFor="passport"
                                name="passport"
                                id="passport"
                                placeholder="0000 000000"
                                type="text"
                                divIcon="nodiv-icon"
                                value={passport.value}
                                onChange={e => passport.handleChange(e)}
                                onBlur={e => passport.onBlur(e)} />
                            {(passport.isClicked && passport.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(passport.isClicked && passport.isEmpty) && colorInputRed("passport")}
                            {(passport.isClicked && !passport.isEmpty) && removeInputRed("passport")}

                            <RegistrationFormUnit
                                label="Дата выдачи"
                                htmlFor="passportDate"
                                name="passportDate"
                                id="passportDate"
                                type=" date"
                                formIcon="form-icon"
                                divIcon="div-icon"
                                img={calendar}
                                value={passportDate.value}
                                onChange={e => passportDate.handleChange(e)}
                                onBlur={e => passportDate.onBlur(e)} />

                            <RegistrationFormUnit
                                label="Кем выдан"
                                htmlFor="passportWhoGave"
                                name="passportWhoGave"
                                id="passportWhoGave"
                                placeholder="Название органа выдавшего паспорт"
                                type="text"
                                inputClass="input-long"
                                divIcon="nodiv-icon"
                                value={passportWhoGave.value}
                                onChange={e => passportWhoGave.handleChange(e)}
                                onBlur={e => passportWhoGave.onBlur(e)} />
                            {(passportWhoGave.isClicked && passportWhoGave.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(passportWhoGave.isClicked && passportWhoGave.isEmpty) && colorInputRed("passportWhoGave")}
                            {(passportWhoGave.isClicked && !passportWhoGave.isEmpty) && removeInputRed("passportWhoGave")}

                            <RegistrationFormUnit
                                label="Код подразделения"
                                htmlFor="passportOfficeNumber"
                                name="passportOfficeNumber"
                                id="passportOfficeNumber"
                                placeholder="000-000"
                                type="text"
                                divIcon="nodiv-icon"
                                value={passportOfficeNumber.value}
                                onChange={e => passportOfficeNumber.handleChange(e)}
                                onBlur={e => passportOfficeNumber.onBlur(e)} />
                            {(passportOfficeNumber.isClicked && passportOfficeNumber.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(passportOfficeNumber.isClicked && passportOfficeNumber.isEmpty) && colorInputRed("passportOfficeNumber")}
                            {(passportOfficeNumber.isClicked && !passportOfficeNumber.isEmpty) && removeInputRed("passportOfficeNumber")}

                            <h3>Водительское удостоверение</h3>
                            <RegistrationFormUnit
                                label="Серия и номер"
                                htmlFor="drivingLicence"
                                name="drivingLicence"
                                id="drivingLicence"
                                placeholder="0000 000000"
                                type="text"
                                divIcon="nodiv-icon"
                                value={drivingLicence.value}
                                onChange={e => drivingLicence.handleChange(e)}
                                onBlur={e => drivingLicence.onBlur(e)} />
                            {(drivingLicence.isClicked && drivingLicence.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(drivingLicence.isClicked && drivingLicence.isEmpty) && colorInputRed("drivingLicence")}
                            {(drivingLicence.isClicked && !drivingLicence.isEmpty) && removeInputRed("drivingLicence")}

                            <RegistrationFormUnit
                                label="Дата выдачи"
                                htmlFor="drivingLicenceDate"
                                name="drivingLicenceDate"
                                id="drivingLicenceDate"
                                type="data"
                                formIcon="form-icon"
                                divIcon="div-icon"
                                img={calendar}
                                value={drivingLicenceDate.value}
                                onChange={e => drivingLicenceDate.handleChange(e)}
                                onBlur={e => drivingLicenceDate.onBlur(e)} />
                            {(drivingLicenceDate.isClicked && drivingLicenceDate.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}

                            <h3>Пароль</h3>
                            <RegistrationPassword
                                htmlFor="password"
                                name="password"
                                id="password"
                                value={password.value}
                                onChange={e => password.handleChange(e)}
                                onBlur={e => password.onBlur(e)} />
                            {(password.isClicked && password.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(password.isClicked && !password.isEmpty && password2.isClicked && !password2.isEmpty && password.value !== password2.value) && colorInputRed("password")}
                            {(password.isClicked && !password.isEmpty && password2.isClicked && !password2.isEmpty && password.value == password2.value) && removeInputRed("password")}
                            {(password.isClicked && password.isEmpty) && colorInputRed("password")}

                            <RegistrationPassword
                                htmlFor="password2"
                                name="password2"
                                id="password2"
                                value={password2.value}
                                onChange={e => password2.handleChange(e)}
                                onBlur={e => password2.onBlur(e)} />
                            {(password2.isClicked && password2.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(password.isClicked && !password.isEmpty && password2.isClicked && !password2.isEmpty) && (password.value !== password2.value) && <div className="input-error-message">Пароли не совпадают</div>}
                            {(password.isClicked && !password.isEmpty && password2.isClicked && !password2.isEmpty && password.value !== password2.value) && colorInputRed("password2")}
                            {(password.isClicked && !password.isEmpty && password2.isClicked && !password2.isEmpty && password.value == password2.value) && removeInputRed("password2")}
                            {(password2.isClicked && password2.isEmpty) && colorInputRed("password2")}
                        </div>
                        <hr size="1" color="#E5E5E5"/>
                        <Button
                            className="reg__main_btn"
                            type="submit"
                            onClick={onSubmit}
                            btnName={ loading? <img className="spinner" src={spinner} alt="загрузка..." /> : <span className="btn-text">Продолжить</span>}
                            disabled={!username.inputValid || !birthDate.inputValid || !email.inputValid || !phone.inputValid || !passport.inputValid || !passportDate.inputValid || !passportWhoGave.inputValid || !passportOfficeNumber.inputValid || !drivingLicence.inputValid || !drivingLicenceDate.inputValid || !password.inputValid || !password2.inputValid || password.value != password2.value} />
                    </form>
                </section>
            </main>
        </>
    );
}

export default Registration1;