
import { NavLink } from 'react-router-dom'
import './nav-message.styles.css'

const setActive = ({isActive}) => (isActive ? "active" : "")

function NavMessage() {
    return (
        <nav className='nav'>
            <NavLink end to="/" className={setActive}>About</NavLink>
            <NavLink to="/inbox" className={setActive}>Inbox</NavLink>
        </nav>
    )
}

export default NavMessage