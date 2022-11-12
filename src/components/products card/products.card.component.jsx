import './products.card.styles.css';
import ProductsHeader from '../products-header/products.header.component';
import ProductCard from '../productCard/card.component';

const ProductsCard = ({children,
    headerType,
    route,
    products}) => {
    return(
        <div className='sales-section'>
        <ProductsHeader children={children} headerType={headerType} route={route}/>
        <div className='sales-products'>
        {
                products.map((product) => {
                   return <ProductCard key={product.id} product={product}/>
                })
            }
            </div>
            
            </div>

    )
}


export default ProductsCard;






