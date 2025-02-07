
import PropTypes from "prop-types"

function ThinButton(props)
{
  return (
    <button 
      type={props.ButtonType} 
      className="bg-transparent-100 cursor-pointer outline-1 outline-gray-700 font-Manrope md:border-solid md:border-2 md:border-slate-400 
      rounded-md py-3 px-5 text-slate-400 md:text-lg 
      transition-colors md:hover:bg-slate-400 md:hover:text-softBlack" 
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