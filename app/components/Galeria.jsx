export default function Galeria({ fotos, className = 'galeria' }) {
  return (
    <div className={className}>
      {fotos.map((src, i) => (
        <img key={i} src={src} alt={`foto-${i + 1}`} loading='lazy' />
      ))}
    </div>
  )
}
