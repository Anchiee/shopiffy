import PropTypes from "prop-types"
import Input from "../Input/Input"
import { useContext, useState, useEffect} from "react"
import { PopUpContext } from "../../Contexts/PopUpContext"
import { PopUpOptionContext } from "../../Contexts/PopUpOptionContext"
import axios from "axios"
import { SessionContext } from "../../Contexts/SessionContext"

function PopUp()
{

  let {PopUpStatus, setPopUpStatus} = useContext(PopUpContext)
  const {PopUpOption, setPopUpOption} = useContext(PopUpOptionContext)
  const {setSession} = useContext(SessionContext)


  let [UserData, setUserData] = useState({UserLabel: PopUpOption.labelText, newInfo: null, password: null })

  useEffect(() => {
    setUserData(prevState => ({...prevState, UserLabel: PopUpOption.labelText}))

  }, [PopUpOption.labelText])

  const handleUserChange = (e) => {
    setUserData(prevState => ({...prevState, newInfo: e.target.value}))
  }

  const handlePassword = (e) => {
    setUserData(prevState => ({...prevState, password: e.target.value}))  
  }

  const hidePopUp = () => {
    setPopUpStatus("opacity-0 transition-opacity pointer-events-none")
    setPopUpOption({labelText: null, htmlFor: null, placeholder: null, id: null})
    setUserData({UserLabel: PopUpOption.labelText, newInfo: null, password: null})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("The chosen change option:", UserData.UserLabel)
    console.log("new data:", UserData.newInfo)
    console.log("password:", UserData.password)

    axios
    .post("http://localhost/shopiffy/server/endpoints/updateuser.php", UserData, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => {
      console.log(response.data.message)

      if(response.data.status == "success") {
        
        if(response.data.type == "username") {
          const newData = response.data.message
          setSession(prevState => ({...prevState, username: newData}))
        }
        else if(response.data.type == "email") {
          const newData = response.data.message
          setSession(prevState => ({...prevState, email: newData}))
        }

      }
    })
    .catch(error => {
      console.log(error)
    })

  }

 
  return(
      <section className={PopUpStatus}>
      <div className="inline bg-slate-200 text-base rounded-md py-8 px-10 mt-2 w-1/3 shadow-gray-300-500/50 shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        
        <div className="my-6 block">
          <label htmlFor={PopUpOption.htmlFor} className="font-bold">{PopUpOption.labelText}</label>
          <Input InputPlaceholder={PopUpOption.placeholder} 
          InputType={PopUpOption.labelText == "PASSWORD" ? "password" : "text"} InputId={PopUpOption.id} InputOnChange={handleUserChange} InputValue={UserData.newInfo || ""}/>
        </div>
        
        <div className="my-6 block">
          <label htmlFor="password" className="font-bold">{PopUpOption.labelText == "PASSWORD" ? "NEW PASSWORD" : "PASSWORD"}</label>
          <Input InputPlaceholder={PopUpOption.labelText == "PASSWORD" ? "Enter new password" : "Enter your password"} InputOnChange={handlePassword} 
          InputType="password" InputId="password" InputValue={UserData.password || ""}/>
        </div>

        <button className="mx-5" onClick={hidePopUp}>Close</button>

        <form onSubmit={handleSubmit} className="inline">
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