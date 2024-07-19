import './index.css'
import Header from '../Header'
import startupimage from '../../assets/startupimage.webp'
import leftimage from '../../assets/leftimage.png'
import playstore from '../../assets/playstore.png'
import appstore from '../../assets/appstore.png'


const Home = () => (
    <div>
        <Header />
        <div className='home-container'>
            <div className='heading-playstore-container'>
                <div className='first-heading-container'>
                    <img src={leftimage} alt='left-image'/>
                    <h3 className='first-heading'>WORLD’S LARGEST APP FOR HINDU DEVOTEES</h3>
                </div>
                <h1 className="second-heading">
                    Pray daily with <span className='span-head'>Sri Mandir</span>.
                    One App for all your devotional needs.
                </h1>
                <div className='play-store-container'>
                    <a href="https://play.google.com/store/apps/details?id=com.mandir" target="_blank" rel="noopener noreferrer">
                        <img className='store-image' src={playstore} alt="play-store"/>
                    </a>
                    <a href="https://apps.apple.com/in/app/sri-mandir-puja-chadhava/id1637621461" target="_blank" rel="noopener noreferrer">
                        <img className='store-image' src={appstore} alt="app-store"/>
                    </a>
                </div>
            </div>
            <img className='start-image' src={startupimage} alt='startupindia'/>
        </div>
    </div>
)

export default Home
