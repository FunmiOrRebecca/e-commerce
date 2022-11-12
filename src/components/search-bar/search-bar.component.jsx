import './search-bar.styles.css';

const SEARCH_BAR_TYPE = {
    home: "home-sear"
}

const Searchbar = () => {
    return(
        <div className='search-container'>
                <div className='search-bar'>
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search products, categories and brands</span>
                </div>
                <div className='search-text'>
                    <button className='btn-search'>search</button>
                </div>
            </div>
   
    )
}


export default Searchbar