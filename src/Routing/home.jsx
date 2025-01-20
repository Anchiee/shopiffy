import Card from "../Components/Card/Card.jsx"
import ThinButton from "../Components/Buttons/ThinButton/ThinButton.jsx"
import Footer from "../Components/Footer/Footer.jsx"
import { useContext } from "react"
import { SessionContext } from "../Contexts/SessionContext.jsx"
import { useNavigate } from "react-router-dom"
import AnimatedPage from "../Components/AnimatedPage/AnimatedPage.jsx"

function Home()
{

  const {userSession} = useContext(SessionContext)
  const navigate = useNavigate()
  console.log(userSession)

  const handleClick = () => {
    if(userSession.username) {
      navigate("/menu")
    } 
    else {
      navigate("/login")
    }
  }

  return(
    <>
      <AnimatedPage>
        <section className="w-4/5 my-0 mx-auto">

        <div className="flex items-center my-40">
              <section className="text-left inline">
                <h2 className="text-4xl tracking-widest w-3/4 mb-8">Shop whenever you want, wherever you want</h2>
                <ThinButton ButtonType="button" ButtonClick={handleClick} ButtonText="Learn more"/>
              </section>

              <section className="text-right inline">
                <h2 className="text-4xl m-0">Join to over thousands of people satisfied</h2>
                <p className="tracking-widest text-lg block my-6">What are you waiting for? Sign now!</p>
              </section>
        </div>  

            <section className="my-40 mx-auto">
              <h3 className="text-center text-2xl pb-4 border-b-2 border-softBlack">About us</h3>
              <Card HeaderText="Who are we?" ParagraphText=" We are a passionate team dedicated to providing high-quality products and exceptional customer service. 
                                            Our mission is to create a shopping experience that’s easy, enjoyable, and trustworthy. 
                                            Whether you’re here for essentials or unique finds, 
                                            we’re here to serve you with care and commitment."/>

              <Card HeaderText="What payment methods do you accept?" ParagraphText=" We accept all major credit and debit cards, 
                                                                    PayPal, and other secure payment options listed at checkout."/>
              <Card HeaderText="Can I return or exchange an item?" ParagraphText=" Yes, you can return or exchange items within 30 days of purchase 
                                                                                  as long as they are unused and in their original condition. 
                                                                                  Check our Returns Policy for more details."/>
              <Card HeaderText="Do you ship internationally?" ParagraphText="Yes, we offer international shipping to many countries. 
                                                                              Additional shipping charges and delivery times may apply."/>
                          
              
            </section>

        </section>
        <Footer/>
      </AnimatedPage>
      
    </>
  )
}

export default Home