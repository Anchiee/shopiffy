import Input from "../Components/Input/Input"
import Footer from "../Components/Footer/Footer"
import SolidButton from "../Components/Buttons/SolidButton/SolidButton"
import AnimatedPage from "../Components/AnimatedPage/AnimatedPage"



function Contact()
{
  return(
    <>
      <AnimatedPage>
        <section className="h-full flex justify-center items-center flex-row my-6.9">
          <div className="inline bg-slate-200 text-base rounded-md py-8 px-10 mt-2 w-1/3 shadow-gray-300-500/50 shadow-lg">
            <label htmlFor="input-title" className="mt-6 block">Title</label>
            <Input InputType="text" InputPlaceholder="Enter the title" InputId="input-title"/>

            <label htmlFor="input-email" className="mt-6 block">Email</label>
            <Input InputType="email" InputPlaceholder="Enter the email" InputId="input-email"/>

            <label htmlFor="message-id" className="mt-6 block">Message</label>
            <textarea placeholder="Message detail here" id="message-id" className="block resize-none my-3 w-full rounded-md bg-transparent-100 px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
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