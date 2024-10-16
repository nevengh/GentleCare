import './ContactUs.css'
import { useLanguage } from '../../LanguageContext'
import en from '../../locales/en'
import ar from '../../locales/ar'
const ContactUs = () => {
    const { language } = useLanguage();
    const translations = language === "en" ? en : ar;
  return (
    <div className='ContactUs'>
        <h1 className='contact_title'>{translations.ContactUs}</h1>
         <div className="hero-content">
         <div className="left-section">
          <h1>
          {translations.slaes1}<span className='sales'>{translations.sales} </span>{translations.sales2}
          </h1>
        </div>
        <div className="right-section">
            
          <form className="travel-form">
          <h2 className='book_title'>{translations.evaluation}</h2>
            <div className="form-group">
              <label htmlFor="name">{translations.Name}:</label>
              <input type="text" placeholder={translations.EnterName} id="name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">{translations.Email}:</label>
              <input type="email" placeholder={translations.enterEmal} id="email" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">{translations.PhoneNumber} :</label>
              <input type="text" placeholder={translations.enterPhone} id="phone" />
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
                <option value="5PM">6:00 PM</option>
                <option value="5PM">7:00 PM</option>
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
        
      </div>
    </div>
  )
}

export default ContactUs