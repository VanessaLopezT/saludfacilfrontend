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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: '#e3f2fd',
        textAlign: 'center',
        padding: '40px 20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '12px',
        border: '2px dashed rgba(255, 255, 255, 0.3)'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: 'rgba(25, 118, 210, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
          color: '#1976D2',
          fontSize: '32px',
          border: '2px solid rgba(25, 118, 210, 0.3)'
        }}>
          ⌕
        </div>
        <h3 style={{ margin: '0 0 8px', color: '#e3f2fd' }}>No hay cita seleccionada</h3>
        <p style={{ margin: '0', fontSize: '14px', color: '#bbdefb' }}>Selecciona una cita para ver los detalles</p>
      </div>
    );
  }

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid rgba(255, 255, 255, 0.5)'
    }}>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{
          margin: '0 0 20px',
          color: '#0D47A1',
          fontSize: '20px',
          fontWeight: '600',
          paddingBottom: '12px',
          borderBottom: '1px solid rgba(25, 118, 210, 0.2)'
        }}>
          Detalles de la cita
        </h3>
        
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#e3f2fd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1565c0',
            fontSize: '24px',
            fontWeight: '600',
            marginRight: '16px',
            flexShrink: 0,
            border: '2px solid #bbdefb',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <span style={{ marginTop: '-2px' }}>{cita.doctor?.nombre_completo?.charAt(0) || 'D'}</span>
          </div>
          <div>
            <p style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: '600', color: '#333' }}>
              {cita.doctor?.nombre_completo || 'Doctor no disponible'}
            </p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>Médico Especialista</p>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '12px',
            padding: '12px',
            backgroundColor: '#F5F5F5',
            borderRadius: '8px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#e3f2fd',
              marginRight: '12px',
              flexShrink: 0,
              border: '1px solid #bbdefb'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2V5" stroke="#1565c0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 2V5" stroke="#1565c0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.5 9.08997H20.5" stroke="#1565c0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#1565c0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.6947 13.7H15.7037" stroke="#1565c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.6947 16.7H15.7037" stroke="#1565c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.9955 13.7H12.0045" stroke="#1565c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.9955 16.7H12.0045" stroke="#1565c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.29431 13.7H8.30329" stroke="#1565c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.29431 16.7H8.30329" stroke="#1565c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p style={{ margin: '0 0 2px', fontSize: '14px', color: '#757575' }}>Fecha</p>
              <p style={{ margin: 0, fontWeight: '500', color: '#333' }}>
                {new Date(cita.fecha).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '12px',
            padding: '12px',
            backgroundColor: '#F5F5F5',
            borderRadius: '8px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#e3f2fd',
              marginRight: '12px',
              flexShrink: 0,
              border: '1px solid #bbdefb'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12L15 15" stroke="#1565c0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#1565c0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p style={{ margin: '0 0 2px', fontSize: '14px', color: '#757575' }}>Hora</p>
              <p style={{ margin: 0, fontWeight: '500', color: '#333' }}>
                {new Date(cita.hora).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '12px',
            padding: '12px',
            backgroundColor: '#F5F5F5',
            borderRadius: '8px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#e3f2fd',
              marginRight: '12px',
              flexShrink: 0,
              border: '1px solid #bbdefb'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8.5H22" stroke="#1565c0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 16.5H8" stroke="#1565c0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5 16.5H14.5" stroke="#1565c0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.44 3.5H17.55C21.11 3.68 22 4.76 22 8.86V15.15C22 19.26 21.11 20.34 17.55 20.51H6.44C2.89 20.34 2 19.26 2 15.16V8.86C2 4.76 2.89 3.68 6.44 3.5Z" stroke="#1565c0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p style={{ margin: '0 0 2px', fontSize: '14px', color: '#757575' }}>Modalidad</p>
              <p style={{ margin: 0, fontWeight: '500', color: '#333' }}>
                {cita.modalidad || 'No especificada'}
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px',
            backgroundColor: '#F5F5F5',
            borderRadius: '8px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#e3f2fd',
              marginRight: '12px',
              flexShrink: 0,
              border: '1px solid #bbdefb'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z" stroke="#1565c0" strokeWidth="1.5"/>
                <path d="M3.62 8.49C5.59 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C14.16 21.88 9.87 21.88 8.44 20.54C5.67 17.88 2.47 13.57 3.62 8.49Z" stroke="#1565c0" strokeWidth="1.5"/>
              </svg>
            </div>
            <div>
              <p style={{ margin: '0 0 2px', fontSize: '14px', color: '#757575' }}>Ubicación</p>
              <p style={{ margin: 0, fontWeight: '500', color: '#333' }}>
                {cita.ubicacion || 'No especificada'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'auto', textAlign: 'center' }}>
        <button
          onClick={handleAgendar}
          style={{
            background: 'linear-gradient(135deg, #1976D2 0%, #0D47A1 100%)',
            color: 'white',
            border: 'none',
            padding: '14px 24px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            width: '100%',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(13, 71, 161, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(13, 71, 161, 0.4)'
            },
            ':active': {
              transform: 'translateY(0)'
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}
        >
          <span>Agendar cita</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '1px' }}>
            <path d="M8.5 5L15.5 12L8.5 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DetalleCita;
