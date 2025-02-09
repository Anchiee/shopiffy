import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { ProductContext } from "../../Contexts/ProductsContext";
import axios from "axios";


export function useProducts()
{
  const {products, setProducts} = useContext(ProductContext)
  const {cartProducts, setCartProducts} = useContext(CartContext)
  let [isLoading, setIsLoading] = useState(true)
  let [errorStatus, setErrorStatus] = useState(false)

  const request = (data, type, endpoint) => {
    const method = data ? "post" : "get"
    const url = `http://192.168.0.13/shopiffy/server/endpoints/product/${endpoint}.php`
    
    axios[method](url, data, {withCredentials: true})
    .then(response => {
      console.log("response", response.data)
      
      switch(type)
      {
        case "product":
          if(response.data.status == "success") {
            setErrorStatus(false)
            setProducts(response.data.products);
            console.log(products)
          } 
          else {
            setErrorStatus(response.data.message)
          }
          break
        case "cart":
          if(response.data.status == "success"){
            setCartProducts([...cartProducts, response.data.productAdded])
            console.log(cartProducts)
          }
          break
      }

      setIsLoading(false)


    })
    .catch(error => {
      console.log(error)
    })
  }

  const removeFromCart = (model) => {
    axios
    .delete("http://192.168.0.13/shopiffy/server/endpoints/product/cart.php", {
      data: {model: model},
      withCredentials: true
    })
    .then(response => {
      console.log(response)
      if(response.data.status == "success") {
        setCartProducts(cartProducts.filter(product => product.model !== response.data.model))
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  return {request, removeFromCart, setIsLoading, setCartProducts, errorStatus, products, setProducts, cartProducts, isLoading}

}