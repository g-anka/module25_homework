import React from "react";
import "../styles/FAQText.css";

function FAQText() {
    let altName = "Иллюстрация";
    return (
        <section className={ "main__heading" }>
            <img className={ "is-desktop" } src="./src/img/undraw_questions_75e0%201.svg" alt={ altName }/>
            <img className= { "is-mobile" } src="./src/img/undraw_questions_75e0%201(mobile).svg" alt={ altName }/>
            <h1>Частые вопросы</h1>
            <p>Отвечаем на вопросы, которые у вас могут возникнуть.</p>
        </section>
    )
}

export default FAQText;