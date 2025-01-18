
import PropTypes from "prop-types"

function SolidButton(props)
{
  return <button 
    type={props.ButtonType} 
    className="block mx-auto my-8 font-Manrope cursor-pointer text-xl bg-softBrown-200 border-2 border-softBrown-300 
    py-4 w-full rounded-md transition-opacity box-border hover:opacity-70" 
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