import PropTypes from "prop-types"

function Card(props)
{
  return(
  <div className="bg-slate-300  rounded-lg shadow-sm hover:shadow-xl
  cursor-pointer transition-all">
    <img 
    className="rounded-lg pl-5 py-7 h-1/2 w-32 md:w-48"  
    src={props.CardPath} alt="product image"/>
    <div className="px-5">
        <h2 className="text-xs md:text-base font-semibold tracking-tight text-softBlack">{props.CardName}</h2>
        <p className="mt-1 mb-4 text-xs md:text-base ">{props.CardDescription}</p>
      
      <div className="flex items-center justify-between">
          <span className="text-base md:text-lg font-bold  text-softBlack">{props.CardPrice}$</span>
          <button 
          className="text-white bg-blue-700 hover:bg-blue-800
          font-medium font-Manrope rounded-lg text-[.6rem] md:text-sm px-1 md:px-5 py-2.5 text-center cursor-pointer transition-all hover:opacity-80 active:opacity-70"
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