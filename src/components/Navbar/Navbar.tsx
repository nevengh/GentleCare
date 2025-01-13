import "./Navbar.css";
import logo from "../../assets/images/logo_1_-removebg-preview.png";
import { useEffect, useState } from "react";
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
import emailjs from "emailjs-com"; // Importing EmailJS library
import { pushToDataLayer } from "../../App";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const translations = language === "en" ? en : ar;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as "en" | "ar");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to send email using EmailJS
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // تتبع الحدث عند الضغط على زر "Request a Free Consultation"
    pushToDataLayer("buttonClick", { button: "RequestConsultation" });
    emailjs
      .sendForm('service_edcj625', 'template_ueega1v', e.currentTarget, 'M8beM_V43IohrRhu5')
      .then((result) => {
          console.log("Email sent successfully!", result);
          // alert("تم إرسال النموذج بنجاح");
          navigate('/thankyoupage'); // Navigate to Thank You Page
      })
      .catch((error) => {
          console.log("Failed to send email:", error);
          alert("حدث خطأ أثناء إرسال النموذج");
      });
    e.currentTarget.reset();
  };
  

  return (
    <div className="hero">
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <a href="#hero" onClick={closeMenu}>{translations.Home}</a>
          <a href="#about" onClick={closeMenu}>{translations.About}</a>
          <a href="#OurServices" onClick={closeMenu}>{translations.Services}</a>
          <a href="#gallery" onClick={closeMenu}>{translations.Gallery}</a>
          <a href="#contact" onClick={closeMenu}>{translations.ContactUs}</a>
        </nav>

        <div className="social-icons">
          <select
            className="languageSelect"
            onChange={handleLanguageChange}
            value={language}
          >
            <option value="en">{translations.English}</option>
            <option value="ar">{translations.Arabic}</option>
          </select>
          <a href="#contact" className="bookNow gtm-book-now"id="#bookNow" >{translations.bookNow}</a>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="close_icon">&times;</span>
          ) : (
            <span className="burger_icon">&#9776;</span>
          )}
        </div>
      </header>

      <div className="hero-content">
        <div className="right-section">
          <form className="travel-form" onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">{translations.Name}:</label>
              <input type="text" placeholder={translations.EnterName} name="user_name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">{translations.Email}:</label>
              <input type="email" placeholder={translations.enterEmal} name="user_email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">{translations.PhoneNumber} :</label>
              <input type="text" placeholder={translations.enterPhone} name="user_phone" required />
            </div>

            <div className="form-group">
              <label>{translations.PreferredAppointmentTime}:</label>
              <select name="preferredTime" id="preferredTime">
              <option value="8AM">8:00 AM</option>
                <option value="9AM">9:00 AM</option>
                <option value="10AM">10:00 AM</option>
                <option value="11AM">11:00 AM</option>
                <option value="12PM">12:00 PM</option>
                <option value="1PM">1:00 PM</option>
                <option value="2PM">2:00 PM</option>
                <option value="3PM">3:00 PM</option>
                <option value="4PM">4:00 PM</option>
                <option value="5PM">5:00 PM</option>
                <option value="5PM">6:00 PM</option>
                <option value="5PM">7:00 PM</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="form-group">
              <label>{translations.ServicesChoose} :</label>
              <select name="service" id="service">
              <option value="Dental treatments">
                  {translations.Dentaltreatments}
                </option>
                <option value="Hollywood Smile">
                  {translations.Hollywoodsmile}
                </option>
                <option value="Digital Smile Design">
                  {translations.DigitalSmileDesign}
                </option>
                <option value="Filler">{translations.Filler}</option>
                <option value="Veneer">{translations.Veneer}</option>
                <option value="Orthodontics">{translations.Braces}</option>
                
                <option value="Gummy Smile Correction">{translations.GummySmileCorrection}</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <button className="start-search-btn gtm-request-consultation"id="#RequestConsultation" type="submit">
              {translations.RequestConsultation}
            </button>
          </form>
        </div>
        <div className="left-section">
          <h1>{translations.heroHead}</h1>
          <h1 className="highlight-title">
            {translations.slaes1}
            <span className="sales-highlight"> {translations.sales} </span>
            {translations.sales2}
          </h1>
          <div className="left-section">
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
