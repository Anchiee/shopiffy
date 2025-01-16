
import PropTypes from "prop-types"
import "./Input.css"

function Input(props)
{
  return <input type={props.InputType} placeholder={props.InputPlaceholder} onChange={props.InputOnChange} 
  className={props.InputClass ? props.InputClass : "normal-input"}
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