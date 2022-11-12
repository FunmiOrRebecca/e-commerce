import './top.brands.styles.css';
import { selectTopBrands } from '../../store/products reducer/products.selector';
import { useSelector } from 'react-redux';
import ProductsHeader from '../../components/products-header/products.header.component';
import TopBrandPreview from '../../components/top brand preview/top.brand.preview.component';

const TopBrandsPreview = () => {
    const topBrands = useSelector(selectTopBrands);
   
    return(
      <div>
      { 
          topBrands.map((topBrand) => {
            console.log("top brands = ", topBrand);
              return   <div className='category-preview-section'>
              <ProductsHeader children={topBrand} headerType="previewHeader"  previewRoute={topBrand}/>
              <div >
              <TopBrandPreview topBrand={topBrand}/>
  
             </div>
             
             </div>
          })
      }       
      </div>
    )
}


export default TopBrandsPreview;