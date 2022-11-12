import './brand.list.styles.scss';
import { Link } from 'react-router-dom';


const brandList = [
    "Samsung", "Apple", "Xiaomi", "Lumin", "Nestle", "Adidas",
    "Samsung", "Apple", "Xiaomi", "Lumin", "Nestle", "Adidas"
]

 const BrandList = () => {
    
    
    return(
        <div className='brand-list'>
        <div className='sidebar-search-bar search-bar'>
        <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span>Search brand </span>
        </div>
        <div className='brand-list-container'>
        {
            brandList.map((brand) => {
                return <div className='checkbox-item' id={brand}>
                <input type="checkbox" className="checkbox-input"/>
                <label className='checkbox-label' for={brand}>
                <Link to="/">{brand}</Link></label>
                </div>
            })
        }
        </div>
        </div>
    )

}


export default BrandList;