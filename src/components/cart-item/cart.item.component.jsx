import './cart.item.styles.scss'


const CartItem = ({cartItem}) => {
    const {imgUrl, price, name, quantity} = cartItem;
    return(
        <div>
            <img src={imgUrl} />
            <span>{name}</span>
            <span>{price}</span>
            <span>{quantity}</span>
            </div>
    
    )
}

export default CartItem;