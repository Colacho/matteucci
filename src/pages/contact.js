import BlackFringe from '@/components/black-fringe';
import Layout from '@/components/layout';
import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleMessage(e) {
    setMessage(e.target.value);
  }

  return (
    <Layout>
      <BlackFringe title="Queres contactarme?" description="Contacto - Javier Matteucci">
        <div className="container w-full mx-auto">
          <form className="flex-grow">
            <div className="flex justify-between mb-4">
              <input
                className="w-2/5 p-2 bg-primary-300 rounded"
                type="text"
                placeholder="tu nombre"
                name="name"
                value={name}
                onChange={handleName}
              />
              <input
                className="w-2/5 p-2 bg-primary-300 rounded"
                type="text"
                placeholder="tu email"
                name="email"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="flex">
              <textarea
                className="flex-grow p-2 bg-primary-300 rounded align-top h-64 mb-4"
                type="textarea"
                placeholder="Tu mensaje"
                name="message"
                value={message}
                onChange={handleMessage}
              />
            </div>
            <div className="text-right">
              <button className="bg-accent-500 rounded p-2">Enviar</button>
            </div>
          </form>
        </div>
      </BlackFringe>
    </Layout>
  );
}

export default Contact;
