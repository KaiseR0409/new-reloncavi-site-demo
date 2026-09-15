import { useEffect, useState } from "react";

import CountUp from "../components/CountUp";
import Reveal from "../components/Reveal";
import StampedIcon from "../components/StampedIcon";
import useEmblaCarousel from "embla-carousel-react";

const STATS = [
  {
    img: "/img/nosotros/TRABAJADOR.png",
    value: 250,
    label: "trabajadores",
    desc: "que operan el Puerto de Puerto Montt y Plantas Celulosa",
  },
  {
    img: "/img/nosotros/icono2.png",
    value: 65,
    label: "Equipos móviles",
    desc: "entre grúas horquillas, cargadores frontales, palas graneleras, tolvas y plantas de mezcla y ensacado",
  },
  {
    img: "/img/nosotros/icono1.png",
    value: 107000,
    label: "Metros cuadrados",
    desc: "de Bodega operados por nosotros: Empormontt 22.000 m2, Alto Bonito 8.000 m2, Mariquina 10.000 m2, Nueva Aldea 14.000 m2, Horcones 14.000 m2, MAPA 39.000 m2",
  },
];

const VOLUMEN = [
  { value: 300000, unit: "ton.", desc: "Despachada desde bodegas" },
  { value: 200000, unit: "ton.", desc: "Descarga desde naves" },
  { value: 3400000, unit: "adt", desc: "Celulosa despachada" },
];

const CLIENTES = [
  "/img/nosotros/logosem2.jpg",
  "/img/nosotros/logos-empresas3.jpg",
  "/img/nosotros/logos-empresas4.jpg",
  "/img/nosotros/logos-empresa5.jpg",
];

function StatCard({ s, idx }) {
  return (
    <div className="text-center">
      <StampedIcon
        src={s.img}
        alt={s.label}
        delay={idx * 180}
        className="mx-auto h-32 object-contain"
      />
      <h3 className="text-xl font-bold text-lust mt-4">
        <CountUp value={s.value} /> {s.label}
      </h3>
      <p className="text-outer-space mt-2">{s.desc}</p>
    </div>
  );
}

export default function Nosotros() {
  const [clientsRef, clientsApi] = useEmblaCarousel({ loop: true });
  const [selectedClient, setSelectedClient] = useState(0);

  useEffect(() => {
    if (!clientsApi) return;
    const update = () => setSelectedClient(clientsApi.selectedScrollSnap());
    clientsApi.on("select", update);
    update();
    return () => clientsApi.off("select", update);
  }, [clientsApi]);

  useEffect(() => {
    if (
      !clientsApi ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const id = window.setInterval(() => clientsApi.scrollNext(), 6500);
    return () => window.clearInterval(id);
  }, [clientsApi]);

  return (
    <div>
      {/* INTRO */}
      <section className="bg-gradient-to-b from-lust to-[#a5150c] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 items-center">
          <StampedIcon
            src="/img/nosotros/isoreloncavi.png"
            alt="Reloncaví iso"
            className="mx-auto w-100"
          />
          <Reveal>
            <p className="text-white text-lg font-semibold">
              En Reloncaví el cliente es nuestra prioridad, por lo que nos
              destacamos en ofrecer una atención cercana, profesional y a la
              medida de cada uno, apoyándolo en la logística de su negocio y
              respondiendo de manera rápida y eficiente a sus requerimientos.
            </p>
            <p className="mt-4 text-white text-lg font-semibold">
              Diseñamos y entregamos soluciones.
            </p>
            <p className="mt-4 text-white text-lg font-semibold">
              Nuestra presencia geográfica nos permite prestar servicios en la
              zona sur del país como un aliado estratégico.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="bg-white-2 py-12 px-6">
        <h3 className="text-center text-4xl font-bold text-lust mb-8">
          Historia
        </h3>
        <img
          src="/img/nosotros/copialinea.png"
          alt="Línea de tiempo"
          loading="lazy"
          className="mx-auto max-w-full"
        />
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
        style={{ backgroundImage: "url(/img/nosotros/foto5.webp)" }}
      >
        <div className="bg-black/80 py-12 rounded-lg max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-lust mb-8">Volumen Anual</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {VOLUMEN.map((v) => (
              <div key={v.unit + v.desc}>
                <div className="text-4xl font-black">
                  <CountUp value={v.value} /> {v.unit}
                </div>
                <p className="mt-2 text-white/80 uppercase text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="bg-white-2 py-12 px-6">
        <h3 className="text-center text-4xl font-bold text-lust mb-8">
          Nuestros principales clientes
        </h3>
        <div className="max-w-3xl mx-auto">
          <div
            ref={clientsRef}
            className="overflow-hidden"
            aria-roledescription="carrusel"
            aria-label="Clientes Reloncaví"
          >
            <div className="flex touch-pan-y">
              {CLIENTES.map((c) => (
                <div key={c} className="min-w-0 flex-[0_0_100%]">
                  <img
                    src={c}
                    alt="Clientes"
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-lg shadow"
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className="mt-6 flex justify-center gap-2"
            aria-label="Selector de clientes"
          >
            {CLIENTES.map((c, index) => (
              <button
                key={c}
                type="button"
                onClick={() => clientsApi?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ${selectedClient === index ? "w-8 bg-lust" : "w-2.5 bg-gray-300 hover:bg-lust/80"}`}
                aria-label={`Cliente ${index + 1}`}
                aria-current={selectedClient === index ? "true" : undefined}
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
            <img
              src="/img/nosotros/MAP-.png"
              alt="Mapa"
              loading="lazy"
              className="max-h-[26rem]"
            />
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
  );
}
