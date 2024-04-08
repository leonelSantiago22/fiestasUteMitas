import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/navbar.css"
export default function Navbar(){
return(
    <header className="cabecera">
        <nav className='navbar-nav'>
            <NavLink to='/' className='navbar-nav-link'>
                    <h2 className='title'>Fiestas</h2>
                </NavLink>
            <div className='navbar-right-links'>
                <NavLink to='/' className='navbar-nav-link'  >
                    Inicio
                </NavLink>
                <NavLink to='/'  className='navbar-nav-link'>
                    Contacto
                </NavLink>
            </div>
        </nav>
    </header>
)
}

