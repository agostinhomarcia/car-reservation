import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import VehicleList from './components/VehicleList';
import VehicleDetails from './components/VehicleDetails';
import Confirmation from './components/Confirmation';
import ReservationList from './components/ReservationList';
import Login from './components/Login';
import './styles.css';

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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
