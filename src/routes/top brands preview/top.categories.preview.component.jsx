import './top.categories.preview.styles.css';
import { useSelector } from 'react-redux';
import { selectTopCategories } from '../../store/products reducer/products.selector';
import TopCategoryPreview from '../../components/top category preview/top.category.preview.component';
import ProductsHeader from '../../components/products-header/products.header.component';


const TopCategoriesPreview = () => {
  const topCategories = useSelector(selectTopCategories);
  return(
    <div>
    { 
        topCategories.map((topCategory) => {
            return   <div className='category-preview-section'>
            <ProductsHeader children={topCategory} headerType="previewHeader"  previewRoute={topCategory}/>
            <div >
            <TopCategoryPreview topCategory={topCategory}/>

           </div>
           
           </div>
        })
    }       
    </div>
  )
}

export default TopCategoriesPreview;

// <div className='top-brands-container'>
// <p>Top categories preview</p>
    // { 
      //     topCategoriesProducts.map((topCategoryProduct) => {
    //         return   <div className='brand-container'>
    //         <Link to={(topCategoryProduct.name).replace(" ", "-")}><h2> {topCategoryProduct.name}</h2></Link>
    //         <div  className='brand-items-container'>
    //         {topCategoryProduct.items.map((item) => {
    //         return <ProductCard key={item.id} product={item}  /> 
    //        })}
    //        </div>
           
    //        </div>
    //     })
    // }       
    // </div>
      // return (
      //   <div>
      //   <TopReusableComponent data={data}/>
      //   </div>
      //   )