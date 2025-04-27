import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/assets/logo.png" alt="S M N S & Associates" />
        </div>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#features" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#team" onClick={() => setMobileMenuOpen(false)}>Team</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>
        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span className={mobileMenuOpen ? 'rotate-45' : ''}></span>
          <span className={mobileMenuOpen ? 'opacity-0' : ''}></span>
          <span className={mobileMenuOpen ? 'rotate-negative-45' : ''}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 