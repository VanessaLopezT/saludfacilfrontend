import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListaPaginadaDeCitas from './components/ListaPaginadaDeCitas';
import DetalleCita from './components/DetalleCita';
import Login from './components/Login';

const App = () => {
  const [citas, setCitas] = useState([]);
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCitaSeleccionada(null);
  };

  const fetchCitas = async () => {
    try {
      const response = await axios.get('http://localhost:3000/schedule');
      const disponibles = response.data.filter(cita => cita.estado === 'Disponible');
      setCitas(disponibles);
      setCitaSeleccionada(null);
    } catch (error) {
      console.error('Error al obtener las citas:', error);
    }
  };

  useEffect(() => {
    fetchCitas();
  }, []);

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'auto',
          backgroundImage: 'url(\'https://www.telemundo.com/sites/nbcutelemundo/files/styles/social_share_1024x768_scale/public/images/gallery/2017/10/02/cirujanos-realizando-una-operacion-11.jpg?ramen_itok=iqwQftIcTf\')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          padding: '20px 0'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '40px',
            padding: '20px',
            maxWidth: '1400px',
            width: '100%',
            margin: '0 auto',
            boxSizing: 'border-box',
            flexWrap: 'wrap'
          }}>
            {/* 🟦 Panel izquierdo: citas disponibles */}
            <div
              style={{
                width: '500px',
                minHeight: '450px',
                boxSizing: 'border-box',
                flexShrink: 0
              }}
            >
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  cursor: 'pointer',
                  color: '#757575',
                  ':hover': {
                    color: '#0D47A1'
                  }
                }} onClick={handleLogout}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h1 style={{
                  margin: '0 0 8px 0',
                  color: '#0D47A1',
                  fontSize: '32px',
                  fontWeight: '700',
                  letterSpacing: '-0.5px',
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif',
                  textShadow: '0 1px 2px rgba(0,0,0,0.05)'
                }}>
                  SaludFácil
                </h1>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: '12px'
                }}>
                  <span style={{
                    color: '#0D47A1',
                    fontSize: '14px',
                    fontWeight: '600',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    backgroundColor: 'rgba(13, 71, 161, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '4px'
                  }}>
                    Citas Médicas
                  </span>
                  <span style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#1976D2',
                    opacity: '0.6'
                  }}></span>
                  <span style={{
                    color: '#424242',
                    fontSize: '14px',
                    fontWeight: '500',
                    backgroundColor: 'rgba(66, 66, 66, 0.05)',
                    padding: '4px 10px',
                    borderRadius: '4px'
                  }}>
                    {citas.length} disponibles
                  </span>
                </div>
              </div>
              <ListaPaginadaDeCitas citas={citas} onSelect={setCitaSeleccionada} />
            </div>

            {/* 🟥 Panel derecho: detalle de la cita */}
            <div
              style={{
                width: '450px',
                padding: '15px',
                minHeight: '250px',
                marginTop: '108px',  
                boxSizing: 'border-box',
                flexShrink: 0,
                position: 'relative',
                top: '40px'  
              }}
            >
              <DetalleCita cita={citaSeleccionada} onAgendada={fetchCitas} />
            </div>
          </div>
        </div>
  );

};

export default App;
