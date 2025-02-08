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
    axios
    .post(`http://192.168.0.13/shopiffy/server/endpoints/product/${endpoint}.php`, data)
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
          setIsLoading(false)
          break
        case "cart":
          if(response.data.status == "success"){
            setCartProducts([...cartProducts, response.data.productAdded])
            console.log(cartProducts)
          }
          setIsLoading(false)
          break
      }


    })
    .catch(error => {
      console.log(error)
    })
  }

  return {request, errorStatus, products, setProducts, cartProducts, isLoading}

}