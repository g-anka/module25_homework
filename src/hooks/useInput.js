import React, {useState} from "react";
import useValidation from "./useValidation";



const useInput = (initialValue, validations ) => {
    let [value, setValue] = useState(initialValue);
    const [isClicked, setClicked] = useState(false);

    const valid = useValidation(value, validations);


    const handleChange = e => {
        setValue(e.target.value);
        console.log("VALUE: ", value);
    };

    const onBlur = e => {
        setClicked(true)
    }

    return { handleChange, value,  onBlur, isClicked, ...valid };
};



export default useInput;