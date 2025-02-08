import Input from "../Components/Input/Input.jsx"
import SolidButton from "../Components/Buttons/SolidButton/SolidButton.jsx"
import { NavLink } from "react-router-dom"
import IconContainer from "../Components/Icon-Container/IconContainer.jsx"
import AnimatedPage from "../Components/AnimatedPage/AnimatedPage.jsx"
import { useUser } from "../Hooks/Auth/useUser.jsx"

function Register()
{


  const {handleSubmit, handleInputChange, errorMessage, errorStatus} = useUser()

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit("register", "/menu", "post")
  }


  return(
    <AnimatedPage>
      <section className="flex justify-center items-center">
        <form onSubmit={onSubmit} method="post" 
        className="inline bg-slate-200 text-xl rounded-md py-5 md:py-8 px-8 md:px-24 mt-5 md:mt-10 shadow-gray-300-500/50 shadow-lg">

          <label htmlFor="username-input" className="font-bold text-base md:text-xl">Username</label>
          <Input 
          InputType="text" 
          InputPlaceholder="Enter your username" 
          InputOnChange={(e) => handleInputChange(e)} 
          InputErrorStatus={errorStatus} 
          InputId="username"/>
          
          <p className={errorStatus ? "mb-5 text-red-400 visible text-xs mx-0 py-0 md:text-lg" : "invisible"}>{errorMessage}</p>
          
          <label htmlFor="password-input" className="font-bold text-base md:text-xl">Password</label>
          <Input 
          InputType="password" 
          InputPlaceholder="Enter your password" 
          InputOnChange={(e) => handleInputChange(e)} 
          InputErrorStatus={errorStatus} 
          InputId="password"/>
          
          <p className={errorStatus ? "mb-5 text-red-400 visible text-xs mx-0 py-0 md:text-lg" : "invisible"}>{errorMessage}</p>

          <label htmlFor="email-input" className="font-bold text-base md::text-xl">Email</label>
          <Input 
          InputType="email" 
          InputPlaceholder="Enter your email" 
          InputOnChange={(e) => handleInputChange(e)} 
          InputErrorStatus={errorStatus} 
          InputId="email"/>
          
          <p className={errorStatus ? "mb-5 text-red-400 visible text-xs mx-0 py-0 md:text-lg" : "invisible"}>{errorMessage}</p>

          <SolidButton ButtonType="submit" ButtonText="Sign-in"/>

          <IconContainer/>

          <p className="text-center text-base md:text-xl">
            Already have an account? 
            <NavLink to="/login" className="font-bold hover:underline"> Log-in</NavLink>
          </p>
        </form>
      </section>
    </AnimatedPage>

  )
  
}

export default Register