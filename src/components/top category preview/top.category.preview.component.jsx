import './top.category.preview.styles.scss';
import { selectTopCategoriesProducts } from "../../store/products reducer/products.selector";
import { useSelector } from "react-redux";
import ProductCard from "../productCard/card.component";
import ProductsHeader from '../products-header/products.header.component';

const TopCategoryPreview = ({topCategory}) => {
    
    const topCategoriesProducts = useSelector(selectTopCategoriesProducts);
    return(
        <div  className='deals-section'>
       
        <div  className='category-preview'>
        {topCategoriesProducts.filter((product)=> product.categoryDetails.MainCategory === topCategory).filter((_, index) => index < 6)
            .map((item) => {
            return <ProductCard key={item.id} product={item}  /> 
        })}
        </div>
        </div>
    )
}

export default TopCategoryPreview;