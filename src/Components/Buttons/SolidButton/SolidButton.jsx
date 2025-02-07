
import PropTypes from "prop-types"

function SolidButton(props)
{
  return <button 
    type={props.ButtonType} 
    className="block mx-auto my-3 font-Manrope cursor-pointer text-base md:text-xl bg-orange-300
    py-4 w-full rounded-md transition-opacity box-border font-bold md:hover:opacity-70" 
    onClick={props.ButtonClick}>
    {props.ButtonText}
    </button>
}

SolidButton.propTypes = {
  ButtonType: PropTypes.string.isRequired,
  ButtonClick: PropTypes.func.isRequired,
  ButtonText: PropTypes.string.isRequired
}

export default SolidButton