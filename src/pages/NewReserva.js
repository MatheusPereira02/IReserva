import React, { useState, useEffect } from 'react';
import styles from './NewReserva.module.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaUsers, FaStickyNote, FaCalendarAlt } from 'react-icons/fa';


function NewReserva() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [pessoas, setPessoas] = useState(1);
  const [dataHora, setDataHora] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [reservas, setReservas] = useState([]);

  // Carregar reservas do localStorage ao iniciar
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('reservas')) || [];
    setReservas(saved);
  }, []);

  // Função para salvar reserva nova
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    if (!nome.trim()) {
      alert('Por favor, informe seu nome.');
      return;
    }
    if (!dataHora) {
      alert('Por favor, selecione data e hora.');
      return;
    }
    if (pessoas < 1) {
      alert('Número de pessoas deve ser pelo menos 1.');
      return;
    }

    const novaReserva = {
      id: Date.now(),
      nome,
      pessoas,
      dataHora,
      observacoes,
    };

    const novasReservas = [...reservas, novaReserva];
    setReservas(novasReservas);
    localStorage.setItem('reservas', JSON.stringify(novasReservas));

    alert('Reserva realizada com sucesso!');
    navigate('/');

    // Resetar form
    setNome('');
    setPessoas(1);
    setDataHora('');
    setObservacoes('');
  };

  return (
    <div className={styles.reserva_bg}>
      <form onSubmit={handleSubmit} className={styles.reserva_form} noValidate>
        <h1>Fazer Reserva</h1>

        <label htmlFor="nome"><FaUser /> Nome:</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Seu nome completo"
          required
        />

        <label htmlFor="pessoas"><FaUsers /> Número de Pessoas:</label>
        <input
          id="pessoas"
          type="number"
          min="1"
          max="20"
          value={pessoas}
          onChange={e => setPessoas(Number(e.target.value))}
          required
        />

        <label htmlFor="dataHora"><FaCalendarAlt /> Data e Hora:</label>
        <input
          id="dataHora"
          type="datetime-local"
          value={dataHora}
          onChange={e => setDataHora(e.target.value)}
          required
        />

        <label htmlFor="observacoes"><FaStickyNote /> Observações:</label>
        <textarea
          id="observacoes"
          value={observacoes}
          onChange={e => setObservacoes(e.target.value)}
          placeholder="Ex: Mesa próxima à janela, alergias, etc."
          rows="3"
        />

        <button type="submit">Reservar</button>
      </form>
    </div>
  );
}

export default NewReserva;
