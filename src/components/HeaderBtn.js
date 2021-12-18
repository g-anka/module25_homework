import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderBtn.css";

function HeaderBtn() {
    return (
        <Link to="/register/step1">
            <button className={ "header__btn is-desktop" }>
                Войти
            </button>
        </Link>
    )
}

export default HeaderBtn;