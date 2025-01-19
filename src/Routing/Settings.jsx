import { useContext } from "react"
import { SessionContext } from "../Contexts/SessionContext"
import PopUp from "../Components/PopUp/Popup"
import { PopUpContext } from "../Contexts/PopUpContext"
import { PopUpOptionContext } from "../Contexts/PopUpOptionContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import AnimatedPage from "../Components/AnimatedPage/AnimatedPage"


function Settings()
{ 

  const {userSession, setSession} = useContext(SessionContext)
  const {setPopUpStatus} = useContext(PopUpContext)
  const {setPopUpOption} = useContext(PopUpOptionContext)
  const navigate = useNavigate()

  const showPopup = (PopUpLabelText, PopUphtmlFor, PopUpPlaceholder, PopUpId) => {
    setPopUpStatus("opacity-1 transition-all pointer-events-auto size-full mb-9 absolute bg-transparent-300 shadow-gray-300-500/50 shadow-lg")
    setPopUpOption({labelText: PopUpLabelText, htmlFor: PopUphtmlFor, placeholder: PopUpPlaceholder, id: PopUpId})
    document.body.classList.add("no-scroll")
  }

  const handleLogOut = (e) => {
    e.preventDefault()

    axios
    .delete("http://localhost/shopiffy/server/endpoints/logout.php", {
      withCredentials: true
    })
    .then(response => {
      if(response.data.status == "success") {
        setSession({username:null, email:null})
        navigate("/")
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleDeleteAccount = (e) => {
    e.preventDefault()

    axios
    .delete("http://localhost/shopiffy/server/endpoints/deleteaccount.php", {
      withCredentials: true
    })
    .then(response => {
      console.log(response.data)
      if(response.data.status == "success") {
        setSession({username:null, email:null})
        navigate("/")
      }
    })
    .catch(error => {
      console.log(error)
    })

  }


  return(
    <AnimatedPage>
      <section className="flex justify-center items-center h-5/6 mt-10 mb-">
        <div className="inline bg-slate-200 text-base rounded-md py-8 px-10 mt-2 w-1/3 shadow-gray-300-500/50 shadow-lg">
          <img src={"src/assets/defaultProfile.jpg"} alt="profile picture" width="120" className="rounded-md"/>
          
          <div className="flex flex-row items-center justify-between my-10">
            <div>
              <h2 className="font-bold">USERNAME</h2>
              <p>{userSession.username}</p>
            </div>
            
            <div className="w-1/5 inline">
            <button className="font-Manrope cursor-pointer text-base bg-orange-300
    py-3 w-full font-bold rounded-md transition-opacity box-border hover:opacity-70" onClick={() => showPopup("USERNAME", "username", "Enter your username", "username")}>
                Edit
              </button>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between my-10">
            <div>
              <h2 className="font-bold">PASSWORD</h2>
              <p>*******</p>
            </div>
            
            <div className="w-1/5 inline">
            <button className="font-Manrope cursor-pointer text-base bg-orange-300
    py-3 w-full font-bold rounded-md transition-opacity box-border hover:opacity-70" onClick={() => showPopup("PASSWORD", "password", "Enter your password", "password")}>
                Edit
              </button>
            </div>
            
          </div>

          <div className="flex flex-row items-center justify-between my-10">
            <div>
              <h2 className="font-bold">EMAIL</h2>
              <p>{userSession.email}</p>
            </div>
            
            <div className="w-1/5 inline">
              <button className="font-Manrope cursor-pointer text-base bg-orange-300
    py-3 w-full font-bold rounded-md transition-opacity box-border hover:opacity-70" onClick={() => showPopup("EMAIL", "email", "Enter your email", "email")}>
                Edit
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-around">
            
            <form onSubmit={handleLogOut} method="delete">
            <button type="submit" className="font-Manrope cursor-pointer text-base bg-orange-300
    py-3 px-10 w-full font-bold rounded-md transition-opacity box-border hover:opacity-70">
                Log out
              </button>
            </form>

            <form onSubmit={handleDeleteAccount} method="delete">
            <button type="submit" className="font-Manrope cursor-pointer text-base bg-red-500
    py-3 w-full font-bold rounded-md transition-opacity box-border hover:opacity-70" onClick={() => showPopup("EMAIL", "email", "Enter your email", "email")}>
                Delete account
              </button>
              <p className="text-xs font-bold mt-2">WARNING! this option is permament</p>
            </form>
          </div>
        </div>

        <PopUp/>
        
      </section>
    </AnimatedPage>
  )
}

export default Settings