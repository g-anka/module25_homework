import {useState, useEffect} from "react";


const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [emailError,  setEmailError] = useState(false)
    const [inputValid, setInputValid] = useState(false)
   // const [errorColor, setErrorColor] = useState("2px solid red")

    //const el = document.querySelectorAll("input");
   // el.style.border = errorColor;



    useEffect(() => {
        for(const validation in validations) {
            switch (validation) {
                case "isEmpty":
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case "isEmail":
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    re.test(value.toLowerCase()) ? setEmailError(false) : setEmailError (true)
                    break;
               /* case "isValid":
                    inputValid ? setErrorColor("2px solid blue") : setErrorColor("2px solid red")
                    break;*/
            }
        }

    }, [value])

    useEffect(() => {
        if(isEmpty || emailError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, emailError])

    return { isEmpty, emailError, inputValid }
}


export default useValidation;