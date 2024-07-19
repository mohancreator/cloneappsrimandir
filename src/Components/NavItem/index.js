import './index.css'
import {Link} from 'react-router-dom'

const NavItem = (props) => {
    const {eachItem, activeChange, isActive} = props
    const {displayText, id} = eachItem

    const changeActive = () => {
        activeChange(id)
    }

    return (
        <li>
            <Link to={`${id}`}>
            <button className={isActive ? "activeButton" : "normal"} onClick={changeActive}>
                    {displayText}
            </button>
            </Link>
        </li>        
    )
}

export default NavItem