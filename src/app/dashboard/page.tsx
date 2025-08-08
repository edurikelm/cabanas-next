export default function Dashboard() {
  return (
    <div className="drawer lg:drawer-open bg-base-100">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Dashboard content */}
        <main className="p-6 space-y-6">
          {/* KPI Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card bg-primary text-primary-content shadow-md">
              <div className="card-body">
                <h3 className="text-sm opacity-80">Ventas hoy</h3>
                <p className="text-2xl font-bold">$2.450</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md border border-base-200">
              <div className="card-body">
                <h3 className="text-sm text-base-content/70">
                  Nuevos usuarios
                </h3>
                <p className="text-2xl font-bold">54</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md border border-base-200">
              <div className="card-body">
                <h3 className="text-sm text-base-content/70">
                  Órdenes pendientes
                </h3>
                <p className="text-2xl font-bold">13</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md border border-base-200">
              <div className="card-body">
                <h3 className="text-sm text-base-content/70">
                  Clientes activos
                </h3>
                <p className="text-2xl font-bold">238</p>
              </div>
            </div>
          </section>

          {/* Gráficos o tabla */}
          <section className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body">
              <h2 className="text-lg font-semibold mb-4">Actividad reciente</h2>
              <div className="text-sm text-base-content/70">
                Aquí podría ir un gráfico o tabla de eventos.
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
