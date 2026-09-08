import { useEffect, useRef, useState } from "react"

export default function CountUp({ value, duration = 1500 }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          obs.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  useEffect(() => {
    if (!started) return
    let raf
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, value, duration])

  return <span ref={ref}>{display.toLocaleString("es-CL")}</span>
}