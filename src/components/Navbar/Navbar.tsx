import "./Navbar.css";
import logo from "../../assets/images/logo_1_-removebg-preview.png";
import { useEffect, useState } from "react";
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";

const Navbar = () => {
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
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hero">
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <a href="#hero">{translations.Home}</a>
          <a href="#about">{translations.About}</a>
          <a href="#OurServices">{translations.Services}</a>
          <a href="#gallery">{translations.Gallery}</a>
          <a href="#contact">{translations.ContactUs} </a>
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
          <a href="#contact" className="bookNow">{translations.bookNow}</a>
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
          <form className="travel-form">
            <div className="form-group">
              <label htmlFor="name">{translations.Name}:</label>
              <input
                type="text"
                placeholder={translations.EnterName}
                id="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{translations.Email}:</label>
              <input
                type="email"
                placeholder={translations.enterEmal}
                id="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">{translations.PhoneNumber} :</label>
              <input
                type="text"
                placeholder={translations.enterPhone}
                id="phone"
              />
            </div>

            <div className="form-group">
              <label> {translations.PreferredAppointmentTime}:</label>
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
              </select>
            </div>
            <div className="form-group">
              <label> {translations.ServicesChoose} :</label>
              <select name="preferredTime" id="preferredTime">
                <option value="skincare">
                  {translations.Dentaltreatments}
                </option>
                <option value="DentalCare">
                  {translations.Hollywoodsmile}
                </option>
                <option value="AdvancedDermatology">
                  {translations.DigitalSmileDesign}
                </option>
                <option value="">{translations.Filler}</option>
                <option value="">{translations.Botox}</option>
                <option value="GummySmileCorrection">{translations.GummySmileCorrection}</option>
              </select>
            </div>

            <button className="start-search-btn" type="submit">
              {translations.RequestConsultation}
            </button>
          </form>
        </div>
        <div className="left-section">
          <h1>
            {translations.heroHead}
          </h1>
          <h4>
            {translations.heroSubhead}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
