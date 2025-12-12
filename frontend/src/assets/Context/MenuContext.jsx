import { product } from "../asset"; 
import React, { createContext, useState } from 'react';
export const MenuContext = createContext();
export const MenuContextProvider = ({ children }) => {
    const [products, setProducts] = useState(product);
 return(<MenuContext.Provider value = {{products}} > {children} </MenuContext.Provider>)
}
export default MenuContextProvider
