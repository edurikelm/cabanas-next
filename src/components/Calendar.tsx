'use client';

import { Calendar, Views } from 'react-big-calendar';
import { localizer } from '@/lib/localizer';
import { Arriendo } from '@/types/arriendos';
import { motion } from 'framer-motion';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles/calendar-overrides.css';
import CalendarFilter from './ui/CalendarFilter';

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
]

export default function CalendarComponent({
  eventos,
}: {
  eventos: Arriendo[];
}) {
  return (
    <>
      <CalendarFilter cabanas={CABANAS} />
      <div className="shadow-xl p-4 bg-white border border-neutral-200 dark:border-neutral-800 h-[700px]">
        <Calendar
          popup={false}
          localizer={localizer}
          events={eventos}
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
            const backgroundColor = CABANAS.find(
              (c) => c.value === event.cabana
            )?.color || 'bg-gray-500';
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
    </>
  );
}
