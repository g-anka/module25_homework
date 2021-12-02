import React from "react";
import "../styles/ContactsRight.css";

function ContactsRight() {

    return (
        <div className={ "main__contacts-wrapper-right" }>
            <p className={ "main__contacts-wrapper-right__text" }>Телефон</p>
            <p className={ "main__contacts-wrapper-right__direct" }>+7 912 123-45-67</p>
        </div>
    )
}

export default ContactsRight;