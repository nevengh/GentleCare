import './Form.css'
import { useLanguage } from '../../LanguageContext'
import en from '../../locales/en'
import ar from '../../locales/ar'

const Form = () => {
    const { language } = useLanguage()
    const translations = language === 'en' ? en : ar

    return (
        <div className='Form'>
            <form action="">
                {/* First row with Name and Email */}
                <div className="first_row">
                    <div className="input-group">
                        <label htmlFor="name"> {translations.Name} </label>
                        <input type="text" id='name' placeholder={translations.Name} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email"> {translations.Email} </label>
                        <input type="email" id='email' placeholder={translations.Email} />
                    </div>
                </div>

                {/* Second row with Phone and Service */}
                <div className="first_row">
                    <div className="input-group">
                        <label htmlFor="phone">{translations.PhoneNumber}</label>
                        <input type="text" id='phone' placeholder={translations.PhoneNumber} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="service">{translations.ServicesChoose}</label>
                        <select name="service" id="service">
                            <option value="Dental">Dental</option>
                            <option value="SkinCare">Skin Care</option>
                        </select>
                    </div>
                </div>

                {/* Preferred Appointment Time as Select */}
                <div className="first_row">
                    <div className="input-group">
                        <label htmlFor="preferredTime">{translations.PreferredAppointmentTime}</label>
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
                </div>

                <button className='submit'>{translations.RequestConsultation}</button>
            </form>
        </div>
    )
}

export default Form
