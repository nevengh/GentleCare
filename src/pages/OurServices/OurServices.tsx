import ServicesCard from "../../components/ServicesCard/ServicesCard";
import "./OurServices.css";
import tooth from "../../assets/images/white-tooth-healthcare-dental.svg";
const OurServices = () => {
  return (
    <div className="OurServices">
        <h1 className="OurServices_Heading">Our Services</h1>
      <div className="OurServices_Container">
        <ServicesCard
          title="Dental Care"
          description="Comprehensive dental solutions using the latest technology – from teeth whitening to advanced restorative procedures."
          img_alt="toothCrown"
          img_url={tooth}
        />
        <ServicesCard
          title="Skin Care"
          description="Rejuvenate your skin with cutting-edge dermatological treatments designed for flawless beauty."
          img_alt="toothCrown"
          img_url={tooth}
        />
        <ServicesCard
          title="Advanced Dermatology"
          description="Expert dermatology care, from acne treatment to anti-aging solutions, ensuring radiant skin for all."
          img_alt="toothCrown"
          img_url={tooth}
        />
      </div>
    </div>
  );
};

export default OurServices;
