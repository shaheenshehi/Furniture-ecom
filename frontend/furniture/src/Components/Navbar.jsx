// 

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header>
        <Link to="/" className='logo'>Luxe<span> Living</span></Link>
        <FontAwesomeIcon icon={faBars} className='menu-icon' id='menu-icon' />
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/new">New Arrivals</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/brands">Our Partners</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Link to="/login"><button className='btn'>Login</button></Link>
      </header>
    </div>
  )
}

export default Navbar
