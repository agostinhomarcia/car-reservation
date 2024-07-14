<p align="center">
   <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3BwOXhjYXphcGswNjFrcGlqZXp2dmxmZTM4dzZhbGdzcjMzZmZwbiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/7cYoERt3yza1A1iV0q/giphy.gif" alt="movie" width="280"/>
</p>

<h1 align="center"></h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/agostinhomarcia/car-reservation?color=d910e0">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/agostinhomarcia/car-reservation?color=d910e0">

  <img alt="License" src="https://img.shields.io/github/license/agostinhomarcia/car-reservation?color=d910e0">

   <img alt="Github issues" src="https://img.shields.io/github/issues/agostinhomarcia/car-reservation?color=d910e0" />
>

</p>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/agostinhomarcia" target="_blank">Author</a>&#xa0; | &#xa0
  <a href="#" target="_blank" rel="noopener noreferrer">Projeto</a>
</p>

<br>

# Car Reservation Frontend

Este é o frontend para o sistema de reservas de carros. Este projeto fornece uma interface de usuário para visualizar, criar, editar e deletar reservas de carros.

## Tecnologias

- React.js
- React Router
- Axios
- DatePicker

## Funcionalidades

- **Visualizar Veículos Disponíveis:** Permite visualizar a lista de carros disponíveis para reserva.
- **Ver Detalhes do Veículo:** Permite visualizar os detalhes de um carro específico, incluindo suas especificações técnicas e avaliações.
- **Reservar um Veículo:** Permite selecionar datas e reservar um carro.
- **Ver Minhas Reservas:** Permite visualizar, editar e deletar reservas existentes.

## Instalação

Siga as instruções abaixo para rodar o projeto na sua máquina local.

### Pré-requisitos

- Node.js (https://nodejs.org/)
- npm (https://www.npmjs.com/)

### Passos para Instalação

1. Clone o repositório para a sua máquina local:

   ```bash
   git clone https://github.com/agostinhomarcia/car-reservation.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd car-reservation
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. O aplicativo estará rodando na porta 3000. Você pode acessá-lo em `http://localhost:3000`.

6. Se a porta 3000 já estiver sendo usada pelo seu Back-end por exemplo mude para abrir na porta 3001.

## Estrutura do Projeto

```plaintext
car-reservation/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── VehicleList.js
│   │   ├── VehicleDetails.js
│   │   ├── Confirmation.js
│   │   ├── ReservationList.js
│   │   ├── Login.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
├── package.json
└── README.md
```
