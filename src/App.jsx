import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Nosotros from "./pages/Nosotros"
import Servicios from "./pages/Servicios"
import Organizacion from "./pages/Organizacion"
import Comunidad from "./pages/Comunidad"
import Contacto from "./pages/Contacto"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/organizacion" element={<Organizacion />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
