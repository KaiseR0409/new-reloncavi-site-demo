import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  if (!show) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 bg-lust text-white p-3 rounded-full shadow-lg"
      aria-label="Volver arriba"
    >
      <ChevronUp size={20} />
    </button>
  )
}
