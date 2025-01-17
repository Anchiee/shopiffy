import PropTypes from "prop-types"
import Input from "../Input/Input"

function PopUp(props)
{

  return(

    <section className={props.PopupStatus}>
      <div className="bg-softBrown-100 px-5 py-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md ">
        
        <div className="my-6 block">
          <label htmlFor="username" className="font-bold">USERNAME</label>
          <Input InputPlaceholder="Enter your username" InputType="text" InputId="username"/>
        </div>
        
        <div className="my-6 block">
          <label htmlFor="password" className="font-bold">PASSWORD</label>
          <Input InputPlaceholder="Enter your password" InputType="password" InputId="password"/>
        </div>

        <div className="ml-36">
          <button className="mx-5">Close</button>

          <form className="inline">
            <button className="bg-softBrown-200 py-1 px-4 rounded-md">Save</button>
          </form>
          
        </div>

      </div>
    </section>

  )
}

PopUp.propTypes = {
  PopupStatus: PropTypes.string.isRequired
}

export default PopUp