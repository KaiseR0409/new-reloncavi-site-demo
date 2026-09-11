import { ChevronDown, Linkedin, Mail } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

import { CONTACT } from "../data/contact"
import { useState } from "react"

const LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/organizacion", label: "Organización" },
  { to: "/comunidad", label: "Juntos Somos Reloncaví" },
  { to: "/contacto", label: "Contacto" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)

  const closeMenu = () => {
    setClosing(true)
    setTimeout(() => {
      setOpen(false)
      setClosing(false)
    }, 200)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto text-white flex justify-end gap-2 px-4 py-1.5">
        <a href={`mailto:${CONTACT[0].email}`} className="p-1 hover:opacity-80 bg-lust" aria-label="Correo">
          <Mail size={16} />
        </a>
        <a
          href="https://www.linkedin.com/company/servicios-portuarios-reloncavi-ltda./"
          className="p-1 hover:opacity-80 bg-lust"
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
            <div className="hidden group-hover:block group-focus-within:block absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <a href="https://canaldenuncias.reloncavi.cl/Denuncia/Denunciar/" className="block px-4 py-2 text-sm hover:bg-gray-50">Denunciar</a>
              <a href="https://canaldenuncias.reloncavi.cl/Denuncia/Seguimiento/" className="block px-4 py-2 text-sm hover:bg-gray-50">Consultar Denuncia</a>
            </div>
          </div>
        </div>

        <button
          className="lg:hidden relative w-6 h-6"
          onClick={() => (open ? closeMenu() : setOpen(true))}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className={`hamburger-bar transition-all duration-300 ${open ? "rotate-45" : "-translate-y-[5px]"}`} />
          <span className={`hamburger-bar transition-all duration-300 ${open ? "-rotate-45" : "translate-y-[5px]"}`} />
        </button>
      </nav>

      {open && (
        <div className={`lg:hidden border-t px-4 py-4 flex flex-col gap-4 ${closing ? "menu-panel-out" : "menu-panel"}`}>
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={closeMenu} className="text-outer-space font-medium">
              {l.label}
            </NavLink>
          ))}
          <a href="https://canaldenuncias.reloncavi.cl/Denuncia/Denunciar/" className="text-outer-space font-medium" onClick={closeMenu}>Denunciar</a>
          <a href="https://canaldenuncias.reloncavi.cl/Denuncia/Seguimiento/" className="text-outer-space font-medium" onClick={closeMenu}>Consultar Denuncia</a>
        </div>
      )}
    </header>
  )
}
