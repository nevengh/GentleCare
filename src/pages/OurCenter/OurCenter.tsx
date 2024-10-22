import './OurCenter.css'
import zina from '../../assets/images/New folder/DSC04487.png'
import abdullah from '../../assets/images/New folder/DSC04484.png'
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import center1 from '../../assets/images/New folder/DSC04465.jpg';
import center2 from '../../assets/images/New folder/DSC04468.jpg';
import center3 from '../../assets/images/New folder/DSC04470.jpg';
// import SeoComponnent from '../../components/SeoComponnent/SeoComponnent';
const OurCenter = () => {
    const { language } = useLanguage();
    const translations = language === "en" ? en : ar;
    const center = [
        { id: 1, img_url: center1, img_alt: "Center Photo" },
        { id: 2, img_url: center2, img_alt: "Center Photo" },
        { id: 3, img_url: center3, img_alt: "Center Photo" },
      ];
  return (
    <div className='ourCenter'>

        <h1 className='ourCenter_heading'>{translations.OurStaff}</h1>
        <div className="Doctor_image_con">
            
            <div className="img_Card">
                <img src={zina} alt={translations.zina} />
                <h1 className='servie_name_card'> {translations.zina} </h1>
                <div className="overlay_card_service"></div>
            </div>
            <div className="img_Card">
                <img src={abdullah} alt={translations.abdullah} />
                <h1 className='servie_name_card'> {translations.abdullah} </h1>
                <div className="overlay_card_service"></div>
            </div>
        </div>
        <div className="OurServices_Container">
          <Carousel>
            {center.map((service, index) => (
              <Carousel.Item key={index}>
                <img className='img_center' src={service.img_url} alt={service.img_alt} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
    </div>
  )
}

export default OurCenter