import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Header from "./Header";
import ErrorPopup from "./ErrorPopup";
import useInput from "../hooks/useInput";
import "../styles/Registration.css"
import axios from "axios";
import calendar from "../img/calendar.svg";
import spinner from "../img/loader-spinner.svg";
import eyeClose from "../img/password-hidden.svg";
import eyeOpen from "../img/password-seen.svg";

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

    //Видимость-невидимость пароля
    const [hidden, setHidden ] = useState(true);

    function changeVisibility() {
        let currentState = hidden;
        if (currentState) {
            currentState = false;
        } else {
            currentState = true;
        }
        setHidden (currentState);
    }

    //Отправка данных на сервер
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false); //Для иконки прогрузки на кнопке submit
    const [serverError, setServerError] = useState(false); //Для отображения компонента ErrorPopup
    const [errorMessage, setErrorMessage] = useState(""); //Для отображения текста в компоненте ErrorPopup
    const history = useHistory(); //Для перехода на другую станицу

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
                history.push("/register/step2");
            })
            //.then(data => setUsers(data))
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
            <ErrorPopup
                className="reg_error"
                text={errorMessage}
                style={{display: serverError ? "flex" : "none" }}/>

            <Header />
            <main className="reg__main reg__main-hr">
                <section>
                    <p>Шаг 1 из 3</p>
                    <h1>Расскажите о себе</h1>
                </section>

                <section>
                    <form className="reg-form">
                        <div className="form-container">
                            <h3>Информация о вас</h3>
                            <div className="form_unit">
                                <label className="form_name" htmlFor="username">ФИО</label>
                                <input name="username"
                                       className="input-long"
                                       id="username"
                                       type="text"
                                       value={username.value}
                                       onChange={e => username.handleChange(e)}
                                       onBlur={e => username.onBlur(e)}
                                       placeholder="ФИО полностью" />
                            </div>
                            {(username.isClicked && username.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(username.isClicked && username.isEmpty) && colorInputRed("username")}
                            {(username.isClicked && !username.isEmpty) && removeInputRed("username")}


                            <div className="form_unit form-icon">
                                <label className="form_name" htmlFor="birthDate">Дата рождения</label>
                                <input name="birthDate"
                                       id="birthDate"
                                       type="date"
                                       value={birthDate.value}
                                       onChange={e => birthDate.handleChange(e)}
                                       onBlur={e => birthDate.onBlur(e)} />
                                <div className="div-icon"><img src={calendar} alt="иконка"></img></div>
                            </div>


                            <div className="form_unit" >
                                <label className="form_name" htmlFor="email">Электронная почта</label>
                                <input name="email"
                                       className="input-long"
                                       id="email"
                                       type="email"
                                       value={email.value}
                                       onChange={e => email.handleChange(e)}
                                       onBlur={e => email.onBlur(e)}
                                       placeholder="mail@example.com"  />
                            </div>
                            {(email.isClicked && email.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(email.isClicked && !email.isEmpty && email.emailError) && <div className="input-error-message">Не верная почта</div>}
                            {(email.isClicked && !email.inputValid) && colorInputRed("email")}
                            {(email.isClicked && email.inputValid) && removeInputRed("email")}


                            <div className="form_unit" >
                                <label className="form_name" htmlFor="phone">Телефон</label>
                                <input name="phone"
                                       id="phone"
                                       type="tel"
                                       value={phone.value}
                                       onChange={e => phone.handleChange(e)}
                                       onBlur={e => phone.onBlur(e)}
                                       placeholder="+7 900 000-00-00"  />
                            </div>
                            {(phone.isClicked && phone.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(phone.isClicked && phone.isEmpty) && colorInputRed("phone")}
                            {(phone.isClicked && !phone.isEmpty) && removeInputRed("phone")}

                            <h3>Паспорт</h3>
                            <div className="form_unit" >
                                <label className="form_name" htmlFor="passport">Серия и номер</label>
                                <input name="passport"
                                       id="passport"
                                       type="text"
                                       value={passport.value}
                                       onChange={e => passport.handleChange(e)}
                                       onBlur={e => passport.onBlur(e)}
                                       placeholder="0000 000000"  />
                            </div>
                            {(passport.isClicked && passport.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(passport.isClicked && passport.isEmpty) && colorInputRed("passport")}
                            {(passport.isClicked && !passport.isEmpty) && removeInputRed("passport")}


                            <div className="form_unit form-icon" >
                                <label className="form_name" htmlFor="passportDate">Дата выдачи</label>
                                <input name="passportDate"
                                       id="passportDate"
                                       type="date"
                                       value={passportDate.value}
                                       onChange={e => passportDate.handleChange(e)}
                                       onBlur={e => passportDate.onBlur(e)} />
                                <div className="div-icon"><img src={calendar} alt="иконка"></img></div>
                            </div>


                            <div className="form_unit" >
                                <label className="form_name" htmlFor="passportWhoGave">Кем выдан</label>
                                <input name="passportWhoGave"
                                       className="input-long"
                                       id="passportWhoGave"
                                       type="text"
                                       value={passportWhoGave.value}
                                       onChange={e => passportWhoGave.handleChange(e)}
                                       onBlur={e => passportWhoGave.onBlur(e)}
                                       placeholder="Название органа выдавшего паспорт" />
                            </div>
                            {(passportWhoGave.isClicked && passportWhoGave.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(passportWhoGave.isClicked && passportWhoGave.isEmpty) && colorInputRed("passportWhoGave")}
                            {(passportWhoGave.isClicked && !passportWhoGave.isEmpty) && removeInputRed("passportWhoGave")}


                            <div className="form_unit" >
                                <label className="form_name" htmlFor="passportOfficeNumber">Код подразделения</label>
                                <input name="passportOfficeNumber"
                                       id="passportOfficeNumber"
                                       type="text"
                                       value={passportOfficeNumber.value}
                                       onChange={e => passportOfficeNumber.handleChange(e)}
                                       onBlur={e => passportOfficeNumber.onBlur(e)}
                                       placeholder="000-000" />
                            </div>
                            {(passportOfficeNumber.isClicked && passportOfficeNumber.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(passportOfficeNumber.isClicked && passportOfficeNumber.isEmpty) && colorInputRed("passportOfficeNumber")}
                            {(passportOfficeNumber.isClicked && !passportOfficeNumber.isEmpty) && removeInputRed("passportOfficeNumber")}


                            <h3>Водительское удостоверение</h3>
                            <div className="form_unit">
                                <label className="form_name" htmlFor="drivingLicence">Серия и номер</label>
                                <input name="drivingLicence"
                                       id="drivingLicence"
                                       type="text"
                                       value={drivingLicence.value}
                                       onChange={e => drivingLicence.handleChange(e)}
                                       onBlur={e => drivingLicence.onBlur(e)}
                                       placeholder="0000 000000" />
                            </div>
                            {(drivingLicence.isClicked && drivingLicence.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(drivingLicence.isClicked && drivingLicence.isEmpty) && colorInputRed("drivingLicence")}
                            {(drivingLicence.isClicked && !drivingLicence.isEmpty) && removeInputRed("drivingLicence")}


                            <div className="form_unit form-icon" >
                                <label className="form_name" htmlFor="drivingLicenceDate">Дата выдачи</label>
                                <input name="drivingLicenceDate"
                                       id="drivingLicenceDate"
                                       type="date"
                                       value={drivingLicenceDate.value}
                                       onChange={e => drivingLicenceDate.handleChange(e)}
                                       onBlur={e => drivingLicenceDate.onBlur(e)} />
                                <div className="div-icon"><img src={calendar} alt="иконка"></img></div>
                            </div>
                            {(drivingLicenceDate.isClicked && drivingLicenceDate.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}

                            <h3>Пароль</h3>
                            <div className="form_unit form-icon">
                                <label className="form_name" htmlFor="password">Придумайте пароль</label>
                                <input name="password"
                                       className="input-long"
                                       id="password"
                                       value={password.value}
                                       onChange={e => password.handleChange(e)}
                                       onBlur={e => password.onBlur(e)}
                                       type={ hidden ? "password" : "text"}
                                       placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" required/>
                                <div className="div-icon password" onClick={changeVisibility}><img src={ hidden ? eyeClose : eyeOpen} alt="иконка"></img></div>
                            </div>
                            {(password.isClicked && password.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(password.isClicked && !password.isEmpty && password2.isClicked && !password2.isEmpty && password.value !== password2.value) && colorInputRed("password")}
                            {(password.isClicked && !password.isEmpty && password2.isClicked && !password2.isEmpty && password.value == password2.value) && removeInputRed("password")}
                            {(password.isClicked && password.isEmpty) && colorInputRed("password")}

                            <div className="form_unit form-icon">
                                <label className="form_name" htmlFor="password2">Повторите пароль</label>
                                <input name="password2"
                                       className="input-long"
                                       id="password2"
                                       value={password2.value}
                                       onChange={e => password2.handleChange(e)}
                                       onBlur={e => password2.onBlur(e)}
                                       type={ hidden ? "password" : "text"}
                                       placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" required/>
                                <div className="div-icon password" onClick={changeVisibility}><img src={ hidden ? eyeClose : eyeOpen} alt="иконка"></img></div>
                            </div>
                            {(password2.isClicked && password2.isEmpty) && <div className="input-error-message">Поле не может быть пустым</div>}
                            {(password.isClicked && !password.isEmpty && password2.isClicked && !password2.isEmpty) && (password.value !== password2.value) && <div className="input-error-message">Пароли не совпадают</div>}
                            {(password.isClicked && !password.isEmpty && password2.isClicked && !password2.isEmpty && password.value !== password2.value) && colorInputRed("password2")}
                            {(password.isClicked && !password.isEmpty && password2.isClicked && !password2.isEmpty && password.value == password2.value) && removeInputRed("password2")}
                            {(password2.isClicked && password2.isEmpty) && colorInputRed("password2")}
                        </div>

                        <hr size="1" color="#E5E5E5"/>
                        <button className="reg__main_btn"
                                type="submit"
                                onClick={onSubmit}
                                disabled={!username.inputValid || !birthDate.inputValid || !email.inputValid || !phone.inputValid || !passport.inputValid || !passportDate.inputValid || !passportWhoGave.inputValid || !passportOfficeNumber.inputValid || !drivingLicence.inputValid || !drivingLicenceDate.inputValid || !password.inputValid || !password2.inputValid || password.value != password2.value} >
                            { loading? <img className="spinner" src={spinner} alt="загрузка..." /> : <span className="btn-text">Продолжить</span>}
                        </button>
                    </form>
                </section>
            </main>
        </>
    );
}

export default Registration1;