import useInView from "../hooks/useInView"

export default function Reveal({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView(0.15)
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "reveal-on" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  )
}