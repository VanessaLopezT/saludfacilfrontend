import React from 'react';
import { agendarCita } from '../api';

const DetalleCita = ({ cita, onAgendada }) => {
  const handleAgendar = async () => {
    try {
      const payload = {
        paciente_id: cita.paciente_id,
        doctor_id: cita.doctor_id,
        fecha: new Date(cita.fecha).toISOString(),
        hora: new Date(cita.hora).toISOString(),
        modalidad: cita.modalidad,
        ubicacion: cita.ubicacion,
        estado: 'Agendada'
      };

      await agendarCita(cita.id, payload);

      alert('✅ Cita agendada correctamente');

      // 🔁 Recargar lista de citas disponibles
      if (onAgendada) onAgendada();

    } catch (error) {
      alert('❌ Error al agendar la cita');
    }
  };

  if (!cita) {
  return (
    <div style={{
      color: '#555',
      fontStyle: 'italic',
      opacity: 0.7,
      padding: '10px'
    }}>
      Selecciona una cita para ver los detalles
    </div>
  );
}

  return (
    <div style={{ border: '1px solid #333', padding: '10px' }}>
      <h3>Detalles de la cita</h3>
      <p><strong>Doctor:</strong> {cita.doctor?.nombre_completo}</p>
      <p><strong>Fecha:</strong> {new Date(cita.fecha).toLocaleDateString()}</p>
      <p><strong>Hora:</strong> {new Date(cita.hora).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
      <p><strong>Modalidad:</strong> {cita.modalidad}</p>
      <p><strong>Ubicación:</strong> {cita.ubicacion}</p>
      <button onClick={handleAgendar}>Agendar cita</button>
    </div>
  );
};

export default DetalleCita;
