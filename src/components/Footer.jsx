import { Mail, Phone, MapPin } from "lucide-react"
import { CONTACT } from "../data/contact"

export default function Footer() {
  return (
    <footer className="bg-lust text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        {CONTACT.map((c) => (
          <div key={c.region}>
            <h4 className="text-selective-yellow font-bold mb-4">{c.region.toUpperCase()}</h4>
            <p className="flex items-center gap-2 mb-3"><Mail size={18} /> {c.email}</p>
            <p className="flex items-center gap-2 mb-3"><Phone size={18} /> {c.phone}</p>
            <p className="flex items-start gap-2"><MapPin size={18} className="mt-0.5" /> {c.address}</p>
          </div>
        ))}
        <div className="flex items-center justify-center md:justify-end">
          <img src="/img/logs/reloncabilogo.png" alt="Reloncaví" loading="lazy" className="w-32" />
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Reloncaví
      </div>
    </footer>
  )
}
