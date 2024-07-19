import './index.css'
import locations from '../../assets/locations.png'
import dateImage from '../../assets/dateImage.png'
import { BiRightArrowAlt } from "react-icons/bi";

const BookingItem = (props) => {
    const {pujaItem,bookPujaItem} = props
    const {id, greetings,pujaImage, shortTitle, title, location, date,isBooked} = pujaItem

    const bookPuja = () => {
        bookPujaItem(id)
    }

    return (
        <li className='each-container'>
            <div className='image-container'>
                <img className='puja-image' src={pujaImage} alt="Puja"/>
                <h4 className='short-title'>{shortTitle}</h4>                
            </div>
            <h1 className='title'>{title}</h1>
            <p>{greetings}</p>
            <div className='location-data-container'>
                <img src={locations} alt="location"/>
                <p className='location'>{location}</p>
            </div>
            <div className='location-data-container'>
                <img src={dateImage} alt="date"/>
                <p className='date'>{date}</p>
            </div>
            {isBooked ? 
            <button className="normals">Booked</button> : 
            <button onClick={bookPuja} className='participate-button'>PARTICIPATE <BiRightArrowAlt className='arrow' /></button>}
        </li>
    )
}

export default BookingItem
