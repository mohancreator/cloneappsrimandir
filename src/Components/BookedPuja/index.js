import './index.css'
import { useNavigate } from 'react-router-dom'
import ContextForAll from '../../Context/ContextForAll'
import nolistpuja from '../../assets/nolistpuja.png'
import BookedItem from '../BookedItem'
import Header from '../Header'

const BookedPuja = () => {
    const navigate = useNavigate();

    const goToBook = () => {
        navigate('/booking')
    }

    return (
        <ContextForAll.Consumer>
            {value => {
                const { myPujaList } = value
                return (
                    <>
                        <Header />
                        {myPujaList.length === 0 ? 
                            <div className='listemptycontainer'>
                                <img src={nolistpuja} alt="nolistpuja" />
                                <h1>No Puja has been booked yet</h1>
                                <p>Book your Puja online at Popular Temples of India. 
                                    Panditji will take sankalp with your name and gotra during the Puja
                                </p>
                                <button onClick={goToBook} className='bookPuja'>Book Pooja Now</button>
                            </div> : 
                            <ul>
                                {myPujaList.map(eacPuja => (<BookedItem key={eacPuja.id} eacPuja={eacPuja} />))}
                            </ul>}
                    </>
                )
            }}
        </ContextForAll.Consumer>
    )
}

export default BookedPuja
