import React, { useState } from 'react';
import styles from './Contato.module.css';
import { useNavigate } from 'react-router-dom';
import { FaUser,FaStickyNote,FaEnvelope,FaTag  } from 'react-icons/fa';

function Contato() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar para API futuramente
    console.log('Mensagem enviada:', form);
    alert('Mensagem enviada com sucesso!');
    navigate('/');
    setForm({
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
      
    });
    
  };

  return (
    <div className={styles.contato_bg}>
      <div className={styles.contato_container}>
        <h1>Fale Conosco</h1>
        <form onSubmit={handleSubmit} className={styles.contato_form}>
          <label><FaUser /> Nome:</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />

          <label><FaEnvelope /> Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label><FaTag /> Assunto:</label>
          <input
            type="text"
            name="assunto"
            value={form.assunto}
            onChange={handleChange}
            required
          />

          <label><FaStickyNote /> Mensagem:</label>
          <textarea
            name="mensagem"
            rows="5"
            value={form.mensagem}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contato;
