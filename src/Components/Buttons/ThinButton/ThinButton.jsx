
import PropTypes from "prop-types"

function ThinButton(props)
{
  return (
    <button 
      type={props.ButtonType} 
      className="bg-transparent-100 cursor-pointer outline-1 outline-gray-700 font-Manrope xl:border-solid xl:border-2 xl:border-slate-400 
      rounded-md py-3 px-5 text-slate-400 xl:text-lg 
      transition-colors xl:hover:bg-slate-400 xl:hover:text-softBlack" 
      onClick={props.ButtonClick}>
      {props.ButtonText}
    </button>
  )
}

ThinButton.propTypes = {
  ButtonType: PropTypes.string.isRequired,
  ButtonClick: PropTypes.func.isRequired,
  ButtonText: PropTypes.string.isRequired
}

export default ThinButton