import './card.styles.css';
import { useContext } from 'react';
import { DisplayDetails } from '../../contexts/display.details.context';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '../button/button.component';
import { addItemToCart } from '../../store/cart reducer/cart.action';
import { selectCartItems } from '../../store/cart reducer/cart.selector';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({product}) => {
    const {imgUrl , name, price} = product;
    const {flashSales} = product.additionalDetails;
    const {percentageDecrease} = product.additionalDetails;
    const dispatch = useDispatch();  
    const cartItems = useSelector(selectCartItems);          
    const {setCurrentProduct} = useContext(DisplayDetails);
    

   const onProductClickHandler = () => {
    setCurrentProduct(product);
   }
   const addItemHandler = () => dispatch(addItemToCart(cartItems, product));
  
    return(
        <Link to="/product">
        { <div className="product-card-container" onMouseEnter={onProductClickHandler}>
        {flashSales && <div className='percent-decrease'>
             <span className='percentage'>-{percentageDecrease}%</span>
         </div>}
             <div className='img-container'>
             <img className="product-image" src={imgUrl} alt={name} />      
             </div>
             <div className='product-details'>
                 <p className='product-name'>{name}</p>
                 <p className="product-price">$ {price}</p>
             </div>
             <div className='card-add-to-cart' >
             <Button buttonType="filledCard" children="Add to Cart" onClickHandler={addItemHandler} />
             </div>
         </div>}
        </Link>
    )
}

export default ProductCard;