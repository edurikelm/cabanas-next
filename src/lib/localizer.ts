import { dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { es as esCL } from 'date-fns/locale';

const locales = {
  es: esCL,
};

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (date:Date) => startOfWeek(date, { locale: esCL }),
  getDay,
  locales,
});
