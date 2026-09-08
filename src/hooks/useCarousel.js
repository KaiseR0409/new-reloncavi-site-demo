import { useEffect, useState } from "react"

export default function useCarousel(length, interval = 3000, enabled = true) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (!enabled || length < 2) return
    const id = setInterval(() => setIndex((p) => (p + 1) % length), interval)
    return () => clearInterval(id)
  }, [length, interval, enabled])
  return index
}
