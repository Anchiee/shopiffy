import PropTypes from "prop-types"
import Input from "../Input/Input"
import { useContext, useState, useEffect} from "react"
import { PopUpContext } from "../../Contexts/PopUpContext"
import { PopUpOptionContext } from "../../Contexts/PopUpOptionContext"
import AnimatedPage from "../AnimatedPage/AnimatedPage"
import { AnimatePresence } from "motion/react"
import { useUser } from "../../Hooks/Auth/useUser"


function PopUp()
{

  let {PopUpStatus, setPopUpStatus} = useContext(PopUpContext)
  const {PopUpOption, setPopUpOption} = useContext(PopUpOptionContext)
  const {errorMessage, errorStatus, setErrorMessage, setErrorStatus, updateUser} = useUser()


  let [UserData, setUserData] = useState({
    UserLabel: PopUpOption.labelText, 
    newInfo: null, 
    password: null 
  })

  useEffect(() => {
    setUserData(prevState => ({...prevState, UserLabel: PopUpOption.labelText}))

  }, [PopUpOption.labelText])
 

  const hidePopUp = () => {
    setPopUpStatus(false)
    setPopUpOption({
      labelText: null, 
      htmlFor: null, 
      placeholder: null, 
    })
    
    setUserData({
      UserLabel: null, 
      newInfo: null, 
      password: null
    })
    setErrorMessage(null)
    setErrorStatus(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    console.log("The chosen change option:", UserData.UserLabel)
    console.log("new data:", UserData.newInfo)
    console.log("password:", UserData.password)
    updateUser(UserData, setPopUpStatus, setPopUpOption, setUserData)
  }
    

 
  return (
      <AnimatePresence mode="wait">
        {PopUpStatus &&
    
        <div className="transition-all pointer-events-auto size-full mb-[5rem] fixed overflow-hidden bg-transparent-200 shadow-gray-300-500/50 shadow-lg">
        
          <AnimatedPage>
            <section className="inline bg-slate-200 text-base rounded-md py-8 px-10 mt-2 w-screen md:w-1/3 shadow-gray-300-500/50 shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              
              <form onSubmit={onSubmit}>
              <div className="my-6 block">
                <label htmlFor={PopUpOption.htmlFor} className="text-xs md:text-base font-bold">{PopUpOption.labelText}</label>
                
                <Input 
                InputPlaceholder={PopUpOption.labelText == "NEW PASSWORD" ? "Enter your new password" : PopUpOption.placeholder} 
                InputErrorStatus={errorStatus} 
                InputType={PopUpOption.labelText == "NEW PASSWORD" ? "password" : 
                PopUpOption.labelText == "EMAIL" ? "email" : "text"} 
                InputId={PopUpOption.labelText == "NEW PASSWORD" ? "newPassword" : PopUpOption.htmlFor} 
                InputOnChange={(e) => {setUserData(prevState => ({...prevState, newInfo: e.target.value}))}} 
                InputValue={UserData.newInfo || ""}/>
                
                <p className={errorStatus ? "mb-5 text-red-400 visible text-xs" : "invisible"}>{errorMessage}</p>
              </div>
              
              <div className="my-6 block">
                <label htmlFor="password"  className="text-xs md:text-base font-bold">PASSWORD</label>
                
                <Input 
                InputPlaceholder="Enter your password" 
                InputOnChange={(e) => {setUserData(prevState => ({...prevState, password: e.target.value}))}} 
                InputType="password" 
                InputId="password" 
                InputValue={UserData.password || ""} 
                InputErrorStatus={errorStatus}/>
                
                <p className={errorStatus ? "mb-5 text-red-400 visible text-xs" : "invisible"}>{errorMessage}</p>
              </div>

              <button type="button" className="mx-5 cursor-pointer text-xs md:text-base" onClick={hidePopUp}>Close</button>

              <button className="font-Manrope cursor-pointer  bg-orange-300
      py-3 px-5 font-bold rounded-md transition-opacity box-border hover:opacity-70 text-xs md:text-base">
                Save
              </button>    
            </form>

            </section>
          </AnimatedPage>
        
      </div>}
    </AnimatePresence>
  
  ) 
}

PopUp.propTypes = {
  popUpStatus: PropTypes.string.isRequired
}

export default PopUp