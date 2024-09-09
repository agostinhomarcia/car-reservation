import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './VehicleDetails.css'

const vehicles = {
  1: {
    title: "Carro 1",
    image: "https://img.freepik.com/fotos-gratis/carro-desportivo-branco-que-esta-na-estrada-vista-dianteira-do-cupe_114579-4005.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user",
    gallery: [
      "https://img.freepik.com/fotos-gratis/carro-desportivo-branco-que-esta-na-estrada-vista-dianteira-do-cupe_114579-4005.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user"
    ],
    specs: [
      "Modelo: Sedan",
      "Ano: 2020",
      "Combustível: Gasolina",
      "Transmissão: Automática",
      "Preço por dia: $50"
    ],
    reviews: [
      {
        reviewer: "João",
        rating: 4,
        comment: "Carro muito bom, confortável e econômico."
      },
      {
        reviewer: "Maria",
        rating: 5,
        comment: "Adorei o carro! Muito bem conservado."
      }
    ]
  },
  2: {
    title: "Carro 2",
    image: "https://img.freepik.com/fotos-gratis/uma-foto-de-jipe-azul-atirando-por-do-sol_114579-4043.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user",
    gallery: [
      "https://img.freepik.com/fotos-gratis/uma-foto-de-jipe-azul-atirando-por-do-sol_114579-4043.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user"
    ],
    specs: [
      "Modelo: SUV",
      "Ano: 2019",
      "Combustível: Diesel",
      "Transmissão: Manual",
      "Preço por dia: $60"
    ],
    reviews: [
      {
        reviewer: "Carlos",
        rating: 4,
        comment: "Bom carro, mas poderia ser mais econômico."
      },
      {
        reviewer: "Ana",
        rating: 5,
        comment: "Perfeito para viagens longas!"
      }
    ]
  },
  3: {
    title: "Carro 3",
    image: "https://img.freepik.com/fotos-gratis/corridas-de-automoveis-em-competicoes-esportivas_23-2150799985.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user",
    gallery: [
      "https://img.freepik.com/fotos-gratis/corridas-de-automoveis-em-competicoes-esportivas_23-2150799985.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user"
    ],
    specs: [
      "Modelo: Esportivo",
      "Ano: 2018",
      "Combustível: Gasolina",
      "Transmissão: Automática",
      "Preço por dia: $70"
    ],
    reviews: [
      {
        reviewer: "Pedro",
        rating: 3,
        comment: "Bom desempenho, mas manutenção cara."
      },
      {
        reviewer: "Lucia",
        rating: 4,
        comment: "Robusto e confiável."
      }
    ]
  },
  4: {
    title: "Carro 4",
    image: "https://img.freepik.com/fotos-gratis/carro-esporte-de-luxo-prata-no-porto_114579-5200.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user",
    gallery: [
      "https://img.freepik.com/fotos-gratis/carro-esporte-de-luxo-prata-no-porto_114579-5200.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user"
    ],
    specs: [
      "Modelo: Esportivo",
      "Ano: 2024",
      "Combustível: Flex",
      "Transmissão: Automática",
      "Preço por dia: $500"
    ],
    reviews: [
      {
        reviewer: "Pedro",
        rating: 3,
        comment: "Bom desempenho, mas manutenção cara."
      },
      {
        reviewer: "Lucia",
        rating: 4,
        comment: "Robusto e confiável."
      }
    ]
  },
  5: {
    title: "Carro 5",
    image: "https://img.freepik.com/fotos-gratis/corridas-de-automoveis-em-competicoes-esportivas_23-2150800039.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user",
    gallery: [
      "https://img.freepik.com/fotos-gratis/corridas-de-automoveis-em-competicoes-esportivas_23-2150800039.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user"
    ],
    specs: [
      "Modelo: Coupe",
      "Ano: 2020",
      "Combustível: Gasolina",
      "Transmissão: Manual",
      "Preço por dia: $90"
    ],
    reviews: [
      {
        reviewer: "Alice",
        rating: 5,
        comment: "Experiência incrível, o carro é muito ágil."
      },
      {
        reviewer: "Roberto",
        rating: 4,
        comment: "Ótimo carro, mas poderia ter mais espaço interno."
      }
    ]
  },
  6: {
    title: "Carro 6",
    image: "https://img.freepik.com/fotos-premium/sunset-serenity-porsche-911-em-neonlit-miami_997071-21405.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user",
    gallery: [
      "https://img.freepik.com/fotos-premium/sunset-serenity-porsche-911-em-neonlit-miami_997071-21405.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user"
    ],
    specs: [
      "Modelo: Convertible",
      "Ano: 2019",
      "Combustível: Diesel",
      "Transmissão: Automática",
      "Preço por dia: $100"
    ],
    reviews: [
      {
        reviewer: "Lucas",
        rating: 5,
        comment: "Perfeito para passeios ao ar livre."
      },
      {
        reviewer: "Clara",
        rating: 5,
        comment: "Confortável e estiloso, adorei!"
      }
    ]
  },
  7: {
    title: "Carro 7",
    image: "https://img.freepik.com/fotos-gratis/carro-3d-com-cores-vibrantes_23-2150796906.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user",
    gallery: [
      "https://img.freepik.com/fotos-gratis/carro-3d-com-cores-vibrantes_23-2150796906.jpg?uid=R58516977&ga=GA1.1.172126281.1720828259&semt=ais_user"
    ],
    specs: [
      "Modelo: Convertible",
      "Ano: 2019",
      "Combustível: Diesel",
      "Transmissão: Automática",
      "Preço por dia: $100"
    ],
    reviews: [
      {
        reviewer: "Lucas",
        rating: 5,
        comment: "Perfeito para passeios ao ar livre."
      },
      {
        reviewer: "Clara",
        rating: 5,
        comment: "Confortável e estiloso, adorei!"
      }
    ]
  },

};

const VehicleDetails = () => {
  const { id } = useParams();
  const vehicle = vehicles[id];
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleReservation = async (e) => {
    e.preventDefault();
    const reservationDetails = {
      car: vehicle.title,
      model: vehicle.specs[0].split(": ")[1],
      year: vehicle.specs[1].split(": ")[1],
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      pricePerDay: parseInt(vehicle.specs[4].split(": $")[1]),
      totalPrice: calculateTotalPrice(startDate, endDate, parseInt(vehicle.specs[4].split(": $")[1]))
    };

    try {
      const response = await axios.post('https://back-end-car-reservations.vercel.app/reservations', reservationDetails);
      console.log('Reserva criada:', response.data);
      localStorage.setItem("reservationDetails", JSON.stringify(reservationDetails));
      window.location.href = "/confirmation";
    } catch (error) {
      console.error('Erro ao criar a reserva:', error);
      alert('Erro ao criar a reserva. Tente novamente.');
    }
  };

  const calculateTotalPrice = (startDate, endDate, pricePerDay) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return days * pricePerDay;
  };

  return (
    <section className="vehicle-details">
      <div className="vehicle-info">
        <h1>{vehicle.title}</h1>
        <h2>Especificações Técnicas</h2>
        <ul>
          {vehicle.specs.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
        <form onSubmit={handleReservation}>
          <label htmlFor="start-date">Data de Início:</label>
          <DatePicker
            id="start-date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            dateFormat="yyyy-MM-dd"
          />
          <label htmlFor="end-date">Data de Término:</label>
          <DatePicker
            id="end-date"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            minDate={new Date()}
            dateFormat="yyyy-MM-dd"
          />
          <button className='button' type="submit">Reservar</button>
        </form>
        <div className="reviews">
          <h2>Avaliações</h2>
          {vehicle.reviews.map((review, index) => (
            <div key={index} className="review">
              <p className="reviewer">{review.reviewer}</p>
              <p className="rating">{"★".repeat(review.rating)}</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="vehicle-gallery">
        {vehicle.gallery.map((image, index) => (
          <img key={index} src={image} alt={`${vehicle.title} ${index + 1}`} className="vehicle-image" />
        ))}
      </div>
    </section>
  );
};

export default VehicleDetails;
