import ThinButton from "../Components/Buttons/ThinButton/ThinButton.jsx"
import Footer from "../Components/Footer/Footer.jsx"
import AnimatedPage from "../Components/AnimatedPage/AnimatedPage.jsx"

function Home()
{

  return(
    <>
      <AnimatedPage>
        <section id="about">

        <div className="w-4/5 my-0 mx-auto text-slate-400">
          <div className="flex items-center my-40">
                <section className="text-left inline">
                  <h2 className="text-4xl tracking-widest w-3/4 mb-8">Shop whenever you want, wherever you want</h2>
                  <ThinButton ButtonType="button" ButtonClick={() => document.getElementById("about").scrollIntoView({behavior: "smooth"})} ButtonText="Learn more"/>
                </section>

                <section className="text-right inline">
                  <h2 className="text-4xl m-0">Join to over thousands of people satisfied</h2>
                  <p className="tracking-widest text-lg block my-6">What are you waiting for? Sign now!</p>
                </section>
          </div>  

              <section className="my-40 mx-auto">
                <h3 className="text-center text-2xl pb-4 border-b-2 border-gray-700">About us</h3>

                {[
                  { 
                    question: "Who are we?", 
                    answer: "We are a passionate team dedicated to providing high-quality products and exceptional customer service. Our mission is to create a shopping experience that’s easy, enjoyable, and trustworthy. Whether you’re here for essentials or unique finds, we’re here to serve you with care and commitment."
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit and debit cards, PayPal, and other secure payment options listed at checkout."
                  },
                  {
                    question: "Can I return or exchange an item?",
                    answer: "Yes, you can return or exchange items within 30 days of purchase as long as they are unused and in their original condition. Check our Returns Policy for more details."
                  },
                  {
                    question: "Do you ship internationally?",
                    answer: "Yes, we offer international shipping to many countries. Additional shipping charges and delivery times may apply."
                  }
                ].map((faq, index) => (
                  
                  <div key={index}>
                  <h4 className="font-bold mt-10 text-xl">{faq.question}</h4>
                  <p className="my-5 text-lg">
                    {faq.answer}
                  </p>
                </div>

                ))}

              </section>
          </div>

        </section>
        <Footer/>
      </AnimatedPage>
      
    </>
  )
}

export default Home