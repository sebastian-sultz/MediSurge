

import Header from "./Components/Header"
import { Outlet } from 'react-router-dom'
import { useEffect } from "react";
import './App.css';
import { UserProvider } from './UserContext';
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {

 


useEffect(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out-quad',
    once: false, 
    mirror: true, 
    offset: 120, 
    anchorPlacement: 'top-center', 
  });
}, []);

  return (


   
      <div className="App">
        <UserProvider>
<ScrollToTop/>
          <Header />
            <Outlet />
          <Footer/>
        </UserProvider>
   

    </div>
  )
}

export default App
