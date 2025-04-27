import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="contact-info">
          <h2>Address</h2>
          <p>
            2nd Floor, RK Center<br />
            NH66 Bhramavara<br />
            Udupi 576213
          </p>
          
        <div className="email-text">
         <h2>Connect with us</h2>
          <p>
            You can mail us at <strong>smnsassociates@outlook.com</strong>, or tap the icon below:
         </p>
        </div>


          <div className="social-links">
            <a href="mailto:smnsassociates@outlook.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#team">Team</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
