import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">CarRental</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/reservations"> Reservas</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
