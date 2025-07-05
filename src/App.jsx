import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListaPaginadaDeCitas from './components/ListaPaginadaDeCitas';
import DetalleCita from './components/DetalleCita';

const App = () => {
  const [citas, setCitas] = useState([]);
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);

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

  return (
  <div
    style={{
      display: 'flex',
      padding: '20px',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '40px', // Espacio entre los dos cuadros
    }}
  >
    {/* 🟦 Panel izquierdo: citas disponibles */}
    <div
      style={{
        width: '500px', // ⬅️ Fijo: ya no se expande ni se achica
        minHeight: '450px',
        boxSizing: 'border-box',
      }}
    >
      <h2>Citas disponibles</h2>
      <ListaPaginadaDeCitas citas={citas} onSelect={setCitaSeleccionada} />
    </div>

    {/* 🟥 Panel derecho: detalle de la cita */}
    <div
      style={{
        width: '450px', // ⬅️ También fijo, para no mover el layout
        border: '1px solid #ccc',
        padding: '15px',
        borderRadius: '8px',
        minHeight: '250px',
        marginTop: '75px',
        boxSizing: 'border-box',
        transition: 'all 0.3s ease',
      }}
    >
      <DetalleCita cita={citaSeleccionada} onAgendada={fetchCitas} />
    </div>
  </div>
);

};

export default App;
