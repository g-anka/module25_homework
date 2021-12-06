import React from "react";
import "../styles/HeaderBurger.css";
import menu from "../img/menu-burger.svg";

function HeaderBurger() {
    return (
        <img className="headerBurger is-mobile" src={menu} alt="Меню" />)
};

export default HeaderBurger;