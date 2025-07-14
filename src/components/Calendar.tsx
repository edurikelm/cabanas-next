'use client';

import { Calendar, Views } from 'react-big-calendar';
import { localizer } from '@/lib/localizer';
import { useMemo } from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles/calendar-overrides.css';

export default function CalendarComponent() {

  const events = useMemo(() => [
    {
      title: 'Evento de prueba',
      start: new Date(),
      end: new Date(),
    },
  ], []);


  return ( 
    <div className="rounded-2xl shadow-xl p-4 bg-white dark:bg-base-300 border border-neutral-200 dark:border-neutral-800 h-[600px]">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
        defaultView={Views.MONTH}
        messages={{
          today: 'Hoy',
          previous: 'Atrás',
          next: 'Siguiente',
          month: 'Mes',
          week: 'Semana',
          day: 'Día',
        }}

      />
    </div>
  );
}