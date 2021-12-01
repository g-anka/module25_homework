import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FAQText from "./FAQText";
import FAQQuestions from "./FAQQuestions";

function FAQ() {
    return (
        <div>
            <Header />
            <main className={ "main" }>
                <FAQText />
                <FAQQuestions />
            </main>
            <Footer />
        </div>
    );
}


export default FAQ;