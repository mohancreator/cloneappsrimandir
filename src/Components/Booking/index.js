import './index.css'
import Header from '../Header'
import Carousel from '../Carousel'
import { Component } from 'react'
import BookingItem from '../BookingItem'
import saturday1 from '../../assets/saturday1.png'
import mahadev from '../../assets/mahadev.png'
import khali from '../../assets/khali.png'
import vishnu from '../../assets/vishnu.png'
import ContextForAll from '../../Context/ContextForAll'


const bookingList = [
    {id: 1, pujaImage: saturday1, 
    shortTitle: "SATURDAY SHANI SHINGNAPUR SPECIAL", 
    title: "Shani Saade Saati Peeda Shanti Mahapuja and til tel abhishek",
    greeting: "For Victory of Life and Good things you think",
    location: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla chaturdashi",
    isBooked: false,
    },
    {id: 2, pujaImage: mahadev, 
    shortTitle: "MAHADEV PURNIMA SPECIAL", 
    title: "Maa Bagalamukhi Tantra  Yukta Havan Puja Tantra",
    greeting: "For Victory in Court Cases and Victory Over Enemies",
    location: "Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla chaturdashi",
    isBooked: false,
    },
    {id: 3, pujaImage: khali, 
    shortTitle: "SATURDAY SHANI SHINGNAPUR SPECIAL", 
    title: "Shani Saade Saati Peeda Shanti Mahapuja and til tel abhishek",
    greeting: "For Victory of Life and Good things you think",
    location: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla chaturdashi",
    isBooked: false,
    },
    {id: 4, pujaImage: vishnu, 
    shortTitle: "SATURDAY SHANI SHINGNAPUR SPECIAL", 
    title: "Shani Saade Saati Peeda Shanti Mahapuja and til tel abhishek",
    greeting: "For Victory of Life and Good things you think",
    location: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla chaturdashi"
    },
    {id: 5, pujaImage: saturday1, 
        shortTitle: "SATURDAY SHANI SHINGNAPUR SPECIAL", 
        title: "Shani Saade Saati Peeda Shanti Mahapuja and til tel abhishek",
        greeting: "For Victory of Life and Good things you think",
        location: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
        date: "20 July, Saturday, Ashadha Shukla chaturdashi"
    },
    {id: 6, pujaImage: mahadev, 
        shortTitle: "SATURDAY SHANI SHINGNAPUR SPECIAL", 
        title: "Shani Saade Saati Peeda Shanti Mahapuja and til tel abhishek",
        greeting: "For Victory of Life and Good things you think",
        location: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
        date: "20 July, Saturday, Ashadha Shukla chaturdashi"
    },
    {id: 7, pujaImage: saturday1, 
        shortTitle: "SATURDAY SHANI SHINGNAPUR SPECIAL", 
        title: "Shani Saade Saati Peeda Shanti Mahapuja and til tel abhishek",
        greeting: "For Victory of Life and Good things you think",
        location: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
        date: "20 July, Saturday, Ashadha Shukla chaturdashi"
    },
    {id: 8, pujaImage: vishnu, 
        shortTitle: "SATURDAY SHANI SHINGNAPUR SPECIAL", 
        title: "Shani Saade Saati Peeda Shanti Mahapuja and til tel abhishek",
        greeting: "For Victory of Life and Good things you think",
        location: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
        date: "20 July, Saturday, Ashadha Shukla chaturdashi"
    },
    {id: 9, pujaImage: khali, 
        shortTitle: "SATURDAY SHANI SHINGNAPUR SPECIAL", 
        title: "Shani Saade Saati Peeda Shanti Mahapuja and til tel abhishek",
        greeting: "For Victory of Life and Good things you think",
        location: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
        date: "20 July, Saturday, Ashadha Shukla chaturdashi"
    }
]



class Booking extends Component {
    state = {bookingList: bookingList}

    bookPujaItems = (id) => {
        this.setState(prevState => ({
            bookingList: prevState.bookingList.map(item =>
                item.id === id ? { ...item, isBooked: !item.isBooked } : item
            )
        }));
    }


    render(){ 
        const {bookingList} = this.state
        return (
            <ContextForAll.Consumer>
                {value => {
                    const {addPuja} = value
                    const bookPujaItem = (id) => {
                        addPuja(id)
                        this.bookPujaItems(id)                        
                    }
                    return (
                        <div>
                            <Header />
                            <div className="booking-bg-container">
                            <h1>Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir</h1>
                            <Carousel />
                            <div className='booking-container'>
                                <h1>Upcoming Pujas on Sri Mandir.</h1>
                                <p>Book online puja with Sri Mandir in more than 500+ temples across India. 
                                    Receive video of the puja along with the Prasad and receive blessings 
                                    from the divine for prosperity and well-being of you and your family
                                </p>
                                <ul className='bookingList'>
                                {
                                    bookingList.map(pujaItem=> (<BookingItem bookPujaItem={bookPujaItem} pujaItem={pujaItem}/>))
                                }
                                </ul>
                            </div>
                            </div>
                        </div>
                    )
                }}

            </ContextForAll.Consumer>
        
        )
    }
}

export default Booking