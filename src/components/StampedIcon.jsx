import useInView from "../hooks/useInView"

export default function StampedIcon({ src, alt, delay = 0, className = "" }) {
  const [ref, inView] = useInView()
  return (
    <span ref={ref} className="relative inline-block" style={{ "--stamp-delay": `${delay}ms` }}>
      <span className={`stamp-ring ${inView ? "stamp-ring-on" : ""}`} aria-hidden="true" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`${className} stamp-img ${inView ? "stamp-img-on" : ""}`}
      />
    </span>
  )
}