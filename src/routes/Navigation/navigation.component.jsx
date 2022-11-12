import './navigation.styles.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase';
import CartDropdown from '../../components/cart dropdown/cart.dropdown.component';
import { selectCartCount, selectIsCartOpen } from '../../store/cart reducer/cart.selector';
import { useSelector, useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../store/cart reducer/cart.action';
import { selectSearchString } from '../../store/products reducer/products.selector';
import { setSearchString } from '../../store/products reducer/products.action';
import useMountAndUnmountTransition from '../../components/transition hook/use.transition.component';
import Button from '../../components/button/button.component';

const Navigation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {currentUser} = useContext(UserContext);
   const cartCount = useSelector(selectCartCount);
   const isCartOpen = useSelector(selectIsCartOpen);
   const searchString = useSelector(selectSearchString);
   const hasTransitionedIn = useMountAndUnmountTransition(isCartOpen, 1000);

   const onSearchChangeHandler = (event) => {
    const searchStringValue = event.target.value.toLocaleLowerCase();
    dispatch(setSearchString(searchStringValue));
   }
   const onSearchClickHandler = () => {
        navigate("/all-products");
   }
 
   const toggleIsCartOpen = () => {
       dispatch(setIsCartOpen(!isCartOpen));
   }
   useEffect(()=> {
    if(isCartOpen){
        document.body.style.overflowY = 'hidden'
    }else{
        document.body.style.overflowY = 'scroll'
    }
   }, [isCartOpen])
    return(
        <Fragment>
        <div className="navigation">
        <div className="nav-container container">
            <Link className='logo' to="/">Logo</Link>
            <div className='search-container'>
               

            <input className='input-search' type="text" placeholder='Search products, categories and brands' value={searchString} onChange={onSearchChangeHandler}/>
            <svg xmlns="http://www.w3.org/2000/svg" className="search-icon nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
                <div className='search-text'>
                <Button buttonType="filled" children="search" onClickHandler={onSearchClickHandler} />
                    
                </div>
            </div>
            <div className='nav-links'>
            
            <Link className='nav-link' to="/">
                <div className='nav-link-details'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Wishlist</span>
            </div>
            </Link> 
            <span className='nav-link cart' onClick={toggleIsCartOpen}>
                <div className='nav-link-details'>
                <div className="cart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className='item-count'>{cartCount}</span>
                </div>
                <span>C  art</span>
               
                </div>
            </span> 
            <Link className='nav-link' to="/">
                <div className='nav-link-details'>
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Help</span>
                </div>
            </Link>
            {
                currentUser ?
                <Link className='nav-link' to="/">
                 <div onClick={signOutUser} className='nav-link-details'>
                       <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                             <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                             </svg>
                             <span>Logout</span>
                          </div>
                     </Link> 
                : 
                <Link className='nav-link' to="/auth">
                <div className='nav-link-details'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span>Login</span>
                </div>
            </Link> 
            }
             
            </div>
        </div>
        {(hasTransitionedIn || isCartOpen) && <CartDropdown /> }
        </div>
        <div className="container">
        <Outlet />
        </div>
        </Fragment>
        
    )
}


export default Navigation;
           
// <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//            </svg>
// 

