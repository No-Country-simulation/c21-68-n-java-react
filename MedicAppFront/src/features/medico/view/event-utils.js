
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Esteban quito',
    nombre: 'Esteban quito',
    start: todayStr,
    dia:'30/10/2024',
    hora:'11.00 AM'
  },
  {
    id: createEventId(),
    title: 'Aurelia Mejia Meliton',
    nombre: 'Aurelia Mejia Meliton',
    start: todayStr ,
    dia:'01/11/2024',
    hora:'11.00 AM'
  }
]

export function createEventId() {
  return String(eventGuid++)
}