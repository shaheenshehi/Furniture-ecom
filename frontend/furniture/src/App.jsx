import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Components/Styles/Furn.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Shop from './Components/Shop';
import { NewCollection } from './Components/NewCollection';
import { About } from './Components/About';
import { Brand } from './Components/Brand';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Login } from './Components/Login';
import { CartProvider } from './Context/CartContext';

const App = () => {
  return (
    <CartProvider>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/new" element={<NewCollection />} />
          <Route path="/about" element={<About />} />
          <Route path="/brands" element={<Brand />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
    </CartProvider>
  );
};

export default App;
