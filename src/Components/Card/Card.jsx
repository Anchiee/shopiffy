import PropTypes from "prop-types"


function Card(props)
{
  return(

    <div className="card-container">
      <h4 className="font-bold mt-10 text-xl">{props.HeaderText}</h4>
      <p className="my-5 text-lg">{props.ParagraphText}</p>
    </div>

  )
}

Card.propTypes = {
  HeaderText: PropTypes.string.isRequired,
  ParagraphText: PropTypes.string.isRequired
}

export default Card