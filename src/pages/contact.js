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
      <div className="w-full bg-primary-600">
        <div className="container mx-auto items-stretch">
          <h3 className="text-center">Si queres contactarme</h3>
          <form className="grid grid-cols-2 gap-2 p-4">
            <input
              className="col-span-1 p-2 bg-primary-300 rounded"
              type="text"
              placeholder="tu nombre"
              name="name"
              value={name}
              onChange={handleName}
            />
            <input
              className="col-span-1 p-2 bg-primary-300 rounded"
              type="text"
              placeholder="tu email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
            <textarea
              className="col-span-2 p-2 bg-primary-300 rounded h-32 align-top"
              type="textarea"
              placeholder="Tu mensaje"
              name="message"
              value={message}
              onChange={handleMessage}
            />
          </form>
          <div className="text-right p-2 m-2">
            <button className="bg-accent-500 rounded p-2">Enviar</button>
          </div>
        </div>
      </div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{message}</h1>
    </Layout>
  );
}

export default Contact;
