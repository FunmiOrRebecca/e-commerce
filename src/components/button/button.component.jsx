import './button.styles.css';

const BUTTON_TYPES = {
    filled: "fill",
    inverted: "nofill",
    filledCard: "fillCard"
}

const Button = ({buttonType, children, onClickHandler}) => {
    // <button className='butt btn2'>Hover me</button>
    return(
        <button className={` Button button ${BUTTON_TYPES[buttonType]}`} onClick={onClickHandler}>{children}</button>
    )
}

export default Button;