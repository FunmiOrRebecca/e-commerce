import './cart.dropdown.styles.scss';
import Button from '../button/button.component';
import { Link, useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart reducer/cart.selector';
import { useSelector } from 'react-redux';
import CartItem from '../cart-item/cart.item.component';
import { selectIsCartOpen } from '../../store/cart reducer/cart.selector';
import useMountAndUnmountTransition from '../transition hook/use.transition.component';




const CartDropdown = () => {
   const navigate = useNavigate();
   const cartItems = useSelector(selectCartItems);
   const checkoutHandler = () => navigate("/checkout");
   const isCartOpen =  useSelector(selectIsCartOpen);
   const hasTransitionedIn = useMountAndUnmountTransition(isCartOpen, 1000);   
    return(
        <div className={`cart-dropdown ${hasTransitionedIn && 'cart-in'} ${isCartOpen && 'cart-visible'}`}>
        {
            cartItems.map((item) => <CartItem cartItem={item}/>)
        }
        {!cartItems ? <Button  children="GO TO CHECKOUT" onClickHandler={checkoutHandler}/> : <p className='cart-empty'>Cart is Empty</p>}
        </div>

        )

}


export default CartDropdown;