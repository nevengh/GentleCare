import './About.css'
import { useLanguage } from '../../LanguageContext'
import en from '../../locales/en'
import ar from '../../locales/ar'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import center1 from '../../assets/images/New folder/DSC04465.jpg'
import center2 from '../../assets/images/New folder/DSC04468.jpg'
import center3 from '../../assets/images/New folder/DSC04470.jpg'
import center4 from '../../assets/images/New folder/DSC04463.jpg'
import center5 from '../../assets/images/New folder/DSC04458.jpg'
import center6 from '../../assets/images/New folder/DSC04450.jpg'
import center7 from '../../assets/images/New folder/DSC04447.jpg'
import center8 from '../../assets/images/New folder/DSC04439.jpg'
import center9 from '../../assets/images/New folder/DSC04438.jpg'
import center10 from '../../assets/images/New folder/DSC04435.jpg'
import center11 from '../../assets/images/New folder/DSC04428.jpg'
import center12 from '../../assets/images/New folder/DSC04425.jpg'
const About = () => {
  const center = [
    {
      id:1,
      img_url:center1,
      img_alt:"Center  Photo"
    },
    {
      id:2,
      img_url:center2,
      img_alt:"Center Photo"
    },
    {
      id:3,
      img_url:center3,
      img_alt:"Center Photo"
    },
    {
      id:2,
      img_url:center2,
      img_alt:"Center Photo"
    },
    {
      id:4,
      img_url:center4,
      img_alt:"Center Photo"
    },
    {
      id:5,
      img_url:center5,
      img_alt:"Center Photo"
    },
    {
      id:6,
      img_url:center6,
      img_alt:"Center Photo"
    },
    {
      id:7,
      img_url:center7,
      img_alt:"Center Photo"
    },
    {
      id:8,
      img_url:center8,
      img_alt:"Center Photo"
    },
    {
      id:9,
      img_url:center9,
      img_alt:"Center Photo"
    },
    {
      id:10,
      img_url:center10,
      img_alt:"Center Photo"
    },
    {
      id:11,
      img_url:center11,
      img_alt:"Center Photo"
    },
    {
      id:12,
      img_url:center12,
      img_alt:"Center Photo"
    },
  ]
    const { language } = useLanguage();
    const translations = language === "en" ? en : ar;
  return (
    <div className='About'>
        <h1 className='about_head'>{translations.About}</h1>
        <div className="About_container">
        <div className="about_left_section">
        <p className="about_text">
            {translations.aboutText}
        </p>
        </div>

        <div className="OurServices_Container">
        <Carousel>
          {center.map((service, index) => (
            <Carousel.Item key={index}>
              <img
                className='img_center'
                src={service.img_url}
                alt={service.img_alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
        </div>
    </div>
  )
}

export default About