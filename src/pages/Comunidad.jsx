import useCarousel from "../hooks/useCarousel"
import useInView from "../hooks/useInView"

function Carousel({ images, interval = 3000 }) {
  const [ref, inView] = useInView(0.1)
  const i = useCarousel(images.length, interval, inView)
  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <img key={i} src={images[i]} alt="Comunidad" loading="lazy" decoding="async" width="1200" height="500" className="w-full h-72 object-cover rounded-lg shadow carousel-in" />
    </div>
  )
}

const COMUNIDAD = [
  "/img/comunidad/redes5.webp", "/img/comunidad/redes2.webp", "/img/comunidad/redes3.webp",
  "/img/comunidad/redes1.webp", "/img/comunidad/redes6.webp", "/img/comunidad/redes8.webp",
  "/img/comunidad/11comunidad.webp", "/img/comunidad/redes12.webp",
  "/img/comunidad/somostodos3.webp", "/img/comunidad/somostodos2.webp", "/img/comunidad/somostodos.webp",
]

const ACTIVIDADES = [
  "/img/comunidad/redes10.webp", "/img/comunidad/redes4.webp", "/img/comunidad/redes7.webp",
  "/img/comunidad/redes9.webp", "/img/comunidad/redes11.webp",
  "/img/comunidad/actividades.webp", "/img/comunidad/actividades2.webp",
]

export default function Comunidad() {
  return (
    <div>
      <section className="bg-lust py-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-white">Redes Reloncaví</h1>
      </section>

      <section className="bg-white-2 py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-lust mb-4">Reloncaví Somos Todos</h2>
          <p className="text-outer-space">
            El foco de Reloncaví está puesto en fortalecer lazos interpersonales, de respeto y
            entregar todas las herramientas que sean necesarias para dar bienestar a nuestros
            trabajadores.
          </p>
        </div>
      </section>

      <section className="py-10 px-6"><Carousel images={COMUNIDAD} /></section>

      <section className="bg-white-2 py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-lust mb-4">Actividades</h2>
          <p className="text-outer-space">
            Es así como se han estado realizando diferentes tipos de capacitaciones en todas las
            zonas en donde tenemos faenas, se están promoviendo actividades extra laborales,
            deportivas, al aire libre, promoviendo el autocuidado, entregando así una nueva mirada
            de equipo.
          </p>
        </div>
      </section>

      <section className="py-10 px-6"><Carousel images={ACTIVIDADES} /></section>

      <section className="bg-isabelline py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-8 text-center md:text-left">
          <p className="text-2xl italic font-light text-lust">"Juntos el mejor Equipo."</p>
          <img src="/img/comunidad/manos-puzzle.webp" alt="Juntos el mejor equipo" loading="lazy" decoding="async" className="w-full rounded-lg shadow" />
        </div>
      </section>
    </div>
  )
}
