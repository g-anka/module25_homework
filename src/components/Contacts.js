import React from "react";
import "../styles/Contacts.css";

import ContactsLeft from "./ContactsLeft";
import ContactsMiddle from "./ContactsMiddle";
import ContactsRight from "./ContactsRight";


function Contacts() {

    return (
        <section className={ "main__contacts" }>
            <h2>Контакты</h2>
            <div className="main__contacts-wrapper">
                <ContactsLeft />
                <ContactsMiddle />
                <ContactsRight />
            </div>
        </section>
    )
}

export default Contacts;