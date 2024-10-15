import './About.css'
import { useLanguage } from '../../LanguageContext'
import en from '../../locales/en'
import ar from '../../locales/ar'
const About = () => {
    const { language } = useLanguage();
    const translations = language === "en" ? en : ar;
  return (
    <div className='About'>
        <h1>{translations.About}</h1>
        <p className="about_text">
            {translations.aboutText}
        </p>
    </div>
  )
}

export default About