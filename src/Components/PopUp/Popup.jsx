import PropTypes from "prop-types"
import Input from "../Input/Input"
import { useContext, useState, useEffect} from "react"
import { PopUpContext } from "../../Contexts/PopUpContext"
import { PopUpOptionContext } from "../../Contexts/PopUpOptionContext"
import axios from "axios"
import { SessionContext } from "../../Contexts/SessionContext"
import AnimatedPage from "../AnimatedPage/AnimatedPage"
import { AnimatePresence } from "motion/react"

function PopUp()
{

  let {PopUpStatus, setPopUpStatus} = useContext(PopUpContext)
  const {PopUpOption, setPopUpOption} = useContext(PopUpOptionContext)
  const {setSession} = useContext(SessionContext)

  let [errorMessage, setErrorMessage] = useState(null)
  let [errorStatus, setErrorStatus] = useState(false)


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

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("The chosen change option:", UserData.UserLabel)
    console.log("new data:", UserData.newInfo)
    console.log("password:", UserData.password)

    axios
    .post("http://192.168.0.13/shopiffy/server/endpoints/updateuser.php", UserData, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => {
      console.log(response.data)

      if(response.data.status == "success") {
        
        if(response.data.type == "username") {
          const newData = response.data.message
          setSession(prevState => ({...prevState, username: newData}))
        }
        else if(response.data.type == "email") {
          const newData = response.data.message
          setSession(prevState => ({...prevState, email: newData}))
        }

        setErrorStatus(false)


        setPopUpStatus()
        setPopUpOption({
          labelText: null, 
          htmlFor: null, 
          placeholder: null, 
          id: null
        })
        
        setUserData({
          UserLabel: null, 
          newInfo: null, 
          password: null
        })
      }
      else if(response.data.status === "error") {
        setErrorMessage(response.data.message)
        setErrorStatus(true)
      }

      
    })
    .catch(error => {
      console.log(error)
    })

  }

 
  return (
      <AnimatePresence mode="wait">
        {PopUpStatus &&
    
        <div className="transition-all pointer-events-auto size-full mb-[5rem] fixed overflow-hidden bg-transparent-200 shadow-gray-300-500/50 shadow-lg">
        
          <AnimatedPage>
            <section className="inline bg-slate-200 text-base rounded-md py-8 px-10 mt-2 w-screen md:w-1/3 shadow-gray-300-500/50 shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              
              <div className="my-6 block">
                <label htmlFor={PopUpOption.htmlFor} className="text-xs md:text-base font-bold">{PopUpOption.labelText}</label>
                
                <Input 
                InputPlaceholder={PopUpOption.labelText == "NEW PASSWORD" ? "Enter your new password" : PopUpOption.placeholder} 
                InputErrorStatus={errorStatus} 
                InputType={PopUpOption.labelText == "NEW PASSWORD" ? "password" : "text"} 
                InputId={PopUpOption.id} 
                InputOnChange={(e) => {setUserData(prevState => ({...prevState, newInfo: e.target.value}))}} 
                InputValue={UserData.newInfo || ""}/>
                
                <p className={errorStatus ? "mb-5 text-red-400 visible text-lg" : "invisible"}>{errorMessage}</p>
              </div>
              
              <div className="my-6 block">
                <label htmlFor="password"  className="text-xs md:text-base font-bold">PASSWORD</label>
                
                <Input 
                InputPlaceholder={PopUpOption.labelText == "PASSWORD" ? "Enter new password" : "Enter your password"} 
                InputOnChange={(e) => {setUserData(prevState => ({...prevState, password: e.target.value}))}} 
                InputType="password" 
                InputId="password" 
                InputValue={UserData.password || ""} 
                InputErrorStatus={errorStatus}/>
                
                <p className={errorStatus ? "mb-5 text-red-400 visible text-lg" : "invisible"}>{errorMessage}</p>
              </div>

              <button className="mx-5 cursor-pointer text-xs md:text-base" onClick={hidePopUp}>Close</button>

              <form onSubmit={handleSubmit} className="inline">
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