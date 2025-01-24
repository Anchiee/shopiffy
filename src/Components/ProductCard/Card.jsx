

function Card()
{
  return(
  <div className="w-full max-w-sm bg-slate-300 border border-gray-200 rounded-lg shadow-sm">
    <a href="#">
        <img className="rounded-t-lg pl-5 py-7" src="/src/assets/s24ultra.png" alt="product image" width="180"/>
    </a>
    <div className="px-5 pb-5">
      <a href="#">
          <h2 className="text-base font-semibold tracking-tight text-softBlack">Samsung Galaxy S24 Ultra</h2>
          <p className="mt-1 mb-4">Meet the performance beast, that you will never be disappointed with.</p>
      </a>
      
      <div className="flex items-center justify-between">
          <span className="text-lg font-bold  text-softBlack">$599</span>
          <button 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 \
          font-medium font-Manrope rounded-lg text-sm px-5 py-2.5 text-center transition-all">
            Add to cart
          </button>
      </div>
    </div>
</div>


  )
}


export default Card