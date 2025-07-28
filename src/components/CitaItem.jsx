import React from 'react';

const CitaItem = ({ cita, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(cita)}
      style={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '12px',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        borderLeft: '4px solid #1976D2',
        ':hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
          background: 'rgba(255, 255, 255, 0.95)'
        }
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: 'rgba(25, 118, 210, 0.1)',
          color: '#1565C0',
          marginRight: '12px',
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          {cita.doctor?.nombre_completo?.charAt(0) || 'D'}
        </span>
        <div>
          <p style={{ margin: '0', fontWeight: '600', color: '#333' }}>{cita.doctor?.nombre_completo || 'Doctor no disponible'}</p>
          <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#666' }}>
            {new Date(cita.fecha).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}
          </p>
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '8px',
        paddingTop: '8px',
        borderTop: '1px solid rgba(240, 240, 240, 0.5)'
      }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(25, 118, 210, 0.1)',
          color: '#0D47A1',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '600',
          border: '1px solid rgba(25, 118, 210, 0.2)'
        }}>
          {new Date(cita.hora).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
        <span style={{
          fontSize: '12px',
          color: cita.modalidad === 'Virtual' ? '#0D47A1' : '#1976D2',
          fontWeight: '600',
          backgroundColor: cita.modalidad === 'Virtual' ? 'rgba(25, 118, 210, 0.1)' : 'rgba(0, 150, 136, 0.1)',
          padding: '4px 10px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          border: `1px solid ${cita.modalidad === 'Virtual' ? 'rgba(25, 118, 210, 0.2)' : 'rgba(0, 150, 136, 0.2)'}`
        }}>
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: cita.modalidad === 'Virtual' ? '#1976D2' : '#009688',
            marginRight: '6px'
          }}></span>
          {cita.modalidad || 'Presencial'}
        </span>
      </div>
    </div>
  );
};

export default CitaItem;
