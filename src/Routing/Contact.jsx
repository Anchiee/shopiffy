import Input from "../Components/Input/Input"
import Footer from "../Components/Footer/Footer"
import SolidButton from "../Components/Buttons/SolidButton/SolidButton"
import AnimatedPage from "../Components/AnimatedPage/AnimatedPage"



function Contact()
{
  return(
    <>
      <AnimatedPage>
        <section className="h-full flex justify-center items-center flex-row">
          <div className="bg-softBrown-200 w-1/3 py-16 px-24 my-10 rounded-md">
            <label htmlFor="input-title" className="mt-6 block">Title</label>
            <Input InputType="text" InputPlaceholder="Enter the title" InputId="input-title"/>

            <label htmlFor="input-email" className="mt-6 block">Email</label>
            <Input InputType="email" InputPlaceholder="Enter the email" InputId="input-email"/>

            <label htmlFor="message-id" className="mt-6 block">Message</label>
            <textarea placeholder="Message detail here" id="message-id" className="resize-none font-Manrope outline-none 
            bg-transparent-100 border-2 border-solid border-softBlack rounded-md text-xl mb-6 size-full box-border placeholder:text-softBlack">
            </textarea>

            <SolidButton ButtonType="submit" ButtonText="Send"/>
          </div>
        </section>

        <Footer/>
      </AnimatedPage>
    </>
    
    
  )
}

export default Contact