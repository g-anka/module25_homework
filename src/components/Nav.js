import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
    let navClass ="navLink";
    return (
       <nav className={ "header__nav is-desktop"}>
           <Link className={ navClass } to="/about_us">О нас</Link>
           <Link className={ navClass } to="/conditions">Условия</Link>
           <Link className={ navClass } to="/FAQ">Частые вопросы</Link>
       </nav>
    )
}

export default Nav;