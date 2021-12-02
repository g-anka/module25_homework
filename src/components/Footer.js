import React from "react";
import "../styles/Footer.css";

function Footer() {

    return (
        <footer className={ "footer" }>
            <p className={ "footer__copyright" }>© SkillDrive Inc. 2020</p>
            <div className={ "footer__right-social" }>
                <a id="icon-vk" href="https://vk.com/" target="_blank" aria-label="Наша страница в Вконтакте"></a>
                <a id="icon-insta" href="https://www.instagram.com/" target="_blank" aria-label="Наш профиль в Инстаграм"></a>
                <a id="icon-fb" href="https://facebook.com/" target="_blank" aria-label="Наша страница на Фейсбук"></a>
            </div>
        </footer>
    )
}

export default Footer;