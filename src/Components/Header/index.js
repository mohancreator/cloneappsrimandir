import './index.css';
import { Link } from 'react-router-dom';
import HeaderPopup from '../HeaderPopup'
import NavItem from '../NavItem'
import ContextForAll from '../../Context/ContextForAll'

const navItemList = [
  { id: "/", displayText: "Home"},
  { id: "booking", displayText: "Puja" },
  { id: "panchang", displayText: "Panchang" },
  { id: "temples", displayText: "Temples" },
  { id: "library", displayText: "Library" }
];

const Header = () => (
  <ContextForAll.Consumer>
    {value => {
      const { activeState, activeChange } = value;
      return (
        <div className='header-container'>
          <Link to="/"><img className='logo-image' src='/logoHeader.svg' alt="logo" /></Link>

          <ul className='list-header'>
            {navItemList.map(eachItem => (
              <NavItem
                isActive={activeState === eachItem.id}
                activeChange={activeChange}
                key={eachItem.id}
                eachItem={eachItem}
              />
            ))}
          </ul>
          <div className='profile-container'>
            <select className='select-input'>
              <option key="english" value="english">English</option>
              <option key="hindi" value="हिंदी">हिंदी</option>
            </select>
            <HeaderPopup />
          </div>
        </div>
      );
    }}
  </ContextForAll.Consumer>
);

export default Header;
