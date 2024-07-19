import './index.css'
import locations from '../../assets/locations.png'
import dateImage from '../../assets/dateImage.png'


const BookedItem = (props) => {
    const {eacPuja} = props
    const {greetings,pujaImage, shortTitle, title, location, date} = eacPuja

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
        </li>
    )
}

export default BookedItem
