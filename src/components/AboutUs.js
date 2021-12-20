import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/AboutUs.css";

function AboutUs() {
    let picNum = 1;
    let persons = [
        {
            "name":"Иван",
            "surname":"Иванов",
            "position":"СЕО"},

        {
            "name":"Алексей",
            "surname":"Смирнов",
            "position":"Frontend-разработчик"},

        {
            "name":"Денис",
            "surname":"Ярцев",
            "position":"Backend-разработчик"},

        {
            "name":"Николай",
            "surname":"Морозов",
            "position":"Дизайнер"},

        {
            "name":"Ирина",
            "surname":"Деева",
            "position":"Копирайтер"},

        {
            "name":"Мария",
            "surname":"Стрелкова",
            "position":"SMM"}
    ];

    let personDiv = persons.map((person, index) => {
        return  <div key={index} className={ `pic-${picNum++}` }>
            <img src={require(`../img/photo_${person.name}_${person.surname}.png`).default} alt="Фото" />
            <h4>{ person.name } {person.surname}</h4>
            <h5>{ person.position }</h5>
        </div>
    });

    return (
        <div>
            <Header />
            <main className={ "main" }>
                <section className="main__aboutUs">
                    <img className="is-desktop" src={require("../img/undraw_team_spirit_hrr4 1.svg").default} alt="Иллюстрация команды" />
                    <img className="is-mobile" src={require("../img/undraw_team_spirit_hrr4 2.svg").default} alt="Иллюстрация команды" />
                    <h1>О нас</h1>
                    <p className="main__aboutUs__text">Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду.</p>
                </section>

                <section className="main__contacts">
                    <h2>Контакты</h2>
                    <div className="main__contacts-wrapper">
                        <div className="main__contacts-wrapper-left">
                            <p className="main__contacts-wrapper-left__text">Электронная почта</p>
                            <p className="main__contacts-wrapper-left__direct">drive@skillfactory.com</p>
                        </div>

                        <div className="main__contacts-wrapper-middle is-desktop">
                            <svg width="1" height="62" viewBox="0 0 1 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="1" height="62" fill="#C8C8CF"/>
                            </svg>
                        </div>

                        <div className="main__contacts-wrapper-right">
                            <p className="main__contacts-wrapper-right__text">Телефон</p>
                            <p className="main__contacts-wrapper-right__direct">+7 912 123-45-67</p>
                        </div>
                    </div>
                </section>

                <section className="main__team">
                    <h2>Команда</h2>
                    <div className="main__team-wrapper">
                        {personDiv}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}


export default AboutUs;