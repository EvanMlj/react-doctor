
import useInput from "../hooks/use-input";

export const Form = (props) => {
    const { 
            value: enteredName, 
            isValid: enteredNameIsValid,
            hasError: nameInputHasError, 
            valueChangerHandler: nameChangeHandler, 
            inputBlurHandler: nameBlurHandler, 
            reset: resetNameInput
        } = useInput(value => value.trim() !=='') ;

    const {
        value: enteredMessage,
        isValid: enteredMessageIsValid,
        hasError: messageInputHasError,
        valueChangerHandler: messageChangeHandler,
        inputBlurHandler: messageBlurHandler,
        reset: resetMessageInput
    } = useInput(value => value.trim() !== '');

    let formIsValid = false ;


    if(enteredNameIsValid && enteredMessageIsValid) {
        formIsValid = true ;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault() ; 

        if(!enteredNameIsValid) {
            return ;
        }

        resetNameInput() ;
        resetMessageInput() ;
    } ;


    const nameInputClasses =  nameInputHasError 
    ? 'alert alert-danger form-control'
    : 'form-control'  ;

    const messageInputClasses =  messageInputHasError
    ? 'alert alert-danger form-control'
    : 'form-control'  ;

    return (
        <form onSubmit={formSubmissionHandler} className="appointment-form">
            <div className="row">
                <div className="col-lg-6">
                    {nameInputHasError &&
                    <p className="alert alert-danger">Name must not be empty</p>}
                    <input 
                        type="text" 
                        name="name" 
                        className={nameInputClasses} 
                        placeholder="Full Name" 
                        onChange={nameChangeHandler} 
                        onBlur={nameBlurHandler}
                        value={enteredName}
                    />
                </div>
                
                <div className="form-group-2 mb-2">
                    {messageInputHasError &&
                    <p className="alert alert-danger">Message must not be empty</p>}
                    <textarea
                        type="text"
                        name="message"
                        id="message"
                        className={messageInputClasses}
                        rows="6"
                        placeholder="Your Message"
                        onChange={messageChangeHandler}
                        onBlur={messageBlurHandler}
                        value={enteredMessage}
                />
            </div>
        </div>
            <button disabled={!formIsValid} type="submit" className="btn btn-main btn-round-full">Make an Appointement <i className="icofont-simple-right ml-2"/></button>
        </form>
    )
}

//