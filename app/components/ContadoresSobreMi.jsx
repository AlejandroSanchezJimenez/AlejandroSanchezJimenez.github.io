'use client'

import { useEffect, useRef, useState } from 'react'
import { useContador } from '../hooks/useContador'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { projects } from '../data/proyectos'

// Cuando empezaste a trabajar en empresa (Unita, febrero 2025)
const INICIO_EMPRESA = '2025-02-01'

function mesesDesde(fecha) {
  const d = new Date(fecha)
  const hoy = new Date()
  return (
    (hoy.getFullYear() - d.getFullYear()) * 12 + (hoy.getMonth() - d.getMonth())
  )
}

function Contador({
  valor,
  prefijo = '',
  etiqueta,
  indice,
  iniciar,
  reducirMovimiento
}) {
  const animado = useContador(
    valor,
    iniciar && !reducirMovimiento,
    indice * 150
  )
  const mostrado = reducirMovimiento ? valor : animado

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-5 text-center backdrop-blur-sm transition-all duration-700 motion-reduce:transition-none ${
        iniciar ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: `${indice * 120}ms` }}
    >
      {/* El número animado no se anuncia; los lectores de pantalla leen el valor final */}
      <p
        aria-hidden
        className="text-4xl font-extrabold tabular-nums text-purple-300 md:text-5xl"
      >
        {prefijo}
        {mostrado.toLocaleString('es-ES')}
      </p>
      <span className="sr-only" suppressHydrationWarning>
        {prefijo}
        {valor} {etiqueta}
      </span>
      <p aria-hidden className="mt-1 text-sm text-gray-300">
        {etiqueta}
      </p>
    </div>
  )
}

export default function ContadoresSobreMi() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const reducirMovimiento = useMediaQuery('(prefers-reduced-motion: reduce)')

  // Arranca una sola vez, cuando la fila entra en pantalla
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const lista = Object.values(projects)

  const contadores = [
    { valor: 4, etiqueta: 'años programando' },
    {
      valor: mesesDesde(INICIO_EMPRESA),
      etiqueta: 'meses de experiencia profesional'
    },
    { valor: lista.length, etiqueta: 'proyectos personales' },
    {
      // Cuenta los que tienen enlace a la App Store. Pon `publicada: false`
      // en un proyecto si aún no está disponible y no contará.
      valor: lista.filter((p) => p.appStore && p.publicada !== false).length,
      etiqueta: 'apps publicadas en App Store'
    }
  ]

  return (
    <div ref={ref} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
      {contadores.map((c, i) => (
        <Contador
          key={c.etiqueta}
          {...c}
          indice={i}
          iniciar={visible}
          reducirMovimiento={reducirMovimiento}
        />
      ))}
    </div>
  )
}
