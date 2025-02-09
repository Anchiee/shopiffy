
import PropTypes from "prop-types"


function Input(props)
{
  return (
  <input 
  type={props.InputType} 
  placeholder={props.InputPlaceholder} 
  onChange={props.InputOnChange} 
  className={props.InputErrorStatus ? "block w-full rounded-md bg-transparent-100 px-3.5 py-2  text-base text-gray-900 outline-1 -outline-offset-1 outline-red-300 placeholder-gray-400  focus:outline-2 focus:-outline-offset-2 focus:outline-red-400" 
    : "block my-3 w-full rounded-md bg-transparent-100 px-3.5 py-2 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder-gray-400  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"}
  id={props.InputId}
  value={props.InputValue} 
  autoComplete="on"
  required/>)
}


Input.propTypes = {
  InputType: PropTypes.string.isRequired,
  InputPlaceholder: PropTypes.string.isRequired,
  InputOnChange: PropTypes.func.isRequired,
  InputErrorStatus: PropTypes.string.isRequired,
  InputId: PropTypes.string.isRequired,
  InputValue: PropTypes.string.isRequired,
}

export default Input