import React from "react";
import "./ServicesCard.css";

interface ServicesCardProps {
  title: string;
  description: string;
  img_url: string;
  img_alt: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  description,
  img_alt,
  img_url,
}) => {
  return (
    <div className="ServicesCard">
      <div className="title_con">
        <img src={img_url} alt={img_alt} />
        <h1 className="ServiceCard_title">{title}</h1>
      </div>
      <div className="description_Card">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
