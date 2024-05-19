import { Link } from 'react-router-dom';
import {useState} from 'react';
import './navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <button className="navbar-toggle" onClick={toggleMenu}>
                    &#9776; {/* Unicode character for the hamburger icon */}
                </button>
                <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link to="/public" onClick={() => setIsOpen(false)}>Public</Link>
                        </li>
                        <li>
                            <Link to="/desktop" onClick={() => setIsOpen(false)}>Desktop</Link>
                        </li>
                        <li>
                            <Link to="/newTicket" onClick={() => setIsOpen(false)}>New Ticket</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;