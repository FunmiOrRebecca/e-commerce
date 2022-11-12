import './sign-in-form.styles.css';
import { useState } from 'react';
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase';
import { Link } from 'react-router-dom';


const defaultFormFields = {
    email: "",
    password: "",
    type: "password"
};


const SignInForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [toggleIcon, setToggleIcon] = useState(true);
    const [hideOrShow, setHideOrShow] = useState("hide");
   
    const {email, password, type} = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const signInWithGoogle = async (event) => {
        event.preventDefault();
        try {
            const {user} = await signInWithGooglePopup();
            await createUserDocumentFromAuth(user);
            // resetFormFields();
        } catch (error) {
            
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
           const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                  alert('Incorrect password for email');
                  break;
                case 'auth/user-not-found':
                  alert('No user associated with this email');
                  break;
                default:

                  
              }
            
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };
    const onEyeIconClick = () => {
        setToggleIcon(!toggleIcon);
        if (toggleIcon) {
            setHideOrShow("show")
            setFormFields({...formFields, type: "text"});
        }else{
            setHideOrShow("hide")
            setFormFields({...formFields, type: "password"});
        }
        
    }
    return(
        <div className='sign-in-container'>
        <header className='sign-in-title'>Login</header>
            <form onSubmit={handleSubmit}>
            <div className='label-input'>
            <input className='form-input' type="text" name="email" value={email}  placeholder='Email' onChange={handleChange} required/>
            </div>
            <div className='label-input'>
             <input className='form-input' type={type} name="password" value={password} placeholder='Password' onChange={handleChange} required/>
             <i className={`bx bx-${hideOrShow} eye-icon`} onClick={onEyeIconClick}></i>
             </div>
            <div className='forgot-pass-con' >
            <Link className='forgot-password' to='/'>Forgot Password?</Link>
            </div>
            <div className='btn-group'>
            <button className='btn log-in'>Log in</button>
            <div className='line'></div>
            <button className='btn log-in-facebook'>
            <i className='bx bxl-facebook facebook-icon'></i>
            Login with Facebook</button>
            <button className='btn log-in-google' onClick={signInWithGoogle}>
            <i className='bx bxl-google google-icon'></i>
            <span className='login-text'>Login with Google</span>
            </button>
            </div>
            </form> 
        </div>
    )
}


export default SignInForm;