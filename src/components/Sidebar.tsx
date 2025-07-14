'use client';

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [view, setView] = useState('calendario');

  const navItems = [
    { id: 'calendario', href: '/', label: 'Calendario' },
    { id: 'estadisticas', href: '/estadisticas', label: 'Estadísticas' },
    { id: 'propiedades', href: '/propiedades', label: 'Propiedades' },
    { id: 'dashboard', href: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <aside className="menu w-72 bg-base-200 text-base-content h-screen">
      <h2 className="text-xl font-bold mb-6">Calendario App</h2>
      <ul className="menu w-full">
        <li className="flex-1 py-6 space-y-2">
          {navItems.map((item) => (
            <Link
              onClick={() => setView(item.id)}
              key={item.id}
              href={item.href}
              className={`hover:bg-base-100 rounded px-4 py-3 ${
                view === item.id
                  ? 'font-semibold bg-white/10 text-base-content'
                  : 'font-normal'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </li>
      </ul>
    </aside>
  );
}
