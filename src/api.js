import axios from 'axios';

// Actualiza el estado de la cita a Agendada
export const agendarCita = async (id, citaData) => {
  try {
    const response = await axios.patch(`https://saludfacilbackend-production.up.railway.app/schedule/${id}`, citaData);
    return response.data;
  } catch (error) {
    console.error('Error al agendar la cita:', error);
    throw error;
  }
};
