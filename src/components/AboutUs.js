import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutUsText from "./AboutUsText";
import Contacts from "./Contacts";
import Team from "./Team";

function AboutUs() {
    return (
        <div>
            <Header />
            <main className={ "main" }>
                <AboutUsText />
                <Contacts />
                <Team />
            </main>
            <Footer />
        </div>
    );
}


export default AboutUs;