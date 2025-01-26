import { ProductContext } from "../Contexts/ProductsContext";
import { useState } from "react";

function ProductContextProvider({children})
{
  let [products, setProducts] = useState(null)

  return(

    <ProductContext.Provider value={{products, setProducts}}>
      {children}
    </ProductContext.Provider>

  )
}

export default ProductContextProvider