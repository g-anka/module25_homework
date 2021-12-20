import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/FAQ.css";

function FAQ() {
    let questionsAnswers = [

        {
            "question":"Могу ли я отменить бронь?",
            "answer":"Можете, но лучше не надо, с нами хорошо."},

        {
            "question":"Могу ли я вернуть деньги, если не подошёл автомобиль?",
            "answer":"Какие деньги? о_О"},

        {
            "question":"Что делать, если случилось ДТП?",
            "answer":"Просто позвоните нам и следуйте дальнейшей инструкции. Все равно сразу не запомните."},

        {
            "question":"Могу ли я оставить автомобиль в удобном для меня месте?",
            "answer":"Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили."},

        {
            "question":"Что делать, если собственник просит заплатить ему напрямую?",
            "answer":"Пфф, это развод чистой воды, не соглашайтесь. Напишите нам об этом, мы его накажем за такие выходки."},

        {
            "question":"Должен ли я заправлять автомобиль?",
            "answer":"Если по каким-то причинам вы не можете заправить автомобиль, попросите это сделать другого человека. Например, сотрудника заправки."},
    ];

    function collapseBlocks(event) {
        event.target.classList.toggle("active");
        let content = event.target.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }


    let collapsibleBtns = questionsAnswers.map((text,index) => {
        return  <>
            <button key={index} className="main__questions-btn" onClick={ collapseBlocks }>{text.question}</button>
            <div className="main__questions-content">
                <p>{ text.answer }</p>
            </div>
        </>
    });

    return (
        <div>
            <Header />
            <main className="main">
                <section className="main__heading">
                    <img className="is-desktop" src={require("../img/undraw_questions_75e0 1.svg").default} alt="Иллюстрация"/>
                    <img className="is-mobile" src={require("../img/undraw_questions_75e0 1(mobile).svg").default} alt="Иллюстрация"/>
                    <h1>Частые вопросы</h1>
                    <p>Отвечаем на вопросы, которые у вас могут возникнуть.</p>
                </section>

                <section className="main__questions">
                    {collapsibleBtns}
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default FAQ;