import './About.css';
import { useLanguage } from '../../LanguageContext';
import en from '../../locales/en';
import ar from '../../locales/ar';


const About = () => {


  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;

  return (
    <div className='About'>

      <h1 className='about_head'>{translations.About}</h1>
      <div className="About_container">
        <div className="about_left_section">
          <p className="about_text">{translations.aboutText}</p>
        </div>


      </div>
    </div>
  );
}

export default About;
