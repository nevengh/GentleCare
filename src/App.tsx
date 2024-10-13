
import './App.css'
import Header from './components/Header/Header'
import { LanguageProvider } from './LanguageContext'
const App = () => {
  return (
    <div className='App'>
      <LanguageProvider>
        <Header/>
      </LanguageProvider>
    </div>
  )
}

export default App