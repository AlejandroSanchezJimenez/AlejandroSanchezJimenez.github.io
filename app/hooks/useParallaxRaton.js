'use client'

import { useEffect } from 'react'

// Escribe --px y --py (de -1 a 1) en el elemento de `ref`, con suavizado.
// No usa estado de React, así que mover el ratón no provoca renders.
export function useParallaxRaton(ref, activo) {
  useEffect(() => {
    if (!activo) return

    const objetivo = { x: 0, y: 0 }
    const actual = { x: 0, y: 0 }
    let raf = 0

    const pintar = () => {
      raf = 0
      // Interpolación: la posición actual persigue a la del ratón (0.08 = suavidad)
      actual.x += (objetivo.x - actual.x) * 0.08
      actual.y += (objetivo.y - actual.y) * 0.08

      const el = ref.current
      if (el) {
        el.style.setProperty('--px', actual.x.toFixed(4))
        el.style.setProperty('--py', actual.y.toFixed(4))
      }

      // Cuando ya casi ha llegado, el bucle se detiene hasta el siguiente movimiento
      const llegado =
        Math.abs(objetivo.x - actual.x) < 0.001 &&
        Math.abs(objetivo.y - actual.y) < 0.001
      if (!llegado) raf = requestAnimationFrame(pintar)
    }

    const alMover = (e) => {
      objetivo.x = (e.clientX / window.innerWidth - 0.5) * 2
      objetivo.y = (e.clientY / window.innerHeight - 0.5) * 2
      if (!raf) raf = requestAnimationFrame(pintar)
    }

    window.addEventListener('pointermove', alMover, { passive: true })
    return () => {
      window.removeEventListener('pointermove', alMover)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref, activo])
}
