import { Link } from 'react-router-dom'
import './ThankYouPage.css'
import logo from '../../assets/images/logo_1_-removebg-preview.png'
const ThankYouPage = () => {
  return (
    <div className='thankyou-page'>
        <img src={logo} alt="Gentle Care Logo" className="logo" />
        <h1>Thank You!</h1>
        <p>Your request has been successfully submitted. We’ll be in touch soon.</p>
        <Link to="/" className="back-home">Go Back to Home</Link>
    </div>
  )
}

export default ThankYouPage