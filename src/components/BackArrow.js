import React from "react";
import "../styles/BackArrow.css";
import backArrow from "../img/back_arrow.svg"

function BackArrow() {

    return (
        <div className="back-arrow">
            <img src={backArrow}></img>
            <span>Назад</span>
        </div>
    );
}

export default BackArrow;