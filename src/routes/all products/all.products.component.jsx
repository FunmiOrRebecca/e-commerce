import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProducts, selectSearchString } from '../../store/products reducer/products.selector';
import ProductsPage from '../products page/products.page.component';
import './all.products.styles.css';




const AllProducts = () => {
    console.log("rendering")
    const products = useSelector(selectProducts);
    const searchString = useSelector(selectSearchString);
    const searchResultProducts = products.filter((product) => {
            return (product.name.toLowerCase().includes(searchString)||
                   product.categoryDetails.MainCategory.toLowerCase().includes(searchString) || 
                   product.categoryDetails.subCategory.toLowerCase().includes(searchString) || 
                   product.categoryDetails.category.toLowerCase().includes(searchString) || 
                   product.brandDetails.brandName.toLowerCase().includes(searchString))
        })
        console.log(searchResultProducts.length)
    return(
        <div>
        <ProductsPage productsDetails={{
            children: "All Products",
            headerType: "noLinkHeader",
            route: "products-found", 
            products:searchResultProducts
        }}/>
        </div>
    )
}


export default AllProducts;