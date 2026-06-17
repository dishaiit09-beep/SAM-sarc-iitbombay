import React from 'react'
import './Navbar.css'
import logo from '../assets/dexplorelogo.png'
import { Link } from 'react-router-dom';

const links = [
  { name: 'Home', href: '/', isReal: true },
  { name: 'Species', href: '/species', isReal: true },
  { name: 'Scenes', href: '/scenes', isReal: false },
  { name: 'Map', href: '/map', isReal: false },
  { name: 'Social', href: '/social', isReal: false },
  { name: 'Profile', href: '/profile', isReal: true },
]

export default function Navbar() {
  return (
    <nav className='navbar'>
       <div className='nav-pill'>
        <Link className='nav-logo' to="/">
          <img src={logo} alt="Dexplore Logo" className='nav-logopng' />
          <span className='logo-text'>Dexplore</span>
        </Link>

        <ul className='nav-links'>
          {links.map(link => (
            <li key={link.name} >
              <Link to={link.href} className={`nav-link ${link.isReal ? '' : 'is-ghost'}`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
       </div>
    </nav>
  )
}

