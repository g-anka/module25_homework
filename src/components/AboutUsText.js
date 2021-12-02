import React from "react";
import "../styles/AboutUsText.css";


function AboutUsText() {

    return (
        <section className={ "main__aboutUs" }>
            <img className={ "is-desktop"} src="./src/img/undraw_team_spirit_hrr4%201.svg" alt="Иллюстрация команды" />
            <img className={ "is-mobile"} src="./src/img/undraw_team_spirit_hrr4%202.svg" alt="Иллюстрация команды" />
            <h1>О нас</h1>
            <p className={ "main__aboutUs__text" }>Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду.</p>
        </section>
    )
}

export default AboutUsText;