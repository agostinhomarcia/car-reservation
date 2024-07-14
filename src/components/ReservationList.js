import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [editReservationId, setEditReservationId] = useState(null);
  const [editedReservation, setEditedReservation] = useState({});

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await axios.get('http://localhost:3000/reservations');
      setReservations(response.data);
    } catch (error) {
      console.error('Erro ao buscar reservas:', error);
    }
  };

  const handleEdit = (reservation) => {
    setEditReservationId(reservation.id);
    setEditedReservation(reservation);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/reservations/${id}`);
      fetchReservations();
    } catch (error) {
      console.error('Erro ao deletar reserva:', error);
    }
  };

  const handleSave = async () => {
    try {
      const totalPrice = calculateTotalPrice(editedReservation.startDate, editedReservation.endDate, editedReservation.pricePerDay);
      await axios.put(`http://localhost:3000/reservations/${editReservationId}`, { ...editedReservation, totalPrice });
      setEditReservationId(null);
      setEditedReservation({});
      fetchReservations();
    } catch (error) {
      console.error('Erro ao atualizar reserva:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedReservation((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotalPrice = (startDate, endDate, pricePerDay) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return days * pricePerDay;
  };

  return (
    <section className="reservation-list">
      <h2>Lista de Reservas</h2>
      {reservations.length === 0 ? (
        <p>Nenhuma reserva encontrada.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Carro</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Datas</th>
              <th>Preço Total</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.car}</td>
                <td>{reservation.model}</td>
                <td>{reservation.year}</td>
                <td>
                  {new Date(reservation.startDate).toLocaleDateString()} - {new Date(reservation.endDate).toLocaleDateString()}
                </td>
                <td>${reservation.totalPrice}</td>
                <td>
                  <button onClick={() => handleEdit(reservation)}>Editar</button>
                  <button onClick={() => handleDelete(reservation.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editReservationId && (
        <div className="edit-form">
          <h3>Editar Reserva</h3>
          <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <label>
              Carro:
              <input
                type="text"
                name="car"
                value={editedReservation.car}
                onChange={handleChange}
              />
            </label>
            <label>
              Modelo:
              <input
                type="text"
                name="model"
                value={editedReservation.model}
                onChange={handleChange}
              />
            </label>
            <label>
              Ano:
              <input
                type="text"
                name="year"
                value={editedReservation.year}
                onChange={handleChange}
              />
            </label>
            <label>
              Data de Início:
              <input
                type="date"
                name="startDate"
                value={new Date(editedReservation.startDate).toISOString().split('T')[0]}
                onChange={handleChange}
              />
            </label>
            <label>
              Data de Término:
              <input
                type="date"
                name="endDate"
                value={new Date(editedReservation.endDate).toISOString().split('T')[0]}
                onChange={handleChange}
              />
            </label>
            <label>
              Preço por Dia:
              <input
                type="number"
                name="pricePerDay"
                value={editedReservation.pricePerDay}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Salvar</button>
            <button type="button" onClick={() => setEditReservationId(null)}>Cancelar</button>
          </form>
        </div>
      )}
    </section>
  );
};

export default ReservationList;
