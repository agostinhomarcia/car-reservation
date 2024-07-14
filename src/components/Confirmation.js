import React from 'react';
import { format } from 'date-fns';

const Confirmation = () => {
  const reservationDetails = JSON.parse(localStorage.getItem("reservationDetails"));

  const formattedStartDate = format(new Date(reservationDetails.startDate), 'dd/MM/yyyy');
  const formattedEndDate = format(new Date(reservationDetails.endDate), 'dd/MM/yyyy');

  return (
    <section className="reservation-confirmation">
      <h1>Reserva Confirmada!</h1>
      <div className="confirmation-details">
        <h2>Detalhes da Reserva</h2>
        <ul>
          <li>Carro: {reservationDetails.car}</li>
          <li>Modelo: {reservationDetails.model}</li>
          <li>Ano: {reservationDetails.year}</li>
          <li>Datas: {formattedStartDate} - {formattedEndDate}</li>
          <li>Preço Total: ${reservationDetails.totalPrice}</li>
        </ul>
        <p>Obrigado por reservar com a DriveNow! Um e-mail de confirmação foi enviado para você.</p>
        <a href="/" className="button">Voltar para a Página Inicial</a>
      </div>
    </section>
  );
};

export default Confirmation;
