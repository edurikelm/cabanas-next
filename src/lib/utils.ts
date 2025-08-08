import { Arriendo } from "@/types/arriendos";

// Utility function to transform Arriendo data into a format suitable for the calendar component
export const transformarArriendosAEventos = (arriendos: Arriendo[]) => {

  // console.log(arriendos);
  
return arriendos.map((a) => ({
  ...a,
  start: new Date(a.start),
  end: new Date(a.end)
}));
};