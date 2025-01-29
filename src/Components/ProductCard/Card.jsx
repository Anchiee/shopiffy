import PropTypes from "prop-types"

function Card(props)
{
  return(
  <div className="w-full max-w-sm bg-slate-300  rounded-lg shadow-sm hover:shadow-xl
  cursor-pointer transition-all">
    <img 
    className="rounded-t-lg pl-5 py-7 h-1/2"  
    src={props.CardPath} alt="product image" width="200"/>
    <div className="px-5">
        <h2 className="text-base font-semibold tracking-tight text-softBlack">{props.CardName}</h2>
        <p className="mt-1 mb-4">{props.CardDescription}</p>
      
      <div className="flex items-center justify-between">
          <span className="text-lg font-bold  text-softBlack">{props.CardPrice}$</span>
          <button 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 \
          font-medium font-Manrope rounded-lg text-sm px-5 py-2.5 text-center transition-all"
          onClick={props.ButtonFunc}
          >
            {props.ButtonText}
          </button>
      </div>
    </div>
</div>


  )
}

Card.propTypes = {
  CardPath: PropTypes.string.isRequired,
  CardName: PropTypes.string.isRequired,
  CardDescription: PropTypes.string.isRequired,
  CardPrice: PropTypes.number.isRequired,
  ButtonText: PropTypes.string.isRequired,
  ButtonFunc: PropTypes.func.isRequired,

}

export default Card