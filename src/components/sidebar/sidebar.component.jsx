import './sidebar.styles.css';
import CategoriesList from '../categories-list/categories-list.component';
import BrandList from '../brand-list/brand-list.component';
import PriceSlider from '../price slider/price.slider.component';

const Sidebar = () => {
    return(
        <div className='sidebar-container'>
            <div className='sidebar-section'>
            <h2 className='sidebar-header' >Category</h2>
            <CategoriesList />
            </div>
            <div className='sidebar-section'>
            <h2 className='sidebar-header' >Brand</h2>
            <BrandList />
            </div>
            <div className='sidebar-section'>
            <h2 className='sidebar-header' >Price</h2>
            <PriceSlider />
            </div>
            {/*
            <div className='sidebar-section'>
            <h2 className='sidebar-header' >Discount Percentage</h2>
            <div>percentages</div>
            </div>
            <div className='sidebar-section'>
            <h2 className='sidebar-header' >Product Rating</h2>
            <div>5 stars above</div>
            </div>
            <div className='sidebar-section'>
            <h2 className='sidebar-header' >Gender</h2>
            <div>female</div>
            </div>
            <div className='sidebar-section'>
            <h2 className='sidebar-header'>Size</h2>
            <div>Large</div>
            </div>
            <div className='sidebar-section'>
            <h2 className='sidebar-header'>Shipped From</h2>
            <div>Nigeria</div>
            </div>
            <div className='sidebar-section'>
            <h2 className='sidebar-header'>Free Shipping</h2>
            <div>free</div>
    </div>*/}
        </div>
    )
}


export default Sidebar;