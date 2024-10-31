/* import React from 'react'
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

export default AgendarCita */

import React, { useState, useEffect } from 'react'
// import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import { Navigate, useNavigate } from 'react-router-dom'
import multiMonthPlugin from '@fullcalendar/multimonth'

// export default function AgendarCita() {
//   const [weekendsVisible, setWeekendsVisible] = useState(true)
//   const [currentEvents, setCurrentEvents] = useState([])
//   const navigate = useNavigate(); 

//   function handleWeekendsToggle() {
//     setWeekendsVisible(!weekendsVisible)
//   }

//   // funcion para agregar evento
//   function handleDateSelect(selectInfo) {
    
//      const today = new Date();
//     const selectedDate = new Date(selectInfo.startStr );

//     if (selectedDate < today) {
//       alert('No puedes seleccionar fechas pasadas.');
//       return;
//     } 
//    console.log(selectInfo.startStr)
//     //let title = prompt('ingrese el dni')
//     let calendarApi = selectInfo.view.calendar
//     // aca deberia recibir los datos desde el backend
//     let nombre = " esteban quito"
//     calendarApi.unselect() // clear date selection
//     const event = {
//       id: createEventId(),
//       nombre,
//       dia: selectInfo.startStr,
//      // end: selectInfo.endStr,
//      // allDay: selectInfo.allDay,
//      hora:"",
//   };
    
//     if (nombre) {
//       calendarApi.addEvent(event)
//     }
//     navigate('/paciente/horario',{ state: { event } })
//   }

// // funcion para borrar un evento
//   function handleEventClick(clickInfo) {
//     if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//       clickInfo.event.remove()
//     }
//   }

//   function handleEvents(events) {
//     setCurrentEvents(events)
//   }

//   return (
//     <div className='demo-app'>

//       <div className='demo-app-main'>
//         <FullCalendar
//           plugins={[multiMonthPlugin]}
//           headerToolbar={{
//             // left: 'prev,next today',
//             center: 'title',
//             // right: 'dayGridMonth,timeGridWeek,timeGridDay'
//           }}
//           initialView='multiMonthPlugin'
//           editable={true}
//           selectable={true}
//           selectMirror={true}
//           dayMaxEvents={true}
//           weekends={weekendsVisible}
//       //    initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
//           select={handleDateSelect}
//      //     eventContent={renderEventContent} // custom render function
//           eventClick={handleEventClick}
//           eventsSet={handleEvents} // called after events are initialized/added/changed/removed
//           /* you can update a remote database when these fire:
//           eventAdd={function(){}}
//           eventChange={function(){}}
//           eventRemove={function(){}}
//           */
//         />
//       </div>
//     </div>
//   )
// }

const Calendar = () => {

	// export default function AgendarCita() {
	const [weekendsVisible, setWeekendsVisible] = useState(true)
	const [currentEvents, setCurrentEvents] = useState([])
	const navigate = useNavigate();

	function handleWeekendsToggle() {
		setWeekendsVisible(!weekendsVisible)
	}

	// funcion para agregar evento
	function handleDateSelect(selectInfo) {
		console.log('clic');
		
		// Obtener la fecha actual real
		const today = new Date();
		today.setHours(0, 0, 0, 0); // Resetear las horas para comparar solo fechas
		
		const selectedDate = new Date(selectInfo.startStr);

		if (selectedDate < today) {
			alert('No puedes seleccionar fechas pasadas.');
			return;
		}

		let calendarApi = selectInfo.view.calendar;
		calendarApi.unselect(); // clear date selection

		const event = {
			id: createEventId(),
			title: 'Nueva cita', // Agregar un título es importante
			nombre: "Esteban Quito",
			dia: selectInfo.startStr, // Usar 'start' en lugar de 'dia'
			hora: "",
		};

		// Agregar el evento al calendario
		calendarApi.addEvent(event);
		
		// Navegar a la página de horario
		navigate('/paciente/horario', { state: { event } });
	}

	// funcion para borrar un evento
	function handleEventClick(clickInfo) {
		if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
			clickInfo.event.remove()
		}
	}

	function handleEvents(events) {
		setCurrentEvents(events)
	}

	return (
		<div className='calendar-container'>
			<FullCalendar
				plugins={[multiMonthPlugin, dayGridPlugin, interactionPlugin]}
				initialView='multiMonthYear'
				editable={true}
				selectable={true}
				selectMirror={true}
				dayMaxEvents={true}
				weekends={weekendsVisible}
				select={handleDateSelect}
				eventClick={handleEventClick}
				// eventsSet={handleEvents}
				views={{
					multiMonthYear: {
						type: 'multiMonth',
						duration: { months: 6 },
						multiMonthMaxColumns: 3,
						multiMonthMinWidth: 300,
						selectable: true
					},
					dayGridMonth: {
						type: 'dayGrid',
						duration: { months: 1 },
						selectable: true
					}
				}}
				headerToolbar={{
					left: 'prev,next today',
					center: 'title',
					right: 'multiMonthYear,dayGridMonth'
				}}
				height="auto"
				locale="es" // Para español
				events={[
					{
						title: 'Evento de ejemplo',
						start: '2024-10-31'
					}
				]}
				validRange={{
					start: new Date()
				}}
				dayCellClassNames={(arg) => {
					const today = new Date();
					return arg.date < today ? ['disabled-day'] : [];
				}}
				eventAdd={function(){}}
				eventChange={function(){}}
				eventRemove={function(){}}
			/>
		</div>
	);
};

export default Calendar;