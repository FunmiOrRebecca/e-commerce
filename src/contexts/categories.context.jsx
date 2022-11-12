import {createContext, useState, useEffect} from 'react';
import {addCollectionAndDocuments, getCategoriesAndDocuments} from '../utils/firebase.js';
import CATEGORIES from '../categories.js';


export const CategoriesContext = createContext({
    categories: [],
    setCategories: null
})

export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const value = {categories, setCategories}

    // useEffect(() => {
    //     addCollectionAndDocuments("categories", CATEGORIES)        
    // }, []);

    useEffect(() => {
        const getCategoriesArray = async () => {
           const categoriesArray =  await getCategoriesAndDocuments();
            setCategories(categoriesArray);
        }
        getCategoriesArray();
        
    }, [])

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}