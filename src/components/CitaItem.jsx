import React from 'react'; 

const CitaItem = ({ cita, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(cita)}
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '5px',
        cursor: 'pointer',
      }}
    >
      <p><strong>Doctor:</strong> {cita.doctor?.nombre_completo}</p>
      <p><strong>Fecha:</strong> {new Date(cita.fecha).toLocaleDateString()}</p>
      <p><strong>Hora:</strong> {new Date(cita.hora).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
    </div>
  );
};

export default CitaItem;
