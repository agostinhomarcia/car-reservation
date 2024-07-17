import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <p>© 2024 DriveNow. Todos os direitos reservados.</p>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
