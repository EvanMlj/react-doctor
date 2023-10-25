import { useState } from 'react';
const useInput = (validatedValue) => {
    const [enteredValue, setEnteredValue] = useState('') ;
    const [isTouched, setIsTouched] = useState(false) ;

    const valueIsValid = validatedValue(enteredValue);
    const hasError = !valueIsValid && isTouched ;

    const valueChangerHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangerHandler,
        inputBlurHandler,
        reset
    }; 
};

export default useInput;