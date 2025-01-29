import { CartContext } from "../Contexts/CartContext"
import { useState } from "react"

function CartContextProvider({children})
{
  let [cartProducts, setCartProducts] = useState([])

  return(
    <CartContext.Provider value={{cartProducts, setCartProducts}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider