import "./ContactUs.css";
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
import emailjs from "emailjs-com"; // Importing EmailJS library
import { pushToDataLayer } from "../../App";
import { useNavigate } from "react-router-dom";
const ContactUs = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;

  // Function to send email using EmailJS
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // تتبع الحدث عند الضغط على زر "Request a Free Consultation"
    pushToDataLayer("buttonClick", { button: "RequestConsultation" });
    emailjs
      .sendForm(
        "service_edcj625",
        "template_ueega1v",
        e.currentTarget,
        "M8beM_V43IohrRhu5"
      )
      .then((result) => {
        console.log("Email sent successfully!", result);
        // alert("تم إرسال النموذج بنجاح");
        navigate("/thankyoupage"); // Navigate to Thank You Page
      })
      .catch((error) => {
        console.log("Failed to send email:", error);
        alert("حدث خطأ أثناء إرسال النموذج");
      });
    e.currentTarget.reset();
  };

  return (
    <div className="ContactUs">
      <h1 className="contact_title">{translations.ContactUs}</h1>
      <div className="hero-content">
        <div className="left-section">
          <h1 className="highlight-title">
            {translations.slaes1}
            <span className="sales-highlight"> {translations.sales} </span>
            {translations.sales2}
          </h1>
        </div>
        <div className="right-section">
          <form className="travel-form" onSubmit={sendEmail}>
            <h2 className="book_title">{translations.evaluation}</h2>
            <div className="form-group">
              <label htmlFor="name">{translations.Name}:</label>
              <input
                name="user_name"
                type="text"
                placeholder={translations.EnterName}
                id="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{translations.Email}:</label>
              <input
                name="user_email"
                type="email"
                placeholder={translations.enterEmal}
                id="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">{translations.PhoneNumber} :</label>
              <input
                name="user_phone"
                type="text"
                placeholder={translations.enterPhone}
                id="phone"
                required
              />
            </div>

            <div className="form-group">
              <label> {translations.PreferredAppointmentTime}:</label>
              <select name="preferredTime" id="preferredTime" required>
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
              </select>
            </div>
            <div className="form-group">
              <label> {translations.ServicesChoose} :</label>
              <select name="service" id="service" required>
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
                <option value="Gummy Smile Correction">
                  {translations.GummySmileCorrection}
                </option>
              </select>
            </div>

            <button
              className="start-search-btn gtm-request-consultation"
              id="#RequestConsultation"
              type="submit"
            >
              {translations.RequestConsultation}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
