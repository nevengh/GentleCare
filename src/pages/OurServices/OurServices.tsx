import ServicesCard from "../../components/ServicesCard/ServicesCard";
import "./OurServices.css";
import tooth from "../../assets/images/white-tooth-healthcare-dental.svg";
const OurServices = () => {
  return (
    <div className="OurServices">
        <h1 className="OurServices_Heading">Our Services</h1>
      <div className="OurServices_Container">
        <ServicesCard
          title="Hollywood smile "
          description="The safe and effective teeth whitening procedures include using whitening products approved by the health authority and strictly following their guidelines. Additionally, it is necessary to adhere to the specified doses and recommended duration under medical supervision to avoid any gum irritation or damage to the tooth enamel layers.
 Here, you are in safe hands!
"
          img_alt="toothCrown"
          img_url={tooth}
        />
        <ServicesCard
          title="Botox"
          description=" Dermal fillers work by adding volume to the skin and smoothing out wrinkles and fine lines. We have a specialized, trained, and experienced team to assist you in determining the best treatment options that suit your individual needs and goals. They may also offer various promotions and loyalty programs and have a range of products from different brands, we provide you with a wider choice and a tailored treatment to meet your needs."
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
