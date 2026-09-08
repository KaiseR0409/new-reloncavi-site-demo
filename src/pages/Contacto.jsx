import { Mail, Phone, MapPin } from "lucide-react"
import { CONTACT } from "../data/contact"

const ICONS = ["/img/contacto/1blackbarcoicon.png", "/img/contacto/black.png", "/img/contacto/blackunoicon.png"]

export default function Contacto() {
  return (
    <div>
      <section className="bg-lust py-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-white">Contacto</h1>
      </section>

      <section className="bg-outer-space text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
            {ICONS.map((i) => (
              <img key={i} src={i} alt="Icono" className="mx-auto h-16" />
            ))}
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {CONTACT.map((c) => (
              <div key={c.region}>
                <h3 className="text-selective-yellow text-xl font-bold mb-4">{c.region.toUpperCase()}</h3>
                <p className="flex items-center gap-2 mb-3"><MapPin size={18} /> {c.address}</p>
                <p className="flex items-center gap-2 mb-3"><Phone size={18} /> {c.phone}</p>
                <a
                  href={`mailto:${c.email}`}
                  className="inline-flex items-center gap-2 mt-2 bg-white hover:bg-gray-100 text-lust px-5 py-2.5 rounded-md font-semibold"
                >
                  <Mail size={18} /> {c.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
