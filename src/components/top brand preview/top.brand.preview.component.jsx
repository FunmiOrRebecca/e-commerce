import './top.brand.preview.styles.scss';
import { selectTopBrandsProducts} from "../../store/products reducer/products.selector";
import { useSelector } from "react-redux";
import ProductCard from "../productCard/card.component";

const TopBrandPreview = ({topBrand}) => {
    const topBrandProducts = useSelector(selectTopBrandsProducts);
   
    return(
        <div  className='deals-section'>
       
        <div  className='category-preview'>
        {topBrandProducts.filter((product)=> product.brandDetails.brandName === topBrand).filter((_, index) => index < 6)
            .map((item) => {
            return <ProductCard key={item.id} product={item}  /> 
        })}
        </div>
        </div>
    )
}

export default TopBrandPreview;