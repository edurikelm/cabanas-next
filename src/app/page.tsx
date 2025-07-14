import CalendarComponent from "@/components/Calendar";

export default function Home() {
  return (
    <main className="w-full p-6">
      <h1 className="text-2xl font-semibold text-neutral-800 dark:text-white mb-6">Mi Calendario de Eventos</h1>
      <CalendarComponent />
    </main>
  );
}
