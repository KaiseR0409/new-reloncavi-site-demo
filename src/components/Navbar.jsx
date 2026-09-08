import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import { Mail, Linkedin, Menu, X, ChevronDown } from "lucide-react"

const LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Negocios" },
  { to: "/organizacion", label: "Organización" },
  { to: "/comunidad", label: "Comunidad" },
  { to: "/contacto", label: "Contacto" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-lust text-white flex justify-end gap-2 px-4 py-1.5">
        <a href="mailto:contacto@reloncavi.cl" className="p-1 hover:opacity-80" aria-label="Correo">
          <Mail size={16} />
        </a>
        <a
          href="https://www.linkedin.com/company/1970509/admin/"
          className="p-1 hover:opacity-80"
          aria-label="LinkedIn"
        >
          <Linkedin size={16} />
        </a>
      </div>
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
        <Link to="/" className="shrink-0">
          <img src="/img/logs/logo-reloncavi.png" alt="Reloncaví" className="h-11 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-semibold ${isActive ? "text-lust" : "text-outer-space hover:text-lust"}`
              }
            >
              {l.label}
            </NavLink>
          ))}

          <div className="relative group">
            <button className="text-sm font-semibold text-outer-space hover:text-lust flex items-center">
              Canal de Denuncias <ChevronDown size={14} className="ml-1" />
            </button>
            <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <a href="https://canaldenuncias.reloncavi.cl/Denuncia/Denunciar/" className="block px-4 py-2 text-sm hover:bg-gray-50">Denunciar</a>
              <a href="https://canaldenuncias.reloncavi.cl/Denuncia/Seguimiento/" className="block px-4 py-2 text-sm hover:bg-gray-50">Consultar Denuncia</a>
            </div>
          </div>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t px-4 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-outer-space font-medium">
              {l.label}
            </NavLink>
          ))}
          <a href="https://canaldenuncias.reloncavi.cl/Denuncia/Denunciar/" className="text-outer-space font-medium">Denunciar</a>
          <a href="https://canaldenuncias.reloncavi.cl/Denuncia/Seguimiento/" className="text-outer-space font-medium">Consultar Denuncia</a>
        </div>
      )}
    </header>
  )
}
