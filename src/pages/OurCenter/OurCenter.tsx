import './OurCenter.css'
import zina from '../../assets/images/New folder/DSC04487.png'
import abdullah from '../../assets/images/New folder/DSC04484.png'
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
const OurCenter = () => {
    const { language } = useLanguage();
    const translations = language === "en" ? en : ar;
  return (
    <div className='ourCenter'>
        <h1 className='ourCenter_heading'>{translations.OurStaff}</h1>
        <div className="Doctor_image_con">
            <div className="img_Card">
                <img src={abdullah} alt={translations.abdullah} />
                <h1 className='servie_name_card'> {translations.abdullah} </h1>
                <div className="overlay_card_service"></div>
            </div>
            <div className="img_Card">
                <img src={zina} alt={translations.zina} />
                <h1 className='servie_name_card'> {translations.zina} </h1>
                <div className="overlay_card_service"></div>
            </div>
        </div>
    </div>
  )
}

export default OurCenter