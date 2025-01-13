import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PhotosGallery.css";
import beforeImage from "../../assets/images/New folder/شفاف1.webp";
import afterImage from "../../assets/images/New folder/شفاف2.webp";
import afterImage1 from "../../assets/images/New folder/ابتسامة1.webp";
import beforeImage1 from "../../assets/images/New folder/ابتسامة2.webp";
import beforeImage2 from "../../assets/images/New folder/تثويم1.webp";
import afterImage2 from "../../assets/images/New folder/تقويم2.webp";
import beforeImage3 from '../../assets/images/New folder/فقد1.webp'
import afterImage3 from '../../assets/images/New folder/فقد2.webp'
import beforeImage4 from '../../assets/images/New folder/لثة_قبل.jpeg'
import afterImage4 from '../../assets/images/New folder/لثة_بعد.webp'
import beforeImage5 from '../../assets/images/New folder/فينير1.webp'
import afterImage5 from '../../assets/images/New folder/فينير2.webp';
import beforeImage6 from '../../assets/images/New folder/تبييض1.webp'
import afterImage6 from '../../assets/images/New folder/تبييض2.webp';
// Define the types for the arrow props
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
import { useLanguage } from '../../LanguageContext'
import en from '../../locales/en'
import ar from '../../locales/ar'

const PhotosGallery: React.FC = () => {
  const { language } = useLanguage()
  const translations = language === 'en' ? en : ar
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // استدعاء الأسهم المخصصة
    prevArrow: <PrevArrow />,
    autoplay: true, // تمكين التمرير التلقائي
  autoplaySpeed: 2000,
  };

  return (
    <div className="photos-gallery">
      <h1 className="gallery_head">{translations.beforeAfter}</h1>
      <Slider {...settings}>
        {/* السلايد الأول */}
        <div className="slider-item">
          <div className="before-image">
            <img src={beforeImage} alt="Before" />
          </div>
          <div className="after-image">
            <img src={afterImage} alt="After" />
          </div>
        </div>
        {/* السلايد الثاني */}
        <div className="slider-item">
          <div className="before-image">
            <img src={beforeImage1} alt="Before" />
          </div>
          <div className="after-image">
            <img src={afterImage1} alt="After" />
          </div>
        </div>
        <div className="slider-item">
          <div className="before-image">
            <img src={beforeImage2} alt="Before" />
          </div>
          <div className="after-image">
            <img src={afterImage2} alt="After" />
          </div>
        </div>
        <div className="slider-item">
          <div className="before-image">
            <img src={beforeImage3} alt="Before" />
          </div>
          <div className="after-image">
            <img src={afterImage3} alt="After" />
          </div>
        </div>
        <div className="slider-item">
          <div className="before-image">
            <img src={beforeImage4} alt="Before" />
          </div>
          <div className="after-image">
            <img src={afterImage4} alt="After" />
          </div>
        </div>
        <div className="slider-item">
          <div className="before-image">
            <img src={beforeImage5} alt="Before" />
          </div>
          <div className="after-image">
            <img src={afterImage5} alt="After" />
          </div>
        </div>
        <div className="slider-item">
          <div className="before-image">
            <img src={beforeImage6} alt="Before" />
          </div>
          <div className="after-image">
            <img src={afterImage6} alt="After" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

// Define the NextArrow component with type annotations
const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, backgroundColor: "red", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

// Define the PrevArrow component with type annotations
const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, backgroundColor: "red", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

export default PhotosGallery;
