import CalendarComponent from "@/components/Calendar";
import { transformarArriendosAEventos } from "@/lib/utils";
import getArriendos from "@/lib/arriendos";

export default async function Home() {

  const dataFirestore = await getArriendos();

  // Transformar los datos a un formato adecuado para el calendario
  const eventos = transformarArriendosAEventos(dataFirestore);

  return (
    <main className="w-full p-6">
      <h1 className="text-2xl font-semibold text-neutral-800 dark:text-white mb-6">Mi Calendario de Eventos</h1>
      <CalendarComponent eventos={eventos} />
    </main>
  );
}
