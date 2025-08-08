'use server';

import { postArriendo } from "@/services/arriendos";
import { Arriendo } from "@/types/arriendos";

export const createEvent = async (formData: Arriendo) => {
  await postArriendo(formData);
  console.log('Evento creado');
};
