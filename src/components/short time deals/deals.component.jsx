import './deals.styles.css';
import ProductsHeader from '../products-header/products.header.component';
import ProductCard from '../productCard/card.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const ShortDeals = ({children, headerType, route, products}) => {
    const productContainerRef = useRef();
    const onScrollLeft = () => {
        const containerWidth = productContainerRef.current.getBoundingClientRect().width;
        console.log(containerWidth);
        productContainerRef.current.scrollLeft -= containerWidth;
    }
    const onScrollRight = () => {
        const containerWidth = productContainerRef.current.getBoundingClientRect().width;
        console.log(containerWidth);
        productContainerRef.current.scrollLeft += containerWidth;
    }
    return(
        <div className='deals-section'>
        <ProductsHeader children={children} headerType={headerType} route={route}/>
        <div  ref={productContainerRef} className='deals-products'>
        {
            products.filter((_, index) => {
                return index < 15
            }).map((product) => {
                return <ProductCard key={product.id} product={product}/>
             })
        }
        
        <FontAwesomeIcon icon={faAngleLeft} className="btn-slie left" onClick={onScrollLeft} />
        <FontAwesomeIcon icon={faAngleRight} className="btn-slie right" onClick={onScrollRight}/>
        </div>
       
        </div>
    )
}

export default ShortDeals;