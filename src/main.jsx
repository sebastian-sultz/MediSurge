import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css';
import './index.css'

import 'react-toastify/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Error from './Components/Error.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import reportWebVitals from './reportWebVitals';
import AboutUs from './Components/AboutUs.jsx'
import ContactUs from './Components/Contact.jsx';
import TermsAndConditions from './Components/TermsAndConditions.jsx';
import RefundPolicy from './Components/RefundPolicy.jsx';
import PrivacyPolicy from './Components/PrivacyPolicy.jsx';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children:
      [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/home",
          element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/signup",
          element: <Signup/>
        },
        {
          path: "/aboutUs",
          element: <AboutUs/>
        },{
          path: "/contact",
          element: <ContactUs/>
        },
        {
          path: "/terms",
          element: <TermsAndConditions/>
        },
        {
          path: "/refunds",
          element: <RefundPolicy/>
        },
        {
          path: "/privacy",
          element: <PrivacyPolicy/>
        }
      ]
    
  },
  
]);



createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)





reportWebVitals();
