import React, { useState } from 'react';
import './navBar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            <ul className={isOpen ? "active" : ""}>
                <li><a href="#home">Home</a></li>
                <li><a href="#cortes-vacunos">🐄 Cortes Vacunos</a></li>
                <li><a href="#cortes-cerdo">🐖 Cortes de Cerdo</a></li>
                <li><a href="#cortes-pollo">🐓 Cortes de Pollo</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;