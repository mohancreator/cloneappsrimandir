import Popup from 'reactjs-popup'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import 'reactjs-popup/dist/index.css'
import ContextForAll from '../../Context/ContextForAll'
import bookprofile from '../../assets/bookprofile.png'
import greaterthan from '../../assets/greaterthan.png'
import profilesecond from '../../assets/profilesecond.png'
import fireimage from '../../assets/fireimage.png'
import whatsappimage from '../../assets/whatsappimage.png'
import email from '../../assets/email.png'
import whatsapp from '../../assets/whatsapp.png'

import './index.css'

const HeaderPopup = () => {
  const navigate = useNavigate();

  const changeToBookedPujas = () => {
      navigate('/bookedpujas')
  }

  return (
  <ContextForAll.Consumer>
    {value => 
    {const {activeChange} = value

    const changeToPuja = () => {
      activeChange("/")
    }

    const changeToBookedPuja = () => {
      changeToBookedPujas()
      activeChange("puja")      
    }
      return (
      <div className="popup-container">
        <Popup
          trigger={
            <button className="trigger-button" type="button">
              <CgProfile className='profile-image' />
            </button>
          }
        >
          <div className='poped-container'>
            <h1 className='say-hello-heading'>Hello, Sri Mandir Bhakt </h1>
            <p className='greetings'>Welcome to Sri Mandir Puja Seva</p>
            <p className='greetings'>Account Details</p>
            <div className='booking-puja-container'>
              <div className="each-booking-container">
                <div className='inside-container'>
                  <img src={bookprofile} alt="bookprofile"/>
                  <p className='greetings-inside'>My profile</p>
                </div>
                <img src={greaterthan} alt="greaterthan"/>
              </div>
              <Link to="/bookedpujas" className='linkItem' onClick={changeToBookedPuja}>
                <div className="each-booking-container">
                  <div className='inside-container'>
                    <img src={profilesecond} alt="bookprofile"/>
                    <p className='greetings-inside'>My Puja Bookings</p>
                  </div>
                  <img src={greaterthan} alt="greaterthan"/>
                </div></Link>
                <div className="each-booking-container">
                  <div className='inside-container'>
                    <img src={profilesecond} alt="bookprofile"/>
                    <p className='greetings-inside'>My Ramotsav Bookings</p>
                  </div>
                  <img src={greaterthan} alt="greaterthan"/>
                </div>
              <Link to="/booking" className='linkItem' onClick={changeToPuja}>
                <div className="each-booking-container">
                  <div className='inside-container'>
                    <img src={fireimage} alt="bookprofile"/>
                    <p className='greetings-inside'>Book a Puja</p>
                  </div>
                  <p className='new'>New</p>
                  <img src={greaterthan} alt="greaterthan"/>
                </div>
              </Link>
            </div>
            <p className='greetings'>Help & Support for Puja Booking</p>
            <div className='whatsappcontainer'>
              <div><img src={whatsappimage} alt="whatsapp"/></div>
              <div>
                <p className='greetings-inside'>080-711-74417</p>
                <p className='greetings-insides'>You can call us from 10.30 AM - 7.30 PM</p>
              </div>
            </div>
            <div className='contact-container'>
              <div className='each-contact-container'>
                <img className='contact-image' src={email} alt="email"/>
                <p className='greetings'>Email</p>
              </div>
              <div className='each-contact-container'>
                <img className='contact-image' src={whatsapp} alt="email"/>
                <p className='greetings'>Whatsapp</p>
              </div>
            </div>
          </div>
        </Popup>
      </div>
    )}}
  </ContextForAll.Consumer>
)}

export default HeaderPopup
