import AnimatedPage from "../Components/AnimatedPage/AnimatedPage"
import Card from "../Components/ProductCard/Card"
import { useContext } from "react"
import { CartContext } from "../Contexts/CartContext"


function Cart()
{
  let {cartProducts, setCartProducts} = useContext(CartContext)
  console.log(cartProducts)
  return(

    <section className="w-11/12 h-5/6 mx-auto my-10 bg-slate-200 rounded-md shadow-md shadow-gray-500-500/50">
      <AnimatedPage>

      <div className="py-6 px-10 grid grid-cols-3  gap-6 max-h-150 overflow-auto w-full">
      {cartProducts.map((product, index) => {
        return(
        <Card 
        CardName={product.model} CardDescription={product.description} CardPrice={product.price} CardPath={product.path} 
        key={index} ButtonText="Remove from cart"/>)
      })}
      </div>
      </AnimatedPage>

    </section>

  )
}

export default Cart