import { useEffect, useState } from "react";

export const SimpleInput = (props) => {
    
    const [enteredName, setEnteredName] = useState('')
    const [enteredNameTouched, setEnteredNameTouched] = useState(false) ;
    const [formIsValid, setFormIsValid] = useState(false) ;

    const enteredNameIsValid = enteredName.trim() !== '';
    const NameInputIsInvalid = !enteredNameIsValid && enteredNameTouched ;

    useEffect(() => {
        if(enteredNameIsValid) {
            setFormIsValid(true) ;
        } else {
            setFormIsValid(false) ;
        }
    }, [enteredNameIsValid]);

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value) ;
    };

    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true); 
    };
    
    const formSubmissionHandler = (event) => {
        event.preventDefault() ; 

        setEnteredNameTouched(true) ;

        if(!enteredNameIsValid) {
            return ;
        }

        setEnteredName('');
        setEnteredNameTouched(false) ;
    } ;


    const nameInputClasses =  NameInputIsInvalid 
    ? 'alert alert-danger'
    : 'form-control'  ;

    return (
        <form onSubmit={formSubmissionHandler}>
            <input 
                type="text" 
                name="name" 
                className={nameInputClasses} 
                placeholder="Full Name" 
                onChange={nameInputChangeHandler} 
                onBlur={nameInputBlurHandler}
                value={enteredName}
            />
            {NameInputIsInvalid && 
            <p className="alert alert-danger">Name must not be empty</p>}
            <button disabled={!formIsValid} type="submit" className="btn btn-main btn-round-full">Make an Appointement <i className="icofont-simple-right ml-2"/></button>
        </form>
    )
}

