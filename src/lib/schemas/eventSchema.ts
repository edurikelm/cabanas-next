import { z } from "zod";

export const eventSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Campo obligatorio'),
  start: z.string(),
  end: z.string(),
  descuento: z.boolean(),
  pago: z.boolean().optional(),
  ubicacion: z.string().optional(),
  cabana: z.enum([
  "Regional Uno",
  "Regional Dos",
  "Regional Tres",
  "Regional Cuatro",
  "Teja Uno",
  "Teja Dos",
  "Teja Tres"
]),
  celular: z.string(),
  valorTotal: z.number('Campo obligatorio').positive('Debe ser un número positivo'),
  valorNoche: z.number('Campo obligatorio').positive('Debe ser un número positivo'),
  cantDias: z.number().positive('Debe ser un número positivo'),
  cantPersonas: z.number().positive('Debe ser un número positivo'),
});

export type CalendarEvent = z.infer<typeof eventSchema>