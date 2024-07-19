import './App.css'
import Home from './Components/Home'
import Booking from './Components/Booking'
import ContextForAll from './Context/ContextForAll'
import { Component } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import saturday1 from './assets/saturday1.png'
import mahadev from './assets/mahadev.png'
import khali from './assets/khali.png'
import vishnu from './assets/vishnu.png'
import BookedPuja from './Components/BookedPuja'

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
  {
  id: 3, pujaImage: khali, 
  shortTitle: "SATURDAY SHANI SHINGNAPUR SPECIAL", 
  title: "Shani Saade Saati Peeda Shanti Mahapuja and til tel abhishek",
  greeting: "For Victory of Life and Good things you think",
  location: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
  date: "20 July, Saturday, Ashadha Shukla chaturdashi",
  isBooked: false,
},
{
  id: 4, pujaImage: vishnu, 
  shortTitle: "SATURDAY SHANI SHINGNAPUR SPECIAL", 
  title: "Shani Saade Saati Peeda Shanti Mahapuja and til tel abhishek",
  greeting: "For Victory of Life and Good things you think",
  location: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
  date: "20 July, Saturday, Ashadha Shukla chaturdashi"
}
]

class App extends Component {
  state = { myPujaList: [], activeState: "home" }

  addPuja = (id) => {
    const findItem = bookingList.find(each => each.id === id)
    this.setState(prevState => ({ myPujaList: [...prevState.myPujaList, findItem] }))
  }

  activeChange = (id) => {
    this.setState({ activeState: id })
  }

  render() {
    const { myPujaList, activeState } = this.state
    return (
      <ContextForAll.Provider value={{ activeState, myPujaList, addPuja: this.addPuja, activeChange: this.activeChange }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/booking" element={<Booking />} />
            <Route exact path="/bookedpujas" element={<BookedPuja/>}/>
          </Routes>
        </BrowserRouter>
      </ContextForAll.Provider>
    )
  }
}

export default App
