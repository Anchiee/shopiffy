import { useState } from "react"
import { PopUpContext } from "../Contexts/PopUpContext"


function PopUpContextProvider({children})
{
  const [PopUpStatus, setPopUpStatus] = useState(false)
  return(

    <PopUpContext.Provider value={{PopUpStatus, setPopUpStatus}}>
      {children}
    </PopUpContext.Provider>

  )
}

export default PopUpContextProvider