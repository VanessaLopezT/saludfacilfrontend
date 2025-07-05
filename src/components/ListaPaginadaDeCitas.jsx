import React, { useState, useRef, useEffect } from 'react';
import CitaItem from './CitaItem';

const ListaPaginadaDeCitas = ({ citas, onSelect }) => {
  const [paginaActual, setPaginaActual] = useState(1);
  const citasPorPagina = 5;
  const contenedorRef = useRef(null); 

  const indexInicio = (paginaActual - 1) * citasPorPagina;
  const indexFin = indexInicio + citasPorPagina;
  const citasPaginadas = citas.slice(indexInicio, indexFin);
  const totalPaginas = Math.ceil(citas.length / citasPorPagina);

  const cambiarPagina = (num) => {
    setPaginaActual(num);
  };

  useEffect(() => {
    if (contenedorRef.current) {
      contenedorRef.current.scrollTop = 0;
    }
  }, [paginaActual]);

  return (
    <div>
      <div
        ref={contenedorRef}
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          maxHeight: '400px',
          overflowY: 'auto',
          width: '95%', 
          boxSizing: 'border-box',
        }}
      >
        {citasPaginadas.length === 0 ? (
          <p>No hay citas disponibles</p>
        ) : (
          citasPaginadas.map((cita) => (
            <CitaItem key={cita.id} cita={cita} onSelect={onSelect} />
          ))
        )}
      </div>

      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        {Array.from({ length: totalPaginas }, (_, i) => (
          <button
            key={i}
            onClick={() => cambiarPagina(i + 1)}
            style={{
              margin: '2px',
              padding: '5px 10px',
              backgroundColor: paginaActual === i + 1 ? '#007bff' : '#f0f0f0',
              color: paginaActual === i + 1 ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListaPaginadaDeCitas;
