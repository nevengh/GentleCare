import { Carousel } from 'react-bootstrap';
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./OurServices.css";
import botox from '../../assets/images/serviceIcon/lip-augmentation_3835042.svg'
import tooth from '../../assets/images/serviceIcon/hollywood.svg';
import digital from '../../assets/images/serviceIcon/Digital.svg'
import gummy from '../../assets/images/serviceIcon/smile_3818319.svg'
import laser from '../../assets/images/serviceIcon/laser.svg'
import veneer from '../../assets/images/serviceIcon/dental-veneer_8808320.svg'
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
// import SeoComponnent from '../../components/SeoComponnent/SeoComponnent';

const OurServices = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;

  const services = [
    {
      title:translations.Hollywoodsmile,
      description: translations.hollywoodDesc,
      img_alt: translations.Hollywoodsmile,
      img_url: tooth
    },
    {
      title: translations.DigitalSmileDesign,
      description: translations.DigitalDesc,
      img_alt: translations.DigitalSmileDesign,
      img_url: digital
    },
    {
      title: translations.Botox,
      description: translations.botoxDesc,
      img_alt: translations.Botox,
      img_url: botox
    },
    {
      title: translations.Filler,
      description: translations.fillerDesc,
      img_alt: translations.Filler,
      img_url: botox
    },
    {
      title: translations.GummySmileCorrection,
      description: translations.gummyDesc,
      img_alt: translations.GummySmileCorrection,
      img_url: gummy
    },
    {
      title: translations.Laser,
      description: translations.LaserDesc,
      img_alt: translations.Laser,
      img_url: laser
    },
    {
      title: translations.Veneer,
      description: translations.VeneerDesc,
      img_alt:translations.Veneer,
      img_url: veneer
    }
  ];

  return (
    <div className="OurServices">
      
      <h1 className="OurServices_Heading">{translations.Services}</h1>
      <div className="OurServices_Container">
        <Carousel>
          {services.map((service, index) => (
            <Carousel.Item key={index}>
              <ServicesCard
                title={service.title}
                description={service.description}
                img_alt={service.img_alt}
                img_url={service.img_url}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OurServices;
