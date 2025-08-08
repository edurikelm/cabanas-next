// Type for arriendos, extending the Firestore document data
export type Arriendo = {
  id: string;
  cabana: "Regional Uno" | "Regional Dos" | "Regional Tres" | "Regional Cuatro" | "Teja Uno" | "Teja Dos" | "Teja Tres";
  cantDias: number;
  cantPersonas: number;
  celular: string;
  descuento:boolean;
  end: string | Date;
  start: string | Date;
  pago?: boolean;
  title: string;
  valorNoche: number;
  valorTotal: number;
};