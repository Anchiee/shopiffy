import PropTypes from "prop-types"


function Card(props)
{
  return(

    <div className="card-container">
      <h4>{props.HeaderText}</h4>
      <p>{props.ParagraphText}</p>
    </div>

  )
}

Card.propTypes = {
  HeaderText: PropTypes.string.isRequired,
  ParagraphText: PropTypes.string.isRequired
}

export default Card