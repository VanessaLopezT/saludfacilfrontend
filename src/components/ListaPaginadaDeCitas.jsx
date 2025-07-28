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
    <div style={{ width: '100%' }}>
      <div
        ref={contenedorRef}
        style={{
          maxHeight: '600px',
          overflowY: 'auto',
          padding: '8px',
          boxSizing: 'border-box',
          borderRadius: '12px',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#c1c1c1',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#a8a8a8',
          },
        }}
      >
        {citasPaginadas.length === 0 ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            backgroundColor: '#fafafa',
            borderRadius: '12px',
            border: '2px dashed #e0e0e0',
            color: '#9e9e9e',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '16px',
              lineHeight: 1
            }}>
              📅
            </div>
            <h3 style={{ margin: '0 0 8px', color: '#757575' }}>No hay citas disponibles</h3>
            <p style={{ margin: 0, fontSize: '14px' }}>No se encontraron citas programadas</p>
          </div>
        ) : (
          citasPaginadas.map((cita) => (
            <CitaItem key={cita.id} cita={cita} onSelect={onSelect} />
          ))
        )}
      </div>

      {totalPaginas > 1 && (
        <div style={{ 
          marginTop: '24px', 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 0'
        }}>
          <button
            onClick={() => cambiarPagina(paginaActual - 1)}
            disabled={paginaActual === 1}
            style={{
              padding: '8px 12px',
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '6px',
              cursor: paginaActual === 1 ? 'not-allowed' : 'pointer',
              opacity: paginaActual === 1 ? 0.5 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              color: '#1976D2',
              fontSize: '18px',
              '&:hover:not(:disabled)': {
                backgroundColor: '#e9ecef'
              },
              '&:focus': {
                outline: 'none',
                boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.3)'
              }
            }}
          >
            ‹
          </button>
          
          {Array.from({ length: Math.min(5, totalPaginas) }, (_, i) => {
            let pageNum;
            if (totalPaginas <= 5) {
              pageNum = i + 1;
            } else if (paginaActual <= 3) {
              pageNum = i + 1;
            } else if (paginaActual >= totalPaginas - 2) {
              pageNum = totalPaginas - 4 + i;
            } else {
              pageNum = paginaActual - 2 + i;
            }
            
            return (
              <button
                key={pageNum}
                onClick={() => cambiarPagina(pageNum)}
                style={{
                  width: '36px',
                  height: '36px',
                  minWidth: '36px',
                  border: '1px solid #dee2e6',
                  backgroundColor: paginaActual === pageNum ? '#1976D2' : '#fff',
                  color: paginaActual === pageNum ? 'white' : '#495057',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  fontWeight: paginaActual === pageNum ? '600' : '400',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: paginaActual === pageNum ? '#1565c0' : '#f1f3f5',
                    borderColor: '#adb5bd'
                  },
                  '&:focus': {
                    outline: 'none',
                    boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.3)'
                  }
                }}
              >
                {pageNum}
              </button>
            );
          })}
          
          <button
            onClick={() => cambiarPagina(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
            style={{
              padding: '8px 12px',
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '6px',
              cursor: paginaActual === totalPaginas ? 'not-allowed' : 'pointer',
              opacity: paginaActual === totalPaginas ? 0.5 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              color: '#1976D2',
              fontSize: '18px',
              '&:hover:not(:disabled)': {
                backgroundColor: '#e9ecef'
              },
              '&:focus': {
                outline: 'none',
                boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.3)'
              }
            }}
          >
            ›
          </button>
          
          {totalPaginas > 5 && (
            <div style={{ 
              marginLeft: '12px',
              color: '#666',
              fontSize: '14px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '4px 12px',
              borderRadius: '12px'
            }}>
              Página {paginaActual} de {totalPaginas}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ListaPaginadaDeCitas;
