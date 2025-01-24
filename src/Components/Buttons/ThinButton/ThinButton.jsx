
import PropTypes from "prop-types"

function ThinButton(props)
{
  return (
    <button 
      type={props.ButtonType} 
      className="bg-transparent-100 cursor-pointer font-Manrope border-solid border-2 border-slate-400 rounded-md py-3 px-5 text-slate-400 text-lg 
      transition-colors hover:bg-slate-400 hover:text-softBlack" 
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