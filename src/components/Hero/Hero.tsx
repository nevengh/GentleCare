import Form from '../Form/Form'
import'./Hero.css'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="Hero_Container">
        <div className="HeadLine">
            <h1 className='headlineTitle'>"World-Class Dental & Skin Care in Sharjah – Book a Free
            Consultation with UAE’s Top Experts!“</h1>
            <h2 className="subHead">"Providing You with the Latest Technologies and
            Renowned Specialists in Dentistry and Dermatology."</h2>
        </div>
        <div className="Form_Hero">
            <h1>Book An Appointment</h1>
            <Form/>
        </div>
        </div>
    </div>
  )
}

export default Hero