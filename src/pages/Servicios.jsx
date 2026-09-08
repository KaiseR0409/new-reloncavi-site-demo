const ICONS = [
  { img: "/img/negocios/gruaicon.png", title: "Administración Bodegas Celulosa" },
  { img: "/img/negocios/bodegaicon.png", title: "Ensacados y despacho Fertilizantes" },
  { img: "/img/negocios/barcoicon.png", title: "Estiba y Desestiba portuarias" },
]

const SERVICES = [
  {
    id: "bodegas",
    img: "/img/negocios/foto2.jpg",
    title: "Administración Bodegas Celulosa",
    text: `Reloncaví presta por más de 24 años el servicio en movimientos de almacenaje y despacho de Celulosa al interior de plantas industriales y bodegas externas. Lo anterior es desarrollado sobre estrictas normas de seguridad y cuidado del medio ambiente, velando por la protección de nuestros trabajadores, equipos y continuidad operacional, buscando siempre el mejoramiento continuo y desarrollando soluciones a fin de generarle valor a nuestro cliente. En esta operación se movilizan en la actualidad 1.980.000 toneladas de pulpa anuales, con una proyección de incremento al 2023 a 3.480.000 toneladas anuales.`,
  },
  {
    id: "fertilizantes",
    img: "/img/negocios/foto3.jpg",
    title: "Ensacados y Despacho Fertilizantes",
    text: `Reloncaví opera 8 plantas de mezcla y envasado de fertilizantes en Puerto Montt para sus clientes, tanto en las instalaciones de Empormontt como en bodegas externas. Estas plantas envasan en los formatos de sacos de 25 kilos, en base a plantas de peso neto, y en maxi sacos de 500 kilos, en plantas dobles. Para cumplir los estándares de servicios ofertados, Reloncaví dispone de 13 cargadores frontales que no sólo operan las plantas de envasado, sino que además acopian la carga en 6 almacenes, cuya superficie total es de 22.000 m2 techados. Adicionalmente se desarrollan operaciones de acopio y despacho desde bodegas externas hacia Empormontt, de aproximadamente 80.000 TM de harinas de soya y Gluten meal. En el año 2021 se despacharon envasadas 168.000 TM de fertilizantes.`,
  },
  {
    id: "portuarias",
    img: "/img/negocios/foto6.jpg",
    title: "Estiba y Desestiba Portuarias",
    text: `Reloncaví descarga mercadería a granel en Puerto Montt, en las instalaciones de Empormontt, entre ellos fertilizantes, cemento en maxi sacos, granos y harinas (alimento de consumo animal asociado mercado la salmonicultura y ganadería) desde naves Bulk Carrier. Para cumplir con este servicio, se dispone de 4 palas de 12 m3 de descarga electrónica, tres chutes y 4 cargadores frontales. Cabe hacer notar que nuestro éxito en términos de eficiencia a la descarga, cumpliendo rigurosamente con los términos pactados en los Tiempos de Plancha con nuestros clientes, se deben al profesionalismo de nuestros colaboradores, personal de muellaje y a nuestros equipos de apoyo técnico. Durante el año 2021 Reloncaví descargó 228.000 TM de mercadería a granel.`,
  },
]

export default function Servicios() {
  return (
    <div>
      <section className="bg-lust py-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-white">Negocios</h1>
      </section>

      <section className="bg-lust py-12 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {ICONS.map((i) => (
            <div key={i.title} className="text-center">
              <img src={i.img} alt={i.title} loading="lazy" className="mx-auto h-32 object-contain" />
              <h3 className="text-lg font-semibold text-white mt-4">{i.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {SERVICES.map((s, idx) => (
        <section id={s.id} key={s.id} className={`py-16 px-6 ${idx % 2 === 0 ? "bg-white" : "bg-white-2"}`}>
          <div className={`max-w-7xl mx-auto grid gap-10 items-center md:grid-cols-2`}>
            <img src={s.img} alt={s.title} loading="lazy" className={`w-full rounded-lg shadow ${idx % 2 === 1 ? "md:order-2" : ""}`} />
            <div>
              <h2 className="text-2xl font-bold text-lust mb-4">{s.title}</h2>
              <p className="text-outer-space leading-relaxed">{s.text}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
