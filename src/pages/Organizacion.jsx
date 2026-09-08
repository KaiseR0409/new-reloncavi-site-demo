const TEAMS = [
  {
    name: "Gerencia",
    members: [
      { img: "13marianne", name: "Marianne Pérez Sánchez", role: "Subgerente de RRHH y RRLL" },
      { img: "5francisco", name: "Francisco Moraga Hernández", role: "Sub Gerente de Operaciones Bio Bio" },
      { img: "16thomas", name: "Thomas Kümmerlin Gottschald", role: "Gerencia General" },
      { img: "14martinlazo", name: "Martín Lazo Cifuentes", role: "Subgerente de Administración y Finanzas" },
      { img: "equipofgaray", name: "Francisco Garay Sepúlveda", role: "Sub Gerente de Operaciones Los Lagos" },
    ],
  },
  {
    name: "Jefatura",
    members: [
      { img: "18ximena", name: "Ximena Faúndez Oreña", role: "Jefe de Contabilidad" },
      { img: "11lorena", name: "Lorena González Salinas", role: "Jefe de Operaciones" },
      { img: "15segundo", name: "Segundo Lazcano Barra", role: "Jefe de Faenas Celulosa" },
      { img: "3christian", name: "Christian Bustamante Torres", role: "Jefe Mantención Región de Los Lagos" },
      { img: "9juan", name: "Juan Rodríguez Valdes", role: "Jefe de Operación y Administración" },
    ],
  },
  {
    name: "Supervisores",
    members: [
      { img: "6hugo", name: "Hugo Araneda Riquelme", role: "Supervisor Mantención" },
      { img: "equipojaime", name: "Jaime Rivera Sánchez", role: "Supervisor de Operaciones" },
      { img: "1sergiocambios", name: "Sergio Vásquez Rubilar", role: "Supervisor de Operaciones" },
      { img: "2boriscambio", name: "Boris González Ovando", role: "Supervisor de Operaciones" },
      { img: "17victor", name: "Victor Ruiz Levican", role: "Supervisor de Operaciones" },
    ],
  },
]

export default function Organizacion() {
  return (
    <div>
      <section className="bg-lust py-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-white">Organización</h1>
      </section>
      <div className="bg-isabelline py-12 px-6">
        {TEAMS.map((team) => (
          <section key={team.name} className="max-w-7xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-lust text-center mb-8">{team.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {team.members.map((m) => (
                <div key={m.name} className="text-center">
                  <img
                    src={`/img/equipo/${m.img}.jpg`}
                    alt={m.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover shadow"
                  />
                  <h3 className="mt-3 font-semibold text-outer-space text-sm">{m.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{m.role}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
