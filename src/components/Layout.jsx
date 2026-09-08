import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ScrollTop from "./ScrollTop"

export default function Layout() {
  const { pathname } = useLocation()

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
