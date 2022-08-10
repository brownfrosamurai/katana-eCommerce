import { createContext, useState } from "react";

import PRODUCTS from "../shop.data.json"

export const ProductsContext = createContext({
  products: [],
})

export const ProductsProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(PRODUCTS)
  const value = { products }

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )

};
