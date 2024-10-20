
import './App.css'
import BackToTop from './components/BackToTop/BackToTop'
import Footer from './components/Footer/Footer'
// import Header from './components/Header/Header'
// import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import { LanguageProvider } from './LanguageContext'
import About from './pages/About/About'
import ContactUs from './pages/ContactUs/ContactUs'
import OurCenter from './pages/OurCenter/OurCenter'
import OurServices from './pages/OurServices/OurServices'
import PhotosGallery from './pages/PhotosGallery/PhotosGallery'

const App = () => {
  return (
    <div className='App'>
      <LanguageProvider>
        
        <div id="hero">
          <Navbar/>
        </div>
        <div id="about">
          <About/>
        </div>
        <div id="ourCenter">
          <OurCenter/>
        </div>
        <div id="OurServices">
          <OurServices/>
        </div>
        <div id="gallery">
          <PhotosGallery/>
        </div>
        <div id="contact">
          <ContactUs/>
        </div>
        <Footer/>
        <BackToTop />
      </LanguageProvider>
    </div>
  )
}

export default App