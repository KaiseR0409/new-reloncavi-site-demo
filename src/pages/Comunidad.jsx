import { useState, useEffect } from "react"

// Local carousel (identical pattern to Nosotros)
function Carousel({ images, interval = 3000 }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % images.length), interval)
    return () => clearInterval(id)
  }, [images.length, interval])
  return (
    <div className="max-w-4xl mx-auto">
      <img src={images[i]} alt="Comunidad" className="w-full h-72 object-cover rounded-lg shadow" />
    </div>
  )
}

const COMUNIDAD = [
  "/img/comunidad/redes5.jpg", "/img/comunidad/redes2.jpg", "/img/comunidad/redes3.jpg",
  "/img/comunidad/redes1.jpg", "/img/comunidad/redes6.jpg", "/img/comunidad/redes8.jpg",
  "/img/comunidad/11comunidad.jpg", "/img/comunidad/redes12.jpg",
  "/img/comunidad/somostodos3.jpg", "/img/comunidad/somostodos2.jpg", "/img/comunidad/somostodos.jpg",
]

const ACTIVIDADES = [
  "/img/comunidad/redes10.jpg", "/img/comunidad/redes4.jpg", "/img/comunidad/redes7.jpg",
  "/img/comunidad/redes9.jpg", "/img/comunidad/redes11.jpg",
  "/img/comunidad/actividades.jpg", "/img/comunidad/actividades2.jpg",
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
          <img src="/img/comunidad/manos-puzzle.jpg" alt="Juntos el mejor equipo" className="w-full rounded-lg shadow" />
        </div>
      </section>
    </div>
  )
}
