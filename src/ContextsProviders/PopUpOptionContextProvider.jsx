import {useState } from "react";
import { PopUpOptionContext } from "../Contexts/PopUpOptionContext";

function PopUpOptionContextProvider({children})
{
  let [PopUpOption, setPopUpOption] = useState({labelText: null, htmlFor: null, placeholder: null, id: null})

  return(

    <PopUpOptionContext.Provider value={{PopUpOption, setPopUpOption}}>
      {children}
    </PopUpOptionContext.Provider>

  )
}

export default PopUpOptionContextProvider