import React from 'react';
import { Link } from 'react-router-dom';

const vehicles = [
  { id: 1, name: 'Carro 1', image: 'https://img.freepik.com/fotos-gratis/carro-desportivo-branco-que-esta-na-estrada-vista-dianteira-do-cupe_114579-4005.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user', description: 'Descrição do carro 1...' },
  { id: 2, name: 'Carro 2', image: 'https://img.freepik.com/fotos-gratis/uma-foto-de-jipe-azul-atirando-por-do-sol_114579-4043.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user', description: 'Descrição do carro 2...' },
  { id: 3, name: 'Carro 3', image: 'https://img.freepik.com/fotos-gratis/corridas-de-automoveis-em-competicoes-esportivas_23-2150799985.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user', description: 'Descrição do carro 3...' },
  { id: 4, name: 'Carro 4', image: 'https://img.freepik.com/fotos-gratis/carro-esporte-de-luxo-prata-no-porto_114579-5200.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user', description: 'Descrição do carro 4...' },
  { id: 5, name: 'Carro 5', image: 'https://img.freepik.com/fotos-gratis/corridas-de-automoveis-em-competicoes-esportivas_23-2150800039.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user', description: 'Descrição do carro 5...' },
  { id: 6, name: 'Carro 6', image: 'https://img.freepik.com/fotos-premium/sunset-serenity-porsche-911-em-neonlit-miami_997071-21405.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user', description: 'Descrição do carro 6...' },
  { id: 7, name: 'Carro 7', image: 'https://img.freepik.com/fotos-gratis/carro-3d-com-cores-vibrantes_23-2150796906.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user', description: 'Descrição do carro 7...' },
];

const VehicleList = () => {
  return (
    <section className="vehicle-list">
      <h2>Veículos Disponíveis</h2>
      <div className="vehicle-cards">
        {vehicles.map(vehicle => (
          <div key={vehicle.id} className="vehicle-card">
            <img src={vehicle.image} alt={vehicle.name} />
            <h3>{vehicle.name}</h3>
            <p>{vehicle.description}</p>
            <Link to={`/details/${vehicle.id}`} className="button">Ver Detalhes</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VehicleList;
