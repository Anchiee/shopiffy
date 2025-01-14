import "./ThinButton.css"
import PropTypes from "prop-types"

function ThinButton(props)
{
  return <button type={props.ButtonType} className="thin-button" onClick={props.ButtonClick}>{props.ButtonText}</button>
}

ThinButton.propTypes = {
  ButtonType: PropTypes.string.isRequired,
  ButtonClick: PropTypes.func.isRequired,
  ButtonText: PropTypes.string.isRequired
}

export default ThinButton