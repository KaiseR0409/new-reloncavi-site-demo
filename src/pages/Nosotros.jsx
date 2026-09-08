import { useState, useEffect } from "react"

const STATS = [
  { img: "/img/nosotros/TRABAJADOR.png", title: "250 trabajadores", desc: "que operan el Puerto de Puerto Montt y Plantas Celulosa" },
  { img: "/img/nosotros/icono2.png", title: "65 Equipos móviles", desc: "entre grúas horquillas, cargadores frontales, palas graneleras, tolvas y plantas de mezcla y ensacado" },
  { img: "/img/nosotros/icono1.png", title: "107.000 Metros cuadrados", desc: "de Bodega operados por nosotros: Empormontt 22.000 m2, Alto Bonito 8.000 m2, Mariquina 10.000 m2, Nueva Aldea 14.000 m2, Horcones 14.000 m2, MAPA 39.000 m2" },
]

const VOLUMEN = [
  { num: "300.000 ton.", desc: "Despachada desde bodegas" },
  { num: "200.000 ton.", desc: "Descarga desde naves" },
  { num: "3.400.000 adt", desc: "Celulosa despachada" },
]

const CLIENTES = [
  "/img/nosotros/logosem2.jpg",
  "/img/nosotros/logos-empresas3.jpg",
  "/img/nosotros/logos-empresas4.jpg",
  "/img/nosotros/logos-empresa5.jpg",
]

function useCarousel(len, interval = 3000) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % len), interval)
    return () => clearInterval(id)
  }, [len, interval])
  return i
}

export default function Nosotros() {
  const clientIdx = useCarousel(CLIENTES.length)

  return (
    <div>
      {/* INTRO */}
      <section className="bg-lust text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 items-center">
          <img src="/img/nosotros/isoreloncavi.png" alt="Reloncaví iso" className="mx-auto w-56" />
          <div>
            <p className="text-white/90">
              En Reloncaví el cliente es nuestra prioridad, por lo que nos destacamos en ofrecer
              una atención cercana, profesional y a la medida de cada uno, apoyándolo en la
              logística de su negocio y respondiendo de manera rápida y eficiente a sus
              requerimientos.
            </p>
            <p className="mt-4 text-white/90">Diseñamos y entregamos soluciones.</p>
            <p className="mt-4 text-white/90">
              Nuestra presencia geográfica nos permite prestar servicios en la zona sur del país
              como un aliado estratégico.
            </p>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="bg-white-2 py-12 px-6">
        <h3 className="text-center text-2xl font-bold text-lust mb-8">Historia</h3>
        <img src="/img/nosotros/copialinea.png" alt="Línea de tiempo" loading="lazy" className="mx-auto max-w-full" />
      </section>

      {/* STATS */}
      <section className="bg-isabelline py-12 px-6">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.title} className="text-center">
              <img src={s.img} alt={s.title} loading="lazy" className="mx-auto h-32 object-contain" />
              <h3 className="text-xl font-bold text-lust mt-4">{s.title}</h3>
              <p className="text-outer-space mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VOLUMEN */}
      <section
        className="bg-cover bg-center bg-fixed py-16 px-6 text-center text-white"
        style={{ backgroundImage: "url(/img/nosotros/foto5.jpg)" }}
      >
        <div className="bg-black/60 py-12 rounded-lg max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-lust mb-8">Volumen Anual</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {VOLUMEN.map((v) => (
              <div key={v.num}>
                <div className="text-4xl font-black">{v.num}</div>
                <p className="mt-2 text-white/80 uppercase text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="bg-white-2 py-12 px-6">
        <h3 className="text-center text-2xl font-bold text-lust mb-8">Principales Clientes</h3>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <img src={CLIENTES[clientIdx]} alt="Clientes" className="w-full rounded-lg shadow" />
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {CLIENTES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {}}
                className={`w-3 h-3 rounded-full ${idx === clientIdx ? "bg-lust" : "bg-gray-300"}`}
                aria-label={`Cliente ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OFICINAS Y OPERACIONES */}
      <section className="bg-isabelline py-12 px-6">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 items-start">
          <div>
            <h3 className="text-xl font-bold text-lust mb-4">Oficinas</h3>
            <ul className="space-y-2 text-outer-space">
              <li>Almirante Latorre 795 San Vicente, Talcahuano</li>
              <li>Avenida Angelmó 1673, Puerto Montt</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img src="/img/nosotros/MAP-.png" alt="Mapa" loading="lazy" className="max-h-72" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-lust mb-4">Operaciones</h3>
            <ul className="space-y-2 text-outer-space">
              <li>• Horcones</li>
              <li>• Nueva Aldea</li>
              <li>• Mariquina</li>
              <li>• Puerto Montt</li>
              <li>• Alto Bonito</li>
              <li>• Llanquihue</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
