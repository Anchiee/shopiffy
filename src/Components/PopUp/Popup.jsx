import PropTypes from "prop-types"
import Input from "../Input/Input"
import { useContext } from "react"
import { PopUpContext } from "../../Contexts/PopUpContext"
import { PopUpOptionContext } from "../../Contexts/PopUpOptionContext"

function PopUp()
{

  let {PopUpStatus, setPopUpStatus} = useContext(PopUpContext)
  const {PopUpOption} = useContext(PopUpOptionContext)

  const hidePopUp = () => {
    setPopUpStatus("opacity-0 transition-opacity pointer-events-none")
    document.body.classList.remove("no-scroll")
  }


  console.log(PopUpOption.labelText)
 
  return(
      <section className={PopUpStatus}>
      <div className="bg-softBrown-100 px-5 py-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md ">
        
        <div className="my-6 block">
          <label htmlFor={PopUpOption.htmlFor} className="font-bold">{PopUpOption.labelText}</label>
          <Input InputPlaceholder={PopUpOption.placeholder} InputType="text" InputId={PopUpOption.id}/>
        </div>
        
        <div className="my-6 block">
          <label htmlFor="password" className="font-bold">{PopUpOption.labelText == "PASSWORD" ? "NEW PASSWORD" : "PASSWORD"}</label>
          <Input InputPlaceholder={PopUpOption.labelText == "PASSWORD" ? "Enter new password" : "Enter your password"} 
          InputType="password" InputId="password"/>
        </div>

        <div className="ml-36">
          <button className="mx-5" onClick={hidePopUp}>Close</button>

          <form className="inline">
            <button className="bg-softBrown-200 py-2 px-4 rounded-md">Save</button>
          </form>
          
        </div>

      </div>
    </section>

  )
}

PopUp.propTypes = {
  popUpStatus: PropTypes.string.isRequired
}

export default PopUp