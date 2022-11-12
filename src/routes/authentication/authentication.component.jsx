import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import './styles.css';
import {motion} from "framer-motion";
const Authentication = () => {
    return(
        <motion.div className="authentication-container" initial={{width: 0}} animate={{width: "100%"}} transition={{duration: 0.9}} exit={{width: window.innerWidth}}>    
        <SignUpForm />
        <SignInForm />
        {/*<button className="button">search</button>*/}
        </motion.div>
    )
}


export default Authentication;