import { useContext, useState } from "react";
import { SessionContext } from "../../Contexts/SessionContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export function useUser() {

  const {setSession} = useContext(SessionContext)
  const navigate = useNavigate()


  let [user, setUser] = useState({
    username: null, 
    email: null, 
    password: null,
  })

  const handleInputChange = (e) => {
    let {id, value} = e.target
    setUser(prev => ({...prev, [id]: value}))
    console.log(user)
  }

  let [errorMessage, setErrorMessage] = useState("empty message")
  let [errorStatus, setErrorStatus] = useState(false)

  const handleSubmit = (endpoint, redirectionUrl, method) => {

    let axiosRequest
    switch(method) {
      case "get":
        axiosRequest = axios.get
        break
      case "post":
        axiosRequest = axios.post
        break
    }

    
    axiosRequest(`http://192.168.0.13/shopiffy/server/endpoints/user/${endpoint}.php`, user, {
      withCredentials: true,
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(response => {
      console.log(response.data)
      
      if(response.data.status === "error") {
        setErrorMessage(response.data.message)
        setErrorStatus(true)
      }
      else {
        navigate(redirectionUrl)
        setSession({
          username: response.data.username, 
          email: response.data.email})
      }
    })
    .catch(error => {
      console.log(error)
    })

  }

  const updateUser = (userData, setPopUpStatus, setPopUpOption, setUserData) => {
    axios
    .put("http://192.168.0.13/shopiffy/server/endpoints/user/user.php", userData, {
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
        setPopUpStatus(false)
        setErrorStatus(false)
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

  const handleDeleteAccount = () => {
    axios
    .delete("http://192.168.0.13/shopiffy/server/endpoints/user/user.php", {
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

  const handleLogOut = (e) => {
    e.preventDefault()

    axios
    .delete("http://192.168.0.13/shopiffy/server/endpoints/user/logout.php", {
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

  return {handleInputChange,  handleSubmit, handleDeleteAccount, handleLogOut, updateUser, setErrorMessage, setErrorStatus,
  errorMessage, errorStatus}

}