import './form.styles.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({ header, handleSubmit, formDetails, buttonDetails}
) => {
    const {email, handleChange, password, confirmPassword} = formDetails;
    const {text, facebookText, googleText} = buttonDetails;

    const [toggleIcon, setToggleIcon] = useState(true);
    const [hideOrShow, setHideOrShow] = useState("hide");

    const[type, setType] = useState("password")
    const onEyeIconClick = () => {
        setToggleIcon(!toggleIcon);
        if (toggleIcon) {
            setHideOrShow("show")
           setType("text");
        }else{
            setHideOrShow("hide")
            setType("password");
        }
        

    }
    return(
        <div>
        <header className='sign-in-title'>{header}</header>
        <form onSubmit={handleSubmit}>
        <div className='label-input'>
        <input className='form-input' type="text" name="email" value={email}  placeholder='Email' onChange={handleChange} required/>
        </div>
        <div className='label-input'>
         <input className='form-input' type={type} name="password" value={password} placeholder='Password' onChange={handleChange} required/>
        {/*<i className={`bx bx-${hideOrShow} eye-icon`} onClick={onEyeIconClick}></i>
    */} 
        </div>
         <div className='label-input'>
         <input className='form-input' type={type} name="confirmPassword" value={confirmPassword} placeholder=' Confirm Password' onChange={handleChange} required/>
         <i className={`bx bx-${hideOrShow} eye-icon`} onClick={onEyeIconClick}></i>
         </div>
        
         <div className='forgot-pass-con' >
        <Link className='forgot-password' to='/'>Forgot Password?</Link>
        </div>
        <div className='btn-group'>
        <button className='btn log-in'>{text}</button>
        <div className='line'></div>
        <div className='btn-container'>
        <button className='btn log-in-facebook'>
        <i className='bx bxl-facebook facebook-icon'></i>
        {facebookText}
        </button>
        <button className='btn log-in-google'>
        <i className='bx bxl-google google-icon'></i>
        <span className='login-text'>{googleText}</span>
        </button>
        </div>
        
        </div>
        </form> 
        </div>
    )

}


export default Form;