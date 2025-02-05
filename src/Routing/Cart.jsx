import AnimatedPage from "../Components/AnimatedPage/AnimatedPage"
import Card from "../Components/ProductCard/Card"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../Contexts/CartContext"
import axios from "axios"

function Cart()
{
  let {cartProducts, setCartProducts} = useContext(CartContext)
  let [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    axios
    .get("http://localhost/shopiffy/server/endpoints/cart.php", {
      withCredentials: true,
    })
    .then(response => {
      console.log(response.data)
      if(response.data.status == "success") {
        setCartProducts(response.data.products)
        setIsLoading(false)
      }
    })
    .catch(error => {
      console.log(error)
    })

  }, [])

  const removeFromCart = (model) => {
    axios
    .delete("http://localhost/shopiffy/server/endpoints/cart.php", {
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



  return(

    <section className="w-11/12 h-5/6 mx-auto my-10 bg-slate-200 rounded-md shadow-md shadow-gray-500-500/50">
  
      {!cartProducts.length && !isLoading &&
        <div className="flex justify-center items-center h-full">
          <AnimatedPage>
            <div>
              <img src={"src/assets/emptycart.png"} alt="empty cart" width="200"/>
              <h1 className="font-bold text-2xl my-3">Oops... no products found.</h1>
              <p>Add some products in the menu page!</p>
            </div>
          </AnimatedPage>
        </div>
      }

      {isLoading &&
        <div className="flex justify-center items-center h-full">
          <img src="/src/assets/spinner.gif" alt="loading" width="150"/>
        </div>
      }

      {cartProducts.length && !isLoading && 
        <AnimatedPage>
          <div className="py-6 px-10 grid grid-cols-3  gap-6 max-h-150 overflow-auto w-full">
          {cartProducts.map((product, index) => {
            return(
            <Card 
            CardName={product.model} CardDescription={product.description} CardPrice={product.price} CardPath={product.path} 
            key={index} ButtonText="Remove from cart" ButtonFunc={() => removeFromCart(product.model)}/>)
          })}
          </div>
        </AnimatedPage>
      }
    

    </section>

  )
}

export default Cart