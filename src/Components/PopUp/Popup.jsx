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
      <div className="inline bg-slate-200 text-base rounded-md py-8 px-10 mt-2 w-1/3 shadow-gray-300-500/50 shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        
        <div className="my-6 block">
          <label htmlFor={PopUpOption.htmlFor} className="font-bold">{PopUpOption.labelText}</label>
          <Input InputPlaceholder={PopUpOption.placeholder} InputType="text" InputId={PopUpOption.id}/>
        </div>
        
        <div className="my-6 block">
          <label htmlFor="password" className="font-bold">{PopUpOption.labelText == "PASSWORD" ? "NEW PASSWORD" : "PASSWORD"}</label>
          <Input InputPlaceholder={PopUpOption.labelText == "PASSWORD" ? "Enter new password" : "Enter your password"} 
          InputType="password" InputId="password"/>
        </div>

        <button className="mx-5" onClick={hidePopUp}>Close</button>

        <form className="inline">
          <button className="font-Manrope cursor-pointer text-base bg-orange-300
  py-3 px-5 font-bold rounded-md transition-opacity box-border hover:opacity-70">Save</button>
        </form>
          

      </div>
    </section>

  )
}

PopUp.propTypes = {
  popUpStatus: PropTypes.string.isRequired
}

export default PopUp