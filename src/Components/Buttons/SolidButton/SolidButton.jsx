import "./SolidButton.css"
import PropTypes from "prop-types"

function SolidButton(props)
{
  return <button type={props.ButtonType} className="solid-button" onClick={props.ButtonClick}>{props.ButtonText}</button>
}

SolidButton.propTypes = {
  ButtonType: PropTypes.string.isRequired,
  ButtonClick: PropTypes.func.isRequired,
  ButtonText: PropTypes.string.isRequired
}

export default SolidButton