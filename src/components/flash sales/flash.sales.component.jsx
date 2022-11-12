import './flash.sales.styles.css';
import ShortDeals from '../short time deals/deals.component';
import { useSelector } from 'react-redux';
import { selectFlashSalesProducts} from '../../store/products reducer/products.selector';

// const flashSales = [
//     {
//         id: 1,
//         name: "Leather watch",
//         price: "350",
//         imgUrl: "images/gallery-6.jpg",
//         percentageDecrease: "21"
//     },
//     {
//         id: 2,
//         name: "Leather watch",
//         price: "350",
//         imgUrl: "images/gallery-6.jpg",
//         percentageDecrease: "78"

    
//     },
//     {
//         id: 3,
//         name: "Leather watch",
//         price: "350",
//         imgUrl: "images/gallery-6.jpg",
//         percentageDecrease: "44"
//     },
//     {
//         id: 4,
//         name: "Leather watch",
//         price: "350",
//         imgUrl: "images/gallery-6.jpg",
//         percentageDecrease: "65"
//     },
//     {
//         id: 5,
//         name: "Leather watch",
//         price: "350",
//         imgUrl: "images/gallery-6.jpg",
//         percentageDecrease: "10"
//     },
//     {   
//         id: 6,
//         name: "Leather watch",
//         price: "350",
//         imgUrl: "images/gallery-6.jpg",
//         percentageDecrease: "4"
//     },
//     {   
//         id: 7,
//         name: "Leather watch",
//         price: "350",
//         imgUrl: "images/gallery-6.jpg",
//         percentageDecrease: "4"
//     },
//     {   
//         id: 8,
//         name: "Leather watch",
//         price: "350",
//         imgUrl: "images/gallery-6.jpg",
//         percentageDecrease: "4"
//     },
//     {   
//         id: 9,
//         name: "Leather watch",
//         price: "350",
//         imgUrl: "images/gallery-6.jpg",
//         percentageDecrease: "4"
//     },
//     {   
//         id: 10,
//         name: "Leather watch",
//         price: "350",
//         imgUrl: "images/gallery-6.jpg",
//         percentageDecrease: "4"
//     },
//     {   
//         id: 11,
//         name: "Leather watch",
//         price: "350",
//         imgUrl: "images/gallery-6.jpg",
//         percentageDecrease: "4"
//     },
//     {   
//         id: 12,
//         name: "Leather watch",
//         price: "350",
//         imgUrl: "images/gallery-6.jpg",
//         percentageDecrease: "4"
//     }

// ]
const FlashSales = () => {
    const flashSalesProducts = useSelector(selectFlashSalesProducts);
  
    return(
    <ShortDeals children="Flash Sales" headerType="flashSales" route="flash" products={flashSalesProducts} />

)
}

export default FlashSales;


//before bringing in short deals
// const FlashSales = () => {
//     return(
//         <div className='flash-sales-section'>
//         <ProductsHeader children="Flash Sales" headerType="flashSales" route="flash"/>
//         <div className='flash-sales-products'>
//         {
//             flashSales.filter((_, index) => {
//                 return index < 6
//             }).map((flashSaleProduct) => {
//                 return <ProductCard key={flashSaleProduct.id} product={flashSaleProduct}/>
//              })
//         }
//         </div>
       
//         </div>
//     )
// }