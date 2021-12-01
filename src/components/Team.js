import React from "react";
import "../styles/Team.css";
import TeamPersons from "./TeamPersons";


function Team() {

    return (
        <section className={ "main__team" }>
            <h2>Команда</h2>
            <div className={ "main__team-wrapper" }>
                <TeamPersons />
            </div>
        </section>
    )
}

export default Team;