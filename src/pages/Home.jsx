import { Link } from "react-router-dom"

const NEGOCIOS = [
  { img: "/img/negocios/forestalrelon.jpg", title: "Administración Bodegas Celulosa", href: "/servicios#bodegas" },
  { img: "/img/negocios/granel.png", title: "Ensacados y Despacho Fertilizantes", href: "/servicios#fertilizantes" },
  { img: "/img/negocios/servicios.png", title: "Estiba y Desestiba Portuarias", href: "/servicios#portuarias" },
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/vid/reloncavivideoweb.mp4"
          autoPlay loop muted playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center text-white">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">Reloncaví</h1>
            <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto">
              Logística portuaria, almacenaje y despacho a lo largo del sur de Chile.
            </p>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="bg-lust text-white py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Nosotros</h2>
          <p>
            En Reloncaví el cliente es nuestra prioridad, por lo que nos destacamos en ofrecer
            una atención cercana, profesional y a la medida de cada uno, apoyándolo en la
            logística de su negocio y respondiendo de manera rápida y eficiente a sus
            requerimientos.
          </p>
        </div>
      </section>

      {/* NEGOCIOS */}
      <section className="bg-white-2 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-lust mb-12">Negocios</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {NEGOCIOS.map((n) => (
              <Link key={n.title} to={n.href} className="group bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition">
                <div className="overflow-hidden h-52">
                  <img src={n.img} alt={n.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <div className="p-5 text-center font-semibold text-outer-space">
                  {n.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
