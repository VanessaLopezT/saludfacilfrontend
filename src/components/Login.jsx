import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    setError('Por favor ingrese email y contraseña');
    return;
  }

  try {
    const response = await axios.post('https://saludfacilbackend-production.up.railway.app/auth/login', {
    email,
    password
  });


    const data = response.data;
    console.log('Login exitoso:', data);

    // Aquí puedes guardar el token si llega (ejemplo)
    localStorage.setItem('token', data.token); // Si viene un token
    onLogin(); // Continuar flujo
  } catch (error) {
    console.error('Error en login:', error);
    setError('Credenciales incorrectas o error del servidor');
  }
};


  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxSizing: 'border-box',
      backgroundImage: 'url(\'https://www.telemundo.com/sites/nbcutelemundo/files/styles/social_share_1024x768_scale/public/images/gallery/2017/10/02/cirujanos-realizando-una-operacion-11.jpg?ramen_itok=iqwQftIcTf\')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      overflow: 'auto'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.97)',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
        width: '100%',
        maxWidth: '420px',
        boxSizing: 'border-box',
        margin: '20px 0'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          <h1 style={{
            color: '#0D47A1',
            fontSize: '28px',
            fontWeight: '700',
            margin: '0 0 8px 0',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif'
          }}>
            SaludFácil
          </h1>
          <p style={{
            color: '#616161',
            margin: '0',
            fontSize: '15px'
          }}>
            Inicie sesión en su cuenta
          </p>
        </div>

        {error && (
          <div style={{
            backgroundColor: '#FFEBEE',
            color: '#C62828',
            padding: '12px',
            borderRadius: '6px',
            marginBottom: '20px',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#C62828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#424242',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Correo electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #E0E0E0',
                fontSize: '15px',
                boxSizing: 'border-box',
                transition: 'all 0.3s ease',
                ':focus': {
                  outline: 'none',
                  borderColor: '#1976D2',
                  boxShadow: '0 0 0 3px rgba(25, 118, 210, 0.2)'
                }
              }}
              placeholder="Ingrese su correo electrónico"
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              color: '#424242',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #E0E0E0',
                fontSize: '15px',
                boxSizing: 'border-box',
                transition: 'all 0.3s ease',
                ':focus': {
                  outline: 'none',
                  borderColor: '#1976D2',
                  boxShadow: '0 0 0 3px rgba(25, 118, 210, 0.2)'
                }
              }}
              placeholder="Ingrese su contraseña"
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#1976D2',
              color: 'white',
              border: 'none',
              padding: '14px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginBottom: '20px',
              ':hover': {
                backgroundColor: '#1565C0',
                transform: 'translateY(-1px)'
              },
              ':active': {
                transform: 'translateY(0)'
              }
            }}
          >
            Iniciar sesión
          </button>
        </form>


      </div>
    </div>
  );
};

export default Login;
