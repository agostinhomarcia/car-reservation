import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css'


const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula a lógica de pagamento conforme a necessidade do cliente
    console.log('Payment Details:', { cardNumber, expiryDate, cvv, name });
    navigate('/confirmation');
  };

  return (
    <section className="payment">
      <h1>Pagamento</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Número do Cartão:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        <label htmlFor="expiryDate">Data de Validade:</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/AA"
          required
        />
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
        <label htmlFor="name">Nome no Cartão:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Pagar</button>
      </form>
    </section>
  );
};

export default Payment;
