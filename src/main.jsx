import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { Navbar} from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import About from './Components/Sections/About.jsx'
import Admire from './Components/Admire.jsx'
import Projects from './Components/Projects.jsx'
import Home from './Components/Home.jsx'
import WhatsApp from './Components/Whatsapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar/>
    <Home/>
    <Projects/>
    <Admire/>
    <About/>
    <Footer/>
    <WhatsApp/>
    
  </StrictMode>,
)
