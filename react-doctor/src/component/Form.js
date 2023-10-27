
import useInput from "../hooks/use-input";


const isNotEmpty = value => value.trim() !== '' ;
const isDate = value => 
    {
    const [year, month, day] = value.split('-');
    const formattedDate = `${day}/${month}/${year}`
    
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return dateRegex.test(formattedDate);
    };
const isPhoneNumber = value => {
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    return phoneRegex.test(value);
} ; 
const isSelecteOption = value => {
    return value !== 'Choose Department' && value !== 'Choose Doctors'
}
const isTime = value => {
    const [hour, minute] =value.split(':').map(Number);
    return minute === 0 || minute === 30 ; 
}


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
        } =  useInput(isNotEmpty) ;

    const {
        value: enteredMessage,
        isValid: enteredMessageIsValid,
        hasError: messageInputHasError,
        valueChangerHandler: messageChangeHandler,
        inputBlurHandler: messageBlurHandler,
        reset: resetMessageInput
    } = useInput(isNotEmpty);

    const{
        value : enteredDate,
        isValid : enteredDateIsValid,
        hasError : dateInputHasError,
        valueChangerHandler : dateChangeHandler,
        inputBlurHandler : dateBlurHandler,
        reset : resetDateInput
    } = useInput(isDate) ;

    const currentDate = new Date() ; 
    const isDateBeforeToday = (date) => {
        const selectedDate = new Date(date) ;
        return selectedDate < currentDate ; 
    } ; 

    const{
        value : enteredPhone,
        isValid : enteredPhoneIsValid,
        hasError : phoneInputHasError,
        valueChangerHandler : phoneChangeHandler,
        inputBlurHandler : phoneBlurHandler,
        reset : resetPhoneInput
    } = useInput(isPhoneNumber) ;

    const {
        value : enteredDepartement, 
        isValid : enteredDepartementIsValid,
        hasError : departementInputHasError,
        valueChangerHandler : departementChangeHandler,
        inputBlurHandler : departementBlurHandler,
        reset : resetDepartementInput
    } = useInput(isSelecteOption) ;

    const {
        value : enteredDoctor,
        isValid : enteredDoctorIsValid,
        hasError : doctorInputHasError,
        valueChangerHandler : doctorChangeHandler,
        inputBlurHandler : doctorBlurHandler,
        reset : resetDoctorInput
    } = useInput(isSelecteOption) ;

    const {
        value : enteredTime,
        isValid : enteredTimeIsValid,
        hasError : timeInputHasError,
        valueChangerHandler : timeChangeHandler,
        inputBlurHandler : timeBlurHandler,
        reset : resetTimeInput
    } = useInput(isTime) ;

    let formIsValid = false ;


    if(enteredNameIsValid 
    && enteredMessageIsValid 
    && enteredDateIsValid 
    && enteredPhoneIsValid 
    && enteredTimeIsValid 
    && enteredDepartementIsValid 
    && enteredDoctorIsValid) {
        formIsValid = true ;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault() ; 

        if(!enteredNameIsValid) {
            return ;
        }

        resetNameInput() ;
        resetMessageInput() ;
        resetDateInput() ; 
        resetPhoneInput() ;
        resetDepartementInput() ;
        resetDoctorInput() ;
        resetDepartementInput() ;
        resetDoctorInput() ;
        resetTimeInput() ;
    } ;


    const nameInputClasses =  nameInputHasError 
    ? 'alert alert-danger form-control'
    : 'form-control'  ;

    const messageInputClasses =  messageInputHasError
    ? 'alert alert-danger form-control'
    : 'form-control'  ;

    const dateInputClasses =  dateInputHasError
    ? 'alert alert-danger form-control'
    : 'form-control'  ;

    const phoneInputClasses =  phoneInputHasError
    ? 'alert alert-danger form-control'
    : 'form-control'  ;

    const timeInputClasses =  timeInputHasError
    ? 'alert alert-danger form-control'
    : 'form-control'  ;

    const departementInputClasses =  departementInputHasError
    ? 'alert alert-danger form-control'
    : 'form-control'  ;

    const doctorInputClasses =  doctorInputHasError
    ? 'alert alert-danger form-control'
    : 'form-control'  ;

    return (
        <form onSubmit={formSubmissionHandler} className="appointment-form">
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        { departementInputHasError && <p className="alert alert-danger">Please select a department</p>}
                        <select 
                        className={departementInputClasses} 
                        id="exampleFormControlSelect1"
                        value={enteredDepartement}
                        onChange={departementChangeHandler}
                        onBlur={departementBlurHandler}>
                            <option value={donnesSelectInput[0].value[0]}>{donnesSelectInput[0].value[0]}</option>
                            {donnesSelectInput.slice(1).map((value, index) => (
                                <option key={index} value={value.value}>{value.value}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        { doctorInputHasError && <p className="alert alert-danger">Please select a doctor</p>}
                        <select 
                        className={doctorInputClasses} 
                        id="exampleFormControlSelect2"
                        value={enteredDoctor}
                        onChange={doctorChangeHandler}
                        onBlur={doctorBlurHandler}>
                            <option value={donnesSelectInput[0].value[1]}>{donnesSelectInput[0].value[1]}</option>
                            {donnesSelectInput.slice(1).map((value, index) => (
                                <option key={index} value={value.value}>{value.value}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        {(dateInputHasError || isDateBeforeToday(enteredDate)) && <p className="alert alert-danger">Date must not be empty and be before today</p>}
                        <input 
                        name="date" 
                        id="date" 
                        type="date"
                        min={currentDate.toISOString().split('T')[0]}
                        value={enteredDate} 
                        onChange={dateChangeHandler} 
                        onBlur={dateBlurHandler}
                        className={dateInputClasses}
                        placeholder="YYYY-MM-DD"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        {timeInputHasError && (
                            <p className="alert alert-danger">Please select a time in 30-minute intervals</p>
                        )}
                            
                        <input
                        name="time" 
                        id="time" 
                        type="time" 
                        min="09:00" 
                        max="17:00"
                        className={timeInputClasses} 
                        value={enteredTime}
                        onChange={timeChangeHandler}
                        onBlur={timeBlurHandler}
                        placeholder="Time" />
                        <label htmlfor="time" className="form-control alert-info">Open from 9:00 to 17:00</label>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        
                        {phoneInputHasError && <p className="alert alert-danger">Phone number must not be empty and have 10 digits</p>}
                        <input 
                        name="phone" 
                        id="phone" 
                        type="tel" 
                        maxLength="10" 
                        value={enteredPhone}
                        onChange={phoneChangeHandler} 
                        onBlur={phoneBlurHandler}
                        pattern="/^(\(\d{3}\)\s*\d{3}-\d{4}|\d{2}\s*\d{2}\s*\d{2}\s*\d{2}\s*\d{2})$/" 
                        className={phoneInputClasses} 
                        placeholder="Phone Number"/>
                        
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