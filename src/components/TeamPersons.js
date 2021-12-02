import React from "react";
import "../styles/TeamPersons.css";


function TeamPersons() {
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
                    <img src={`../img/photo_${person.name}_${person.surname}.png`} alt="Фото" />
                    <h4>{ person.name } {person.surname}</h4>
                    <h5>{ person.position }</h5>
                </div>
    });

    return (
        personDiv
    )

}

export default TeamPersons;