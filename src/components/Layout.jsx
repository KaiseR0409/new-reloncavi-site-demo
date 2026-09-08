import { Outlet, useLocation } from "react-router-dom"

import Footer from "./Footer"
import Navbar from "./Navbar"
import ScrollTop from "./ScrollTop"
import { useEffect } from "react"

export default function Layout() {
  const { pathname } = useLocation()

  // Hace scroll al tope (0, 0) cada vez que la ruta (pathname) cambia
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      {pathname !== "/contacto" && <Footer />}
      <ScrollTop />
    </div>
  )
}