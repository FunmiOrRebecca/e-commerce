import { useParams } from 'react-router-dom';
import './product.page.styles.scss';
import Button from '../../components/button/button.component';
import { selectCartItems } from '../../store/cart reducer/cart.selector';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart} from '../../store/cart reducer/cart.action';
import { useRef } from 'react';

const ProductPage = ({product}) => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const accordionRefs = useRef([]);

    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product)); 
    }    
    const removeProductFromCart = () => {
        dispatch(removeItemFromCart(cartItems, product)); 
    }    
    if (product === null) return;

    const {imgUrl , name, price, percentageDecrease, brandDetails: {brandName}} = product;
    const {productDetails: {stars, rating, colors, description : {description, features},specifications, delivery}} = product;
    const details = [
        {"product features": features},
        {"product specifications" : specifications},
        {"delivery & returns" : delivery}
    ]

    const onIconClick = (index) => {
        console.log( "before",accordionRefs.current[index].classList) 
        accordionRefs.current[index].classList.toggle('active-bar')
        console.log("after", accordionRefs.current[index].classList) 
               console.log(index)
    }

    return(
       <div className='product-page'>
       <div className="product-page-container">
           <div className=''>
           <img className="product-img" src={imgUrl} alt={name} /> 
                
           </div>
           <div className='product-info'>
               <h2 className='product-info-name'>{name}</h2>
               <p className='brand-name'>Brand: {brandName}</p>
               <p className='sku'>SKU: SKKER-345-TRE</p>
               <div className='ratings'>
               <div >
               {               
                   Array.from({length: stars}).map((index) =>{
                       return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" star w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                       </svg>       
                    })
                }               
                </div>
                <span>{rating} Ratings</span>
                </div>


               <p className="product-info-price">$ {price}</p>
               <div className='colors'>
               {colors.map((color) => <div className='color' style={{backgroundColor: `${color}`}}></div>)}
               </div>
                <p className='description'>{description}</p>
{/*
               <div className='qnty-selector'>
               <span className='qnty-selector-btn'>-</span>
               <span className='qnty-selector-btn'>1</span>
               <span className='qnty-selector-btn'>+</span>
               </div>
               
               <Button buttonType="filled" children="-" onClickHandler={removeProductFromCart}/> 
               <Button buttonType="filled" children="+" onClickHandler={addProductToCart}/> */}
               <div className='add'>
               <Button buttonType="filled" children="Add to cart" onClickHandler={addProductToCart}/>
               </div>
           </div>
       </div>
       <div className='product-details-bar'>
       {
          details.map((detail, index) => {
               return <div ref = {(element) => {return accordionRefs.current[index] = element;}} className='bar-itm'>
                           <p className='number'>0{index + 1}</p>
                           <p className='text'>{Object.keys(detail)}</p>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="bar-icon w-6 h-6" onClick={() => onIconClick(index)}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                       </svg>
                       <div className='hidden-box'>
                       <ul>
                       {detail[(Object.keys(detail))].map((feature) => <li>{feature}</li>)}
                       </ul>
                       </div>
       </div>
           })
       }
      </div>

    
       </div>

        )
    }
    
    export default ProductPage;
