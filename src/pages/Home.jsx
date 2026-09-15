import { ArrowRight, Package, Ship } from "lucide-react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import useEmblaCarousel from "embla-carousel-react";

const SERVICIOS = [
  {
    img: "/img/servicios/granel.webp",
    title: "Ensacados y Despacho Fertilizantes",
    href: "/servicios#fertilizantes",
    desc: "Plantas de mezcla y ensacado, acopio y despacho de fertilizantes y graneles.",
  },
  {
    img: "/img/servicios/servicios.webp",
    title: "Estiba y Desestiba Portuarias",
    href: "/servicios#portuarias",
    desc: "Atención de naves bulk carrier y descarga de graneles con equipos especializados.",
  },
];

const HERO_MESSAGES = [
  {
    title: "Reloncaví",
    description:
      "Logística portuaria, almacenaje y despacho a lo largo del sur de Chile.",
  },
  {
    title: "Operaciones portuarias",
    description:
      "Experiencia en estiba, desestiba y atención eficiente de naves y cargas.",
  },
  {
    title: "Despacho eficiente",
    description:
      "Soluciones logísticas cercanas, seguras y a la medida de cada operación.",
  },
];

export default function Home() {
  const [playHeroVideo, setPlayHeroVideo] = useState(false);
  const [selectedHero, setSelectedHero] = useState(0);
  const [heroRef, heroApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    const connection = navigator.connection;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setPlayHeroVideo(!reducedMotion && !connection?.saveData);
  }, []);

  useEffect(() => {
    if (!heroApi) return;

    const updateSelectedHero = () =>
      setSelectedHero(heroApi.selectedScrollSnap());
    heroApi.on("select", updateSelectedHero);
    updateSelectedHero();
    return () => heroApi.off("select", updateSelectedHero);
  }, [heroApi]);

  useEffect(() => {
    if (
      !heroApi ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const id = window.setInterval(() => heroApi.scrollNext(), 6500);
    return () => window.clearInterval(id);
  }, [heroApi]);

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/vid/reloncavi-hero-poster.webp)" }}
          aria-hidden="true"
        />
        {playHeroVideo && (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/vid/reloncavi-hero.mp4"
            poster="/vid/reloncavi-hero-poster.webp"
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center text-white">
          <div className="w-full max-w-5xl">
            <div
              ref={heroRef}
              className="overflow-hidden"
              aria-roledescription="carrusel"
              aria-label="Servicios Reloncaví"
            >
              <div className="flex touch-pan-y">
                {/*MENSAJES HERO*/}
                {HERO_MESSAGES.map((message) => (
                  <article
                    key={message.title}
                    className="min-w-0 flex-[0_0_100%] px-2"
                  >
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                      {message.title}
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto">
                      {message.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/*MENSAJES NAVEGACION*/}
            <div
              className="mt-8 flex justify-center gap-2"
              aria-label="Selector de mensajes"
            >
              {HERO_MESSAGES.map((message, index) => (
                <button
                  key={message.title}
                  type="button"
                  onClick={() => heroApi?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${selectedHero === index ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-lust/80"}`}
                  aria-label={`Ver: ${message.title}`}
                  aria-current={selectedHero === index ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}

      <section className="bg-gradient-to-b from-lust to-[#a5150c] text-white py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-bold mb-4">Nosotros</h2>
            <p className="text-lg">
              En Reloncaví el cliente es nuestra prioridad, por lo que nos
              destacamos en ofrecer una atención cercana, profesional y a la
              medida de cada uno, apoyándolo en la logística de su negocio y
              respondiendo de manera rápida y eficiente a sus requerimientos.
            </p>
          </Reveal>
        </div>
        <Link
          to="/nosotros"
          className="inline-block mt-3 ml-0 text-white/80  font-semibold rounded hover:text-white/100 transition"
        >
          Leer más
        </Link>
      </section>

      {/* NEGOCIOS */}
      <Reveal>
        <section className="bg-white-2 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-4xl font-bold text-lust mt-2">
              Nuestros servicios
            </h2>
            <div className="grid gap-8 md:grid-cols-2 mt-12">
              {SERVICIOS.map((n, i) => (
                <Reveal key={n.title} delay={i * 150}>
                  <Link
                    to={n.href}
                    className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lust"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={n.img}
                        alt={n.title}
                        loading="lazy"
                        decoding="async"
                        width="1200"
                        height="1200"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/15"
                        aria-hidden="true"
                      />

                      <h3 className="absolute inset-x-0 bottom-0 p-6 text-2xl font-black text-white leading-snug drop-shadow-md">
                        {n.title}
                      </h3>
                    </div>
                    <div className="flex-1 flex flex-col p-6 pt-5">
                      <p className="text-sm text-outer-space/70 leading-relaxed">
                        {n.desc}
                      </p>
                      <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-lust">
                        Conocer más
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1.5"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
