import AnimatedPage from "../Components/AnimatedPage/AnimatedPage"
import Card from "../Components/ProductCard/Card"
import {  useEffect } from "react"
import axios from "axios"
import {useProducts} from "../Hooks/Product/useProduct"

function Cart()
{
  const {cartProducts, isLoading, removeFromCart, setCartProducts, setIsLoading} = useProducts()



  useEffect(() => {
    axios
    .get("http://192.168.0.13/shopiffy/server/endpoints/product/cart.php", {
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



  return(

    <section className="w-11/12 h-5/6 mx-auto my-10 bg-slate-200 rounded-md shadow-md shadow-gray-500-500/50">
  
      {!cartProducts.length && !isLoading &&
        <div className="flex justify-center items-center h-5/6">
          <AnimatedPage>
              <img src={"src/assets/emptycart.png"} alt="empty cart" className="w-24 md:w-52" />
              <h1 className="font-bold text-lg md:text-2xl my-3">Oops... no products found.</h1>
              <p className="text-xs md:text-base">Add some products in the menu page!</p>
          </AnimatedPage>
        </div>
      }

      {isLoading &&
        <div className="flex justify-center items-center h-full">
          <img src="/src/assets/spinner.gif" alt="loading" width="150"/>
        </div>
      }

      {cartProducts.length > 0 && !isLoading && 
        <AnimatedPage>
          <div className="py-6 px-10 grid grid-cols-1 md:grid-cols-3  gap-6 max-h-[34.5rem] md:max-h-[38rem] overflow-auto w-full">
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