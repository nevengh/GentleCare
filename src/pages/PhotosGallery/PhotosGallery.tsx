import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PhotosGallery.css";
import beforeImage from "../../assets/images/befor.jpeg";
import afterImage from "../../assets/images/afte.jpeg";
import afterImage1 from "../../assets/images/b8a573b3-c588-4b06-9bf8-304cc45de147.jpeg";
import beforeImage1 from "../../assets/images/f50d8848-8106-4e95-be91-f1b21d20d2f6.jpeg";

// Define the types for the arrow props
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const PhotosGallery: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // استدعاء الأسهم المخصصة
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="photos-gallery">
      <h1 className="gallery_head">Before & After Comparison</h1>
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
