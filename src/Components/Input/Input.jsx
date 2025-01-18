
import PropTypes from "prop-types"


function Input(props)
{
  return <input type={props.InputType} placeholder={props.InputPlaceholder} onChange={props.InputOnChange} 
  className={props.InputClass ? "border-2 border-solid border-red-700 font-Manrope outline-none bg-transparent-100 rounded-md text-lg py-2 pl-3 size-full box-border placeholder:text-softBlack" 
    : "border-2 border-solid border-softBlack font-Manrope outline-none bg-transparent-100 rounded-md text-lg size-full box-border py-2 pl-3 placeholder:text-softBlack"}
  id={props.InputId}/>
}


Input.propTypes = {
  InputType: PropTypes.string.isRequired,
  InputPlaceholder: PropTypes.string.isRequired,
  InputOnChange: PropTypes.func.isRequired,
  InputClass: PropTypes.string.isRequired,
  InputId: PropTypes.string.isRequired,
}

export default Input