import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';


const Horario = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { event } = location.state || {};

  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ];

  const specialties = [
    'Traumatólogo',
    'Cardiólogo',
    'Pediatra',
    'Dermatólogo',
    'Oftalmólogo',
    'Ginecólogo',
    'Endocrinólogo',
  ];
  const [year, month, day] = event.dia.split('-'); // Descompone la fecha
  const formattedDate = `${day}/${month}/${year}`; // Formato DD/MM/YYYY

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSpecialtyChange = (e) => {
    setSelectedSpecialty(e.target.value);
  };

  const handleCancel = () => {
    navigate('/agendar_cita'); // Redirige a la página principal
  };

  const handleConfirm = () => {
    alert(`Turno confirmado para el paciente: ${event.nombre} a las: ${selectedTime} con el especialista: ${selectedSpecialty}.`);
    // aca debe enviar los datos al servidor
    navigate('/'); // Redirige después de confirmar
  };

  if (!event) {
    return <div className="alert alert-warning">No hay evento seleccionado.</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Detalles del Turno</h1>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{event.nombre}</h2>
          <p className="card-text"><strong>ID:</strong> {event.id}</p>
          <p className="card-text"><strong>Dia:</strong> {formattedDate}</p>
          {/* <p className="card-text"><strong>Fin:</strong> {new Date(event.end).toLocaleString()}</p> */}
          {/* <p className="card-text"><strong>Todo el día:</strong> {event.allDay ? 'Sí' : 'No'}</p> */}

          <div className="form-group mt-3">
            <label htmlFor="visitTime">Selecciona un horario de visita:</label>
            <select
              id="visitTime"
              className="form-control"
              value={selectedTime}
              onChange={handleTimeChange}
            >
              <option value="">Elige un horario</option>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {selectedTime && (
            <div className="mt-3">
              <p><strong>Horario seleccionado:</strong> {selectedTime}</p>
            </div>
          )}

          {/* Select para especialidades médicas */}
          <div className="form-group mt-3">
            <label htmlFor="specialty">Selecciona una especialidad médica:</label>
            <select
              id="specialty"
              className="form-control"
              value={selectedSpecialty}
              onChange={handleSpecialtyChange}
            >
              <option value="">Elige una especialidad</option>
              {specialties.map((specialty, index) => (
                <option key={index} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>

          {selectedSpecialty && (
            <div className="mt-3">
              <p><strong>Especialidad seleccionada:</strong> {selectedSpecialty}</p>
            </div>
          )}

          <div className="mt-4">
            <button className="btn btn-danger me-2" onClick={handleCancel}>
              Cancelar
            </button>
            <button
              className="btn btn-success"
              onClick={handleConfirm}
              disabled={!selectedTime || !selectedSpecialty} // Deshabilitar si no hay horario o especialidad seleccionada
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horario