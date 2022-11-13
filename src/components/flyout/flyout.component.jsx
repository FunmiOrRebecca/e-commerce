import './flyout.component.styles.scss';
import {Link} from 'react-router-dom';
import { useEffect, useState, Fragment, useContext } from 'react';
import { DisplayDetails } from '../../contexts/display.details.context';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectCategories } from '../../store/categoriesReducer/categories.selector';
import { selectCurrentCategory } from '../../store/products reducer/products.selector';
import { setCurrentCategory } from '../../store/products reducer/products.action';
import {ReactComponent as AutomobileIcon} from '../../assets/categories/car.svg';
import {ReactComponent as BabyProducts} from '../../assets/categories/baby.svg';
import {ReactComponent as BeautyHealth} from '../../assets/categories/bandaids.svg';
import {ReactComponent as Computers} from '../../assets/categories/desktop.svg';
import {ReactComponent as Electronics} from '../../assets/categories/lightning.svg';
import {ReactComponent as Fashion} from '../../assets/categories/t-shirt.svg';
import {ReactComponent as Gaming} from '../../assets/categories/game-controller.svg';
import {ReactComponent as Home} from '../../assets/categories/lamp.svg';
import {ReactComponent as Phones} from '../../assets/categories/device-mobile.svg';
import {ReactComponent as Sport} from '../../assets/categories/soccer-ball.svg';
import {ReactComponent as Supermarket} from '../../assets/categories/storefront.svg';


const Flyout = () => {
    const[isHover, setIsHover] = useState(false);
    const[categoryIsHover] = useState(false);
    const[style, setStyle] = useState({});
    const {setFlyout} = useContext(DisplayDetails);
    const currentCategory = useSelector(selectCurrentCategory);
   const categories = useSelector(selectCategories)
    const dispatch = useDispatch();
    const icons = [
        <AutomobileIcon className="icon main-icon"/>,
        <BabyProducts className="icon main-icon"/>,
        <BeautyHealth className="icon main-icon"/>,
        <Computers className="icon main-icon"/>,
        <Electronics className="icon main-icon"/>,
        <Fashion className="icon main-icon"/>,
        <Gaming className="icon main-icon"/>,
        <Home className="icon main-icon"/>,
        <Phones className="icon main-icon"/>,
        <Sport className="icon main-icon"/>,
        <Supermarket className="icon main-icon"/>,

]    
   useEffect(() => {
         setStyle(isHover ? {visibility: "visible"} : {});
         
    }, [isHover])
    

    const mouseEnterHandler = (event) => {
        dispatch(setCurrentCategory(event.target.innerText));
        setIsHover(true);
        setFlyout(true);
    }
    const categoryHoverMouseEnterHandler = () => {
        setIsHover(true);
        setFlyout(true);
        
    }
    const categoryHoverMouseLeaveHandler = () => {
        setIsHover(false);
        setFlyout(false);
    }
    
    const mouseLeaveHandler = () => {
        if(!categoryIsHover){
            setIsHover(false); 
            setFlyout(false);
        }
        
       
    } 

    const onCategoryHandler = (event) => {
        dispatch(setCurrentCategory(event.target.innerText));
    }
    
    let sub  = [];
               let arr = [];
               let categoriesDivision = (item) => {
               
                arr.push(item)
               
                return <div className='collections'>{item}</div>
            }
            
            {  categories.filter((category) => category.MainCategory === currentCategory).map((category) => {
                category.subCategoriesList.map((item) => {
                    sub.push(item);
                               if (sub.length === 3){
                                   categoriesDivision(sub);
                                   sub = [];
                               }
                               
                             });
                            })
                            
                        }
                        if (sub) {
                            categoriesDivision(sub);
                        }
                    

    return(
             <div className='categories--flyout'>
                  <Fragment>
                  {
                    categories.map((categoryObject, index) => {
                     return <Fragment>
                     <div className="main">
                     {icons[index]}
                     <Link  to='/' className='main-cat' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>{categoryObject.MainCategory}</Link>
                     </div>
                            <div className='cat-collections' onMouseEnter={categoryHoverMouseEnterHandler} onMouseLeave={categoryHoverMouseLeaveHandler} style={style}>
                            
                            {arr.map((item) => {
                                    
                                return <div className='collection'>
                                        {item.map((ite) => {
                                           
                                            return <div className='ca'>
                                            <Link to='/' className='category-head'>{ite.category}</Link>
                                            {
                                                ite.subCategories.map((it) => {
                                                    return <Link  to='/shop' className='sub-item' onClick={onCategoryHandler}>{it}</Link>
                                                })
                                            }
                                            </div>
                                        })}
                                </div>
                            })}
                         
                           
                                
                         
                            </div>
                            </Fragment>
                     
                    })
                   
                }
                  </Fragment>
            
                  
                   
             
                    
                </div>

         
    )
                } 
 

  

export default Flyout;  

                                // <div className='cat-collections' onMouseEnter={categoryHoverMouseEnterHandler} onMouseLeave={categoryHoverMouseLeaveHandler} style={style}>