
import useInput from "../hooks/use-input";

export const Form = (props) => {

    const donnesSelectInput = [
        {value: 
            [
                'Choose Department',
                'Choose Doctors'
            ]
        },
        {value: 'Software Design' },
        {value: 'Development cycle' },
        {value: 'Software Development' },
        {value: 'Maintenance'},
        {value: 'Process Query' },
        {value: 'Cost and Duration' },
        {value: 'Modal Delivery'}
    ]

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
                    <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option value={donnesSelectInput[0].value[0]}>{donnesSelectInput[0].value[0]}</option>
                            {donnesSelectInput.slice(1).map((value, index) => (
                                <option key={index} value={value.value}>{value.value}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect2">
                            <option value={donnesSelectInput[0].value[1]}>{donnesSelectInput[0].value[1]}</option>
                            {donnesSelectInput.slice(1).map((value, index) => (
                                <option key={index} value={value.value}>{value.value}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input name="date" id="date" type="date" className="form-control" placeholder="dd/mm/yyyy"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input name="time" id="time" type="text" className="form-control" placeholder="Time"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input name="phone" id="phone" type="Number" className="form-control" placeholder="Phone Number"/>
                    </div>
                </div>
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