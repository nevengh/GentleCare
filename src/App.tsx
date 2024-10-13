
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import { LanguageProvider } from './LanguageContext'
const App = () => {
  return (
    <div className='App'>
      <LanguageProvider>
        <Header/>
        <div id="hero">
          <Hero/>
        </div>
      </LanguageProvider>
    </div>
  )
}

export default App