import './OurCenter.css'
import zina from '../../assets/images/New folder/DSC04487_11zon.webp'
import abdullah from '../../assets/images/New folder/DSC04484_11zon.webp'
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import center1 from '../../assets/images/ClinicImages/010_7_11zon.webp';
import center2 from '../../assets/images/ClinicImages/011_6_11zon.webp';
import center3 from '../../assets/images/ClinicImages/012_5_11zon.webp';
import center4 from '../../assets/images/ClinicImages/013_4_11zon.webp';
import center5 from '../../assets/images/ClinicImages/014_3_11zon.webp';
import center6 from '../../assets/images/ClinicImages/015_2_11zon.webp';
import center7 from '../../assets/images/ClinicImages/016_1_11zon.webp';
import center8 from '../../assets/images/ClinicImages/01_16_11zon.webp';
import center9 from '../../assets/images/ClinicImages/02_15_11zon.webp';
import center10 from '../../assets/images/ClinicImages/03_14_11zon.webp';
import center11 from '../../assets/images/ClinicImages/04_13_11zon.webp';
import center12 from '../../assets/images/ClinicImages/05_12_11zon.webp';
import center13 from '../../assets/images/ClinicImages/06_11_11zon.webp';
import center14 from '../../assets/images/ClinicImages/07_10_11zon.webp';
import center15 from '../../assets/images/ClinicImages/08_9_11zon.webp';
import center16 from '../../assets/images/ClinicImages/09_8_11zon.webp';
const OurCenter = () => {
    const { language } = useLanguage();
    const translations = language === "en" ? en : ar;
    const center = [
        { id: 1, img_url: center1, img_alt: "Center Photo" },
        { id: 2, img_url: center2, img_alt: "Center Photo" },
        { id: 3, img_url: center3, img_alt: "Center Photo" },
        { id: 4, img_url: center4, img_alt: "Center Photo" },
        { id: 5, img_url: center5, img_alt: "Center Photo" },
        { id: 6, img_url: center6, img_alt: "Center Photo" },
        { id: 7, img_url: center7, img_alt: "Center Photo" },
        { id: 8, img_url: center8, img_alt: "Center Photo" },
        { id: 9, img_url: center9, img_alt: "Center Photo" },
        { id: 10, img_url: center10, img_alt: "Center Photo" },
        { id: 11, img_url: center11, img_alt: "Center Photo" },
        { id: 12, img_url: center12, img_alt: "Center Photo" },
        { id: 13, img_url: center13, img_alt: "Center Photo" },
        { id: 14, img_url: center14, img_alt: "Center Photo" },
        { id: 15, img_url: center15, img_alt: "Center Photo" },
        { id: 16, img_url: center16, img_alt: "Center Photo" },
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