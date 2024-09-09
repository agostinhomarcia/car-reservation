import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import VehicleList from './components/VehicleList';
import VehicleDetails from './components/Vehicle';
import Confirmation from './components/Confirmation';
import ReservationList from './components/Reservation';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Payment from './components/Payment';
import './styles.css'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<VehicleList />} />
          <Route path="/details/:id" element={<VehicleDetails />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservations" element={<ReservationList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
