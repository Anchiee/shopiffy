
import PropTypes from "prop-types"

function ThinButton(props)
{
  return (
    <button 
      type={props.ButtonType} 
      className="bg-transparent cursor-pointer font-Manrope border-solid border-2 border-black rounded-md py-3 px-5 text-softBlack text-xl 
      transition-colors hover:bg-softBlack hover:text-softBrown-100" 
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