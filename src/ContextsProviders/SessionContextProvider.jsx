import { useState } from "react";
import { SessionContext } from "../Contexts/SessionContext";


function SessionContextProvider({children}) {
  let [userSession, setSession] = useState()

  return (

    <SessionContext.Provider value={{userSession, setSession}}>
      {children}
    </SessionContext.Provider>

  )
}

export default SessionContextProvider