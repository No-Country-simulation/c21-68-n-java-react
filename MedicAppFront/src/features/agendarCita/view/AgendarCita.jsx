import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useAuth } from '../../../core/auth/hook/useAuth';
const AgendarCita = () => {
  const { logOut, isLoggedIn } = useAuth();
  return (
    <>
    <button onClick={logOut} className="mb-3">Cerrar sesión</button>
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    />
    </>
    
  )
}

export default AgendarCita