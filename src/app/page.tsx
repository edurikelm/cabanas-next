'use client';

import { useEffect, useState } from 'react';
import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { motion } from 'framer-motion';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// import CalendarComponent from '@/components/Calendar';

// import { transformarArriendosAEventos } from '@/lib/utils';
import { Arriendo } from '@/types/arriendos';

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (date: Date) => startOfWeek(date, { locale: es }),
  getDay,
  locales: { es },
});

type cabanasTipo = {
  value: Arriendo['cabana'];
  color: string;
};

const CABANAS: cabanasTipo[] = [
  { value: 'Regional Uno', color: '#6366f1' }, // indigo-500
  { value: 'Regional Dos', color: '#14b8a6' }, // teal-500
  { value: 'Regional Tres', color: '#10b981' }, // emerald-500
  { value: 'Regional Cuatro', color: '#8b5cf6' }, // violet-500
  { value: 'Teja Uno', color: '#f59e0b' }, // amber-500
  { value: 'Teja Dos', color: '#ef4444' }, // red-500
  { value: 'Teja Tres', color: '#d10ef8' }, // cyan-500
];

export default function Home() {

  const fetchEvents = async () => {
    const response = await fetch('/api/eventos');
    if (!response.ok) {
      throw new Error('Error fetching events');
    }
    const data = await response.json();
    const eventsRes = data.map((event: any) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
    setEvents(eventsRes);
  };

  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    fetchEvents();
    console.log('Calendar mounted');
  }, []);

  return (
    <main className="w-full p-6">
      <h1 className="text-2xl font-semibold text-neutral-800 dark:text-white mb-6">
        Mi Calendario de Eventos
      </h1>
      {events.length > 0 ? (
        <div style={{ height: '700px', padding: 20, backgroundColor: '#fff', color: '#000' }}>
          <Calendar
            popup={false}
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%' }}
            views={[Views.MONTH, Views.WEEK, Views.DAY]}
            defaultView={Views.MONTH}
            culture="es"
            messages={{
              today: 'Hoy',
              previous: 'Atrás',
              next: 'Siguiente',
              month: 'Mes',
              week: 'Semana',
              day: 'Día',
            }}
            eventPropGetter={(event) => {
              const backgroundColor =
                CABANAS.find((c) => c.value === event.cabana)?.color ||
                'bg-gray-500';
              return {
                style: {
                  backgroundColor: backgroundColor,
                  borderRadius: '0.5rem',
                  border: 'none',
                  padding: '2px 4px',
                },
              };
            }}
            components={{
              event: ({ event }: { event: Arriendo }) => (
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-white text-xs font-medium"
                >
                  {event.title}
                </motion.div>
              ),
            }}
          />
        </div>
      ) : (
        <p className="text-neutral-600 dark:text-neutral-400 text-center">
          Cargando calendario...
        </p>
      )}
    </main>
  );
}
