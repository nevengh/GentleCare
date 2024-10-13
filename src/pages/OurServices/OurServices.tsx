import ServicesCard from "../../components/ServicesCard/ServicesCard";
import "./OurServices.css";
import tooth from "../../assets/images/white-tooth-healthcare-dental.svg";
const OurServices = () => {
  return (
    <div className="OurServices">
        <h1 className="OurServices_Heading">Our Services</h1>
      <div className="OurServices_Container">
        <ServicesCard
          title="Cown Tooth"
          description="jqjldjlsdlqhjkdshqsdadsdladlkjskjdajkhdkshqdhjhsjkjhdk"
          img_alt="toothCrown"
          img_url={tooth}
        />
        <ServicesCard
          title="Cown Tooth"
          description="jqjldjlsdlqhjkdshqsdadsdladlkjskjdajkhdkshqdhjhsjkjhdk"
          img_alt="toothCrown"
          img_url={tooth}
        />
        <ServicesCard
          title="Cown Tooth"
          description="jqjldjlsdlqhjkdshqsdadsdladlkjskjdajkhdkshqdhjhsjkjhdk"
          img_alt="toothCrown"
          img_url={tooth}
        />
        <ServicesCard
          title="Cown Tooth"
          description="jqjldjlsdlqhjkdshqsdadsdladlkjskjdajkhdkshqdhjhsjkjhdk"
          img_alt="toothCrown"
          img_url={tooth}
        />
      </div>
    </div>
  );
};

export default OurServices;
