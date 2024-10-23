import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useAuth } from '../../../core/auth/hook/useAuth';
const AgendarCita = () => {
  const { logOut, isLoggedIn } = useAuth();
  const handleDateClick = (arg) => {
    // Aquí puedes manejar la fecha seleccionada
    console.log('Fecha seleccionada: ', arg.date);
    // Puedes agregar más lógica aquí, como abrir un modal para agendar la cita
  };
  const events = [
    { title: 'Meeting', start: new Date() }
  ]
  // a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}
function hizoClick(){
  console.log('hizo click')
}
  return (
    <>
    <button onClick={logOut} className="mb-3">Cerrar sesión</button>
    <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[]} // Puedes agregar eventos si es necesario
        dateClick={handleDateClick} // Manejador de clics
        editable={true} // Manejador de clics
        eventClick={hizoClick}
      />
    </>
    
  )
}

export default AgendarCita