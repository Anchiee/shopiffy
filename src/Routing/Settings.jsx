import { useContext } from "react"
import { SessionContext } from "../Contexts/SessionContext"
import PopUp from "../Components/PopUp/Popup"
import { PopUpContext } from "../Contexts/PopUpContext"
import { PopUpOptionContext } from "../Contexts/PopUpOptionContext"


function Settings()
{ 

  const {userSession} = useContext(SessionContext)
  const {setPopUpStatus} = useContext(PopUpContext)
  const {setPopUpOption} = useContext(PopUpOptionContext)

  const showPopup = (PopUpLabelText, PopUphtmlFor, PopUpPlaceholder, PopUpId) => {
    setPopUpStatus("visible")
    setPopUpOption({labelText: PopUpLabelText, htmlFor: PopUphtmlFor, placeholder: PopUpPlaceholder, id: PopUpId})
  }


  return(
      <section className="flex justify-center items-center h-5/6 mt-10">
        <div className="bg-softBrown-200 py-14 w-1/3 px-8 rounded-md">
          <img src={"src/assets/defaultProfile.jpg"} alt="profile picture" width="150" className="rounded-md"/>
          
          <div className="flex flex-row items-center justify-between my-6">
            <div>
              <h2 className="font-bold">USERNAME</h2>
              <p>{userSession.username}</p>
            </div>
            
            <div className="w-1/5 inline">
                <button type="submit" className="font-Manrope cursor-pointer text-lg bg-softBrown-200 border-2 border-softBrown-300 
                py-2 w-full rounded-md transition-opacity hover:opacity-70" onClick={ () => showPopup("USERNAME", "username", "Enter your username", "username")}>
                  Edit
                </button>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between my-6">
            <div>
              <h2 className="font-bold">PASSWORD</h2>
              <p>*******</p>
            </div>
            
            <div className="w-1/5 inline">
              <button type="submit" className="font-Manrope cursor-pointer text-lg bg-softBrown-200 border-2 border-softBrown-300 
                py-2 w-full rounded-md transition-opacity hover:opacity-70" onClick={() => showPopup("PASSWORD", "password", "Enter your password", "password")}>
                  Edit
              </button>
            </div>
            
          </div>

          <div className="flex flex-row items-center justify-between my-6">
            <div>
              <h2 className="font-bold">EMAIL</h2>
              <p>{userSession.email}</p>
            </div>
            
            <div className="w-1/5 inline">
              <button type="submit" className="font-Manrope cursor-pointer text-lg bg-softBrown-200 border-2 border-softBrown-300 
                py-2 w-full rounded-md transition-opacity hover:opacity-70" onClick={() => showPopup("EMAIL", "email", "Enter your email", "email")}>
                  Edit
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-around mt-10">
            
            <form>
              <button type="submit" className="font-Manrope cursor-pointer text-lg bg-softBrown-200 border-2 border-softBrown-300 
                  py-2 px-8 rounded-md transition-opacity hover:opacity-70">
                    Log out
              </button>
            </form>

            <form>
              <button type="submit" className="font-Manrope cursor-pointer text-lg bg-softBrown-200 border-2 border-softBrown-300 
                  py-2 px-8 rounded-md transition-opacity hover:opacity-70">
                    Delete account
              </button>
              <input type="hidden" name="username" value={userSession.username}/>
            </form>
          </div>
        </div>

        <PopUp/>
        
      </section>
  )
}

export default Settings