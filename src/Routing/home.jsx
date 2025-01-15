import Card from "../Components/Card/Card.jsx"
import ThinButton from "../Components/Buttons/ThinButton/ThinButton.jsx"
import Footer from "../Components/Footer/Footer.jsx"
import "../style/Home.css"

function Home()
{
  return(
    <>
      <main>

      <div className="hero-container">
            <section className="learn-more-section">
              <h2>Shop whenever you want, wherever you want</h2>
              <ThinButton ButtonType="button" ButtonText="Learn more"/>
            </section>

            <section className="info-section">
              <h2>Join to over thousands of people satisfied</h2>
              <p>What are you waiting for? Sign now!</p>
            </section>
      </div>  

          <section className="about-section">
            <h3>About us</h3>
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

      </main>
      <Footer/>
      
    </>
  )
}

export default Home