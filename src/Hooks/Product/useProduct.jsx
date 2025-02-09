import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { ProductContext } from "../../Contexts/ProductsContext";
import axios from "axios";


export function useProducts()
{
  const {products, setProducts} = useContext(ProductContext)
  const {cartProducts, setCartProducts} = useContext(CartContext)
  let [isLoading, setIsLoading] = useState(true)
  let [errorStatus, setErrorStatus] = useState(false)

  let [searchProduct, setSearchProduct] = useState({
    product: null
  })

  let [filterOptions, setFilterOptions] = useState({
    category: null,
    brands: [],
    os: null
  })

  const handleCategory = (e) => {
    setFilterOptions({...filterOptions, category: e.target.value})
  }

  const handleBrand = (e) => {
    const brandVal = e.target.value
    let isChecked = e.target.checked

    if(isChecked) {
      setFilterOptions(prevState => ({...prevState, brands: [...prevState.brands, brandVal]}))
    }
    else {
      setFilterOptions(prevState => ({...prevState, brands: 
        prevState.brands.filter((brand) => brand !== brandVal)
      }))
    }
  }

  const handleInput = (e) => {
    setSearchProduct({product: e.target.value})
  }

  const handleOs = (e) => {
    setFilterOptions({...filterOptions, os: e.target.value})
  }

  useEffect(() => {
      console.log(products)
      request(filterOptions, "product", "getproductsbyfilter")
      
    }, [filterOptions])

    useEffect(() => {
      console.log(products)
      request(searchProduct, "product", "getproductinfobyname")
      
    }, [searchProduct])


    const handleSearchProduct = (e) => {
      e.preventDefault()
      request(searchProduct, "product", "getproductinfobyname")
    }



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

  return {request, removeFromCart, setIsLoading, handleCategory, handleBrand, handleInput, 
    handleOs, handleSearchProduct, setCartProducts, errorStatus, products, setProducts, cartProducts, 
    isLoading}

}