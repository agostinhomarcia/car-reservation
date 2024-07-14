import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contato</h1>
      <p>
        Entre em contato conosco! Estamos aqui para ajudar e responder a quaisquer dúvidas que você possa ter.
      </p>
      <h2>Informações de Contato</h2>
      <p>
        <strong>Endereço:</strong> Rua Fictícia, 123, Centro, Cidade Exemplo, EX 12345
      </p>
      <p>
        <strong>Telefone:</strong> (11) 1234-5678
      </p>
      <p>
        <strong>Email:</strong> contato@carrental.com
      </p>
      <h2>Formulário de Contato</h2>
      <form>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
