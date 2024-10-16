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

const OurServices = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;

  const services = [
    {
      title: "Hollywood smile",
      description: "The safe and effective teeth whitening procedures include using whitening products approved by the health authority and strictly following their guidelines.",
      img_alt: "Hollywood smile",
      img_url: tooth
    },
    {
      title: "Digital Smile Design",
      description: "Our advanced digital smile design technology lets you virtually preview different cosmetic and restorative dental treatments, such as veneers or crowns, tailored to your unique needs",
      img_alt: "Digital Smile Design",
      img_url: digital
    },
    {
      title: "Botox",
      description: "Dermal fillers work by adding volume to the skin and smoothing out wrinkles and fine lines.",
      img_alt: "Botox",
      img_url: botox
    },
    {
      title: "Filler",
      description: "Lip injections can help add volume and provide precise or dramatic correction.",
      img_alt: "Filler",
      img_url: botox
    },
    {
      title: "Gummy Smile Correction",
      description: "Using advanced, minimally invasive methods like laser therapy, we can precisely sculpt and adjust the gum tissue, creating a more balanced and aesthetically pleasing frame around your teeth.",
      img_alt: "Gummy Smile Correction",
      img_url: gummy
    },
    {
      title: "Laser Hair Removal",
      description: "At our center, we offer state-of-the-art laser hair removal that can be used on its own or combined with other skin treatments to help you achieve flawless, radiant skin.",
      img_alt: "Laser Hair Removal",
      img_url: laser
    },
    {
      title: "Veneers",
      description: "Widely regarded as one of the most sophisticated and visually stunning cosmetic dentistry options, veneers offer a transformative solution.",
      img_alt: "Veneers",
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
