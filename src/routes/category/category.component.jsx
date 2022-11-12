import './category.styles.css';
import ProductCard from '../../components/productCard/card.component';
import { useParams } from 'react-router-dom';
import ProductsCard from '../../components/products card/products.card.component';




const Category = ({data}) => {
    const {category} =  useParams();
    const products = data.find((topProduct)=>  {
        
         return topProduct["name"] === category
        })
        
    return(
     <div>
        <h2>{products.name}</h2>
        {
            products.items.map((item) => {
                return <ProductCard  key={item.id} product={item}/>
            })
        }
           
     </div>
    )
}


export default Category;

// const topCategoriesProducts = [
//     {   
//         name: "Computer",
//         items: [
//             {   
//                 id: 1,
//                 name: "Samsung A1",
//                 price: "450",
//                 imgUrl: "images/New folder/001_gallery_LC34J791WTNXZA.webp",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 2,
//                 name: "Samsung A1",
//                 price: "450",
//                 imgUrl: "images/New folder/001_gallery_LC34J791WTNXZA.webp",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 3,
//                 name: "Samsung A1",
//                 price: "450",
//                 imgUrl: "images/New folder/001_gallery_LC34J791WTNXZA.webp",
//                 additionalDetails:"1000maH red, black"
//             }

//         ]
//     },
//     {   
//         name: "Electronics",
//         items: [
//             {
//                 id: 1,
//                 name: "Drum",
//                 price: "450",
//                 imgUrl: "images/New folder/drums.jpg",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 2,
//                 name: "Drum",
//                 price: "450",
//                 imgUrl: "images/New folder/download",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 3,
//                 name: "Drum",
//                 price: "450",
//                 imgUrl: "images/New folder/trumpet.jpg",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 4,
//                 name: "Drum",
//                 price: "450",
//                 imgUrl: "images/New folder/wooden-drum.jpg",
//                 additionalDetails:"1000maH red, black"
//             },
//         ]
//     },
//     {     
//         name: "Kitchen", 
//         items: [
//             {
//                 id: 1,
//                 name: "Xiaomi smart band",
//                 price: "450",
//                 imgUrl: "images/New folder/smart-band-7.png",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 2,
//                 name: "Drum",
//                 price: "450",
//                 imgUrl: "images/New folder/smart-band-7.png",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 3,
//                 name: "Drum",
//                 price: "450",
//                 imgUrl: "images/New folder/smart-band-7.png",
//                 additionalDetails:"1000maH red, black"
//             },
//             {
//                 id: 4,
//                 name: "Drum",
//                 price: "450",
//                 imgUrl: "images/New folder/wsmart-band-7.png",
//                 additionalDetails:"1000maH red, black"
//             },
//         ]
//     },
//     {     
//         name: "Phones", 
//     items: [
//         {
//             id: 1,
//             name: "Xiaomi smart band",
//             price: "450",
//             imgUrl: "images/New folder/smart-band-7.png",
//             additionalDetails:"1000maH red, black"
//         },
//         {
//             id: 2,
//             name: "Drum",
//             price: "450",
//             imgUrl: "images/New folder/smart-band-7.png",
//             additionalDetails:"1000maH red, black"
//         },
//         {
//             id: 3,
//             name: "Drum",
//             price: "450",
//             imgUrl: "images/New folder/smart-band-7.png",
//             additionalDetails:"1000maH red, black"
//         },
//         {
//             id: 4,
//             name: "Drum",
//             price: "450",
//             imgUrl: "images/New folder/wsmart-band-7.png",
//             additionalDetails:"1000maH red, black"
//         },
//     ]
//      },
//     {     
//     name: "Kids", 
//     items: [
//     {
//         id: 1,
//         name: "Xiaomi smart band",
//         price: "450",
//         imgUrl: "images/New folder/smart-band-7.png",
//         additionalDetails:"1000maH red, black"
//     },
//     {
//         id: 2,
//         name: "Drum",
//         price: "450",
//         imgUrl: "images/New folder/smart-band-7.png",
//         additionalDetails:"1000maH red, black"
//     },
//     {
//         id: 3,
//         name: "Drum",
//         price: "450",
//         imgUrl: "images/New folder/smart-band-7.png",
//         additionalDetails:"1000maH red, black"
//     },
//     {
//         id: 4,
//         name: "Drum",
//         price: "450",
//         imgUrl: "images/New folder/wsmart-band-7.png",
//         additionalDetails:"1000maH red, black"
//     },
// ]
//     }
    
// ]


// const Category = ({data}) => {
//     const {category} =  useParams();
//     console.log("category", category);
//     const products = topCategoriesProducts.find((topCategoriesProduct)=>  {
        
//          return topCategoriesProduct["name"] === category
//         })
//         console.log("product", products);
    
   
//     return(
//      <div>
//         <h2>{products.name}</h2>
//         {
//             products.items.map((item) => {
//                 return <ProductCard  key={item.id} product={item}/>
//             })
//         }
           
//      </div>
//     )
// }


// export default Category;



