import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 DriveNow. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/marcia-agostinho-developer/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/agostinhomarcia" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
