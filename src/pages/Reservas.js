import React, { useEffect, useState } from 'react';
import { FaUser, FaUsers, FaCalendarAlt, FaStickyNote } from 'react-icons/fa';
import styles from './Reservas.module.css';

function Reservas() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const reservasSalvas = JSON.parse(localStorage.getItem('reservas')) || [];
    setReservas(reservasSalvas);
  }, []);

  const handleRemover = (id) => {
    if (!window.confirm('Tem certeza que deseja remover esta reserva?')) return;

    const novasReservas = reservas.filter(r => r.id !== id);
    setReservas(novasReservas);
    localStorage.setItem('reservas', JSON.stringify(novasReservas));
    alert('Reserva removida com sucesso!');
  };

  const formatarDataHora = (dataHora) => {
    return new Date(dataHora).toLocaleString('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
    });
  };

  return (
    <div className={styles.reservas_bg}>
      <div className={styles.reservas_container}>
        <h1 className={styles.titulo}>Reservas</h1>

        {reservas.length === 0 ? (
          <p className={styles.sem_reservas}>Nenhuma reserva cadastrada no momento.</p>
        ) : (
          <div className={styles.lista_reservas}>
            {reservas.map((reserva) => (
              <div key={reserva.id} className={styles.card_reserva}>
                <h2><FaUser style={{ marginRight: '8px' }} /> {reserva.nome}</h2>
                <p><FaUsers style={{ marginRight: '8px' }} /><strong>Pessoas:</strong> {reserva.pessoas}</p>
                <p><FaCalendarAlt style={{ marginRight: '8px' }} /><strong>Data e Hora:</strong> {formatarDataHora(reserva.dataHora)}</p>
                <p><FaStickyNote style={{ marginRight: '8px' }} /><strong>Observações:</strong> {reserva.observacoes || 'Nenhuma'}</p>
                <button
                  className={styles.btn_remover}
                  onClick={() => handleRemover(reserva.id)}
                  aria-label={`Remover reserva de ${reserva.nome}`}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Reservas;