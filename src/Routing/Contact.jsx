import Input from "../Components/Input/Input"
import Footer from "../Components/Footer/Footer"
import SolidButton from "../Components/Buttons/SolidButton/SolidButton"



function Contact()
{
  return(

    <>
      <section className="h-full flex justify-center items-center flex-row my-10">
        <div className="bg-softBrown-200 w-1/3 py-16 px-24">
          <label htmlFor="input-title">Title</label>
          <Input InputType="text" InputPlaceholder="Enter the title" InputId="input-title"/>

          <label htmlFor="input-email">Email</label>
          <Input InputType="email" InputPlaceholder="Enter the email" InputId="input-email"/>

          <label htmlFor="message-id">Message</label>
          <textarea placeholder="Message detail here" id="message-id" className="resize-none font-Manrope outline-none 
          bg-transparent border-2 border-solid border-softBlack rounded-md text-xl mb-6 size-full box-border placeholder: text-softBlack">
          </textarea>

          <SolidButton ButtonType="submit" ButtonText="Send"/>
        </div>
      </section>

      <Footer/>
    </>
    
    
  )
}

export default Contact