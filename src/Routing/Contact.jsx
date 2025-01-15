import Input from "../Components/Input/Input"
import Footer from "../Components/Footer/Footer"
import SolidButton from "../Components/Buttons/SolidButton/SolidButton"
import "../Style/contact.css"


function Contact()
{
  return(

    <>
      <section className="contact-section">
        <div className="contact-container">
          <label htmlFor="input-title">Title</label>
          <Input InputType="text" InputPlaceholder="Enter the title" InputId="input-title"/>

          <label htmlFor="input-email">Email</label>
          <Input InputType="email" InputPlaceholder="Enter the email" InputId="input-email"/>

          <label htmlFor="message-id">Message</label>
          <textarea placeholder="Message detail here" id="message-id">
          </textarea>

          <SolidButton ButtonType="submit" ButtonText="Send"/>
        </div>
      </section>

      <Footer/>
    </>
    
    
  )
}

export default Contact