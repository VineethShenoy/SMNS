import React from 'react';

const Hero = () => {
  return (
    <header id="home" className="hero">
      <div className="tech-circles">
        <div className="tech-circle"></div>
        <div className="tech-circle"></div>
      </div>
      <div className="container" data-aos="fade-up">
        <h1>S M N S</h1><h2>And</h2><h1>Associates</h1>
        <p>Charted Accountants</p>
        <a href="#features" className="cta-button">Know Us</a>
      </div>
    </header>
  );
};

export default Hero; 