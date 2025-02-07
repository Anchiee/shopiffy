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

  const showPopup = (PopUpLabelText, PopUphtmlFor, PopUpPlaceholder) => {
    setPopUpStatus(true)
    setPopUpOption({labelText: PopUpLabelText, htmlFor: PopUphtmlFor, placeholder: PopUpPlaceholder, id: PopUphtmlFor})
  }

  const handleLogOut = (e) => {
    e.preventDefault()

    axios
    .delete("http://192.168.0.13/shopiffy/server/endpoints/logout.php", {
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
    .delete("http://192.168.0.13/shopiffy/server/endpoints/deleteaccount.php", {
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
      <section className="flex justify-center items-center mt-12">
        <div className="inline bg-slate-200 text-base rounded-md py-6 px-8 md:py-8 md:px-10  shadow-gray-300-500/50 shadow-xl 
        md:shadow-lg">
          
          <img src={"src/assets/defaultProfile.jpg"} alt="profile picture" width="120" className="rounded-md"/>
          
          {[
            {header: "USERNAME", data: userSession.username},
            {header: "PASSWORD", data: "*******"},
            {header: "EMAIL", data: userSession.email}
          ].map((data, index) => (
            <div className="flex flex-row items-center justify-between  my-5 md:my-10" key={index}>
              <div>
                <h2 className="text-[.75rem] md:text-base font-bold">{data.header}</h2>
                <p className="text-[.65rem] md:text-base">{data.data}</p>
              </div>
            
              <div className="w-1/5 inline">
                <button className="font-Manrope cursor-pointer text-xs md:text-base bg-orange-300
                py-3 w-full font-bold rounded-md transition-opacity box-border hover:opacity-70" 
                onClick={() => showPopup(data.header == "PASSWORD" ? "NEW PASSWORD" : data.header, data.header.toLowerCase(), `Enter your ${data.header.toLowerCase()}`)}>
                Edit
                </button>
              </div>
            </div>

          ))}

          

          <div className="flex flex-row justify-around gap-8">
            
            <form onSubmit={handleLogOut} method="delete">
            <button type="submit" className="font-Manrope cursor-pointer text-xs md:text-base bg-orange-300
    py-3 px-7 md:px-10 font-bold w-full rounded-md transition-opacity  hover:opacity-70">
                Log out
              </button>
            </form>

            <form onSubmit={handleDeleteAccount} method="delete">
              <button type="submit" className="font-Manrope cursor-pointer text-xs md:text-base bg-red-500
    py-3 w-full font-bold rounded-md transition-opacity  hover:opacity-70">
                Delete account
              </button>
              <p className="text-[.5rem] md:text-xs font-bold mt-2">WARNING! this option is permament</p>
            </form>
          </div>
        </div>

        <PopUp/>
        
      </section>
    </AnimatedPage>
  )
}

export default Settings