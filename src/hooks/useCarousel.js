import { useEffect, useState } from "react"

export default function useCarousel(length, interval = 3000) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % length), interval)
    return () => clearInterval(id)
  }, [length, interval])
  return index
}
