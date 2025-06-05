
import Hero from "./Hero"
import AboutUs from "./AboutUs"

import { ToastContainer } from 'react-toastify';
import Testimonials from "./Testimonials"
import NewsletterSignup from "./NewsLetter"
import Team from "./Team"


const Home = () => {

    return (
        <div>
            <div >
                <Hero />
                <AboutUs />
                <Testimonials />
                <Team />
                <NewsletterSignup />
            </div>
            <ToastContainer />
        </div>
    )
}
export default Home

