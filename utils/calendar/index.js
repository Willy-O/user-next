export default function MyCalendar () {
  const calendarEl = document.getElementById('calendar')
  // Get buttonText depend on Window size
  const prev = '<'
  const next = '>'
  const month = 'Mes'
  const week = 'Semana'
  const day = 'Día'
  const list = 'Agenda'

  // eslint-disable-next-line no-undef
  const calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    buttonText: {
      prev: prev,
      next: next,
      today: 'Hoy',
      month: month,
      week: week,
      day: day,
      list: list
    },
    initialDate: '2020-09-12',
    locale: 'es',
    editable: true,
    navLinks: true,
    firstDay: 1,
    dayMaxEvents: true,
    weekText: 'Sm',
    allDayText: 'Todo el día',
    moreLinkText: 'más',
    noEventsText: 'No hay eventos para mostrar',
    loading: function (bool) {
      document.getElementById('loading').style.display =
        bool ? 'block' : 'none'
    }
  })

  calendar.render()
}
