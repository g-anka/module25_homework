import React from "react";
import "../styles/Header.css";
import HeaderBtn from "./HeaderBtn";
import Nav from "./Nav";
import HeaderLogo from "./HeaderLogo";
import HeaderBurger from "./HeaderBurger";


function Header() {

    return (
        <header className="header">
            <HeaderLogo />
            <Nav />
            <HeaderBtn />
            <HeaderBurger />
        </header>
    )
}

export default Header;