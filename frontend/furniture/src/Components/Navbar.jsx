import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <Link to="/" className="logo">Luxe<span> Living</span></Link>

     

      <ul className={`navbar ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
        <li><Link to="/new" onClick={() => setMenuOpen(false)}>New Arrivals</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/brands" onClick={() => setMenuOpen(false)}>Our Partners</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
      {/* <div className="menu-right">
        <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} />
        <FontAwesomeIcon icon={faCartShopping}  className='nav-cart-icon'/>
        <Link to="/login"><button className="btn">Login</button></Link>
      </div> */}
      <div className="menu-right">
  <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} />
  <Link to="/cart">
    <FontAwesomeIcon icon={faCartShopping} className="nav-cart-icon" />
  </Link>
  <Link to="/login"><button className="btn">Login</button></Link>
</div>


    </header>
     
  );
};

export default Navbar;
