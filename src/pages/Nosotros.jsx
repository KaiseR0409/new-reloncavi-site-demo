import CountUp from "../components/CountUp"
import StampedIcon from "../components/StampedIcon"
import useCarousel from "../hooks/useCarousel"

const STATS = [
  { img: "/img/nosotros/TRABAJADOR.png", value: 250, label: "trabajadores", desc: "que operan el Puerto de Puerto Montt y Plantas Celulosa" },
  { img: "/img/nosotros/icono2.png", value: 65, label: "Equipos móviles", desc: "entre grúas horquillas, cargadores frontales, palas graneleras, tolvas y plantas de mezcla y ensacado" },
  { img: "/img/nosotros/icono1.png", value: 107000, label: "Metros cuadrados", desc: "de Bodega operados por nosotros: Empormontt 22.000 m2, Alto Bonito 8.000 m2, Mariquina 10.000 m2, Nueva Aldea 14.000 m2, Horcones 14.000 m2, MAPA 39.000 m2" },
]

const VOLUMEN = [
  { value: 300000, unit: "ton.", desc: "Despachada desde bodegas" },
  { value: 200000, unit: "ton.", desc: "Descarga desde naves" },
  { value: 3400000, unit: "adt", desc: "Celulosa despachada" },
]

const CLIENTES = [
  "/img/nosotros/logosem2.jpg",
  "/img/nosotros/logos-empresas3.jpg",
  "/img/nosotros/logos-empresas4.jpg",
  "/img/nosotros/logos-empresa5.jpg",
]

function StatCard({ s, idx }) {
  return (
    <div className="text-center">
      <StampedIcon src={s.img} alt={s.label} delay={idx * 180} className="mx-auto h-32 object-contain" />
      <h3 className="text-xl font-bold text-lust mt-4"><CountUp value={s.value} /> {s.label}</h3>
      <p className="text-outer-space mt-2">{s.desc}</p>
    </div>
  )
}

export default function Nosotros() {
  const clientIdx = useCarousel(CLIENTES.length)

  return (
    <div>
      {/* INTRO */}
      <section className="bg-lust text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 items-center">
          <StampedIcon src="/img/nosotros/isoreloncavi.png" alt="Reloncaví iso" className="mx-auto w-100" />
          <div>
            <p className="text-white text-lg font-semibold">
              En Reloncaví el cliente es nuestra prioridad, por lo que nos destacamos en ofrecer
              una atención cercana, profesional y a la medida de cada uno, apoyándolo en la
              logística de su negocio y respondiendo de manera rápida y eficiente a sus
              requerimientos.
            </p>
            <p className="mt-4 text-white text-lg font-semibold">
              Diseñamos y entregamos soluciones.
            </p>
            <p className="mt-4 text-white text-lg font-semibold">
              Nuestra presencia geográfica nos permite prestar servicios en la zona sur del país
              como un aliado estratégico.
            </p>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="bg-white-2 py-12 px-6">
        <h3 className="text-center text-4xl font-bold text-lust mb-8">Historia</h3>
        <img src="/img/nosotros/copialinea.png" alt="Línea de tiempo" loading="lazy" className="mx-auto max-w-full" />
      </section>

      {/* STATS */}
      <section className="bg-isabelline py-12 px-6">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
          {STATS.map((s, idx) => (
            <StatCard key={s.label} s={s} idx={idx} />
          ))}
        </div>
      </section>

      {/* VOLUMEN */}
      <section
        className="bg-cover bg-center bg-fixed py-16 px-6 text-center text-white"
        style={{ backgroundImage: "url(/img/nosotros/foto5.jpg)" }}
      >
        <div className="bg-black/80 py-12 rounded-lg max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-lust mb-8">Volumen Anual</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {VOLUMEN.map((v) => (
              <div key={v.unit + v.desc}>
                <div className="text-4xl font-black"><CountUp value={v.value} /> {v.unit}</div>
                <p className="mt-2 text-white/80 uppercase text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="bg-white-2 py-12 px-6">
        <h3 className="text-center text-4xl font-bold text-lust mb-8">Principales Clientes</h3>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <img key={clientIdx} src={CLIENTES[clientIdx]} alt="Clientes" className="w-full rounded-lg shadow carousel-in" />
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
            <h3 className="text-4xl font-bold text-lust mb-4">Oficinas</h3>
            <ul className="space-y-2 text-xl text-outer-space">
              <li>Almirante Latorre 795 San Vicente, Talcahuano</li>
              <li>Avenida Angelmó 1673, Puerto Montt</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img src="/img/nosotros/MAP-.png" alt="Mapa" loading="lazy" className="max-h-[26rem]" />
          </div>
          <div>
            <h3 className="text-4xl font-bold text-lust mb-4">Operaciones</h3>
            <ul className="space-y-2 text-xl text-outer-space">
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
