import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const carouselImages = [
  { id: 1, image: 'https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, image: 'https://images.unsplash.com/photo-1530675706010-bc677ce30ab6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, image: 'https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

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
      <h2>Bem vindo a DriveNow</h2>
      <div className="carousel-container">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {carouselImages.map(image => (
            <div key={image.id}>
              <img src={image.image} alt={`carousel-${image.id}`} />
            </div>
          ))}
        </Carousel>
      </div>
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
