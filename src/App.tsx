
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import { LanguageProvider } from './LanguageContext'
import OurServices from './pages/OurServices/OurServices'
import PhotosGallery from './pages/PhotosGallery/PhotosGallery'

const App = () => {
  return (
    <div className='App'>
      <LanguageProvider>
        <Header/>
        <div id="hero">
          <Hero/>
        </div>
        <div id="OurServices">
          <OurServices/>
        </div>
        <div id="gallery">
          <PhotosGallery/>
        </div>
      </LanguageProvider>
    </div>
  )
}

export default App