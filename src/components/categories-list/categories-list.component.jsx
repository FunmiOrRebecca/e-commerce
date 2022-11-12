import { useDispatch, useSelector } from 'react-redux';
import { selectMainCategories } from '../../store/categoriesReducer/categories.selector';
import { setCurrentCategory } from '../../store/products reducer/products.action';
import './categories.list.styles.css';

const CategoriesList = () => {
    const mainCategories = useSelector(selectMainCategories);
    const dispatch = useDispatch();
    
 

const onMouseEnterHandler = (event) => {
    dispatch(setCurrentCategory(event.target.innerText));
  
};

const onMouseLeaveHandler = () => {return};
    return(
            <div className="categories-container">
                <ul className="categories-list">
                {mainCategories.map((category) => {
                    return <li className="category" key={category} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>{category}</li>
                })}
                </ul>
            </div>
            
    )
}

export default CategoriesList;


