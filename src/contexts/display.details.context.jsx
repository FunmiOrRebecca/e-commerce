import { createContext, useState  } from "react";


export const DisplayDetails = createContext({
    flyout: false,
    setFlyout: null,
    currentProduct: {},
    setCurrentProduct:null,
}) 
export const DisplayDetailsProvider = ({children}) => {
    const [flyout, setFlyout] = useState(false);
    const [currentCategory, setCurrentCategory] = useState("");
    // const [it, setIt] = useState(null);
    const [currentProduct, setCurrentProduct] = useState({});


    const value = { flyout, setFlyout,currentProduct, setCurrentProduct}
    
    return <DisplayDetails.Provider value={value}>{children}</DisplayDetails.Provider>
    

}