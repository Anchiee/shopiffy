import { useState } from "react";
import { SessionContext } from "../Contexts/SessionContext.jsx";


function SessionContextProvider({children}) {
  let [userSession, setSession] = useState({username: null, email: null})

  return (

    <SessionContext.Provider value={{userSession, setSession}}>
      {children}
    </SessionContext.Provider>

  )
}

export default SessionContextProvider