'use client'

import { useEffect, useState } from 'react'

// Cuenta de 0 a `objetivo` cuando `iniciar` pasa a true.
// `retraso` (ms) escalona unos contadores respecto a otros.
export function useContador(objetivo, iniciar, retraso = 0, duracion = 1800) {
  const [valor, setValor] = useState(0)

  useEffect(() => {
    if (!iniciar) return

    let raf = 0
    let inicio = 0

    const paso = (t) => {
      if (!inicio) inicio = t
      const p = Math.min(1, (t - inicio) / duracion)
      const suave = p === 1 ? 1 : 1 - Math.pow(2, -10 * p) // frena al final
      setValor(Math.round(objetivo * suave))
      if (p < 1) raf = requestAnimationFrame(paso)
    }

    const timer = setTimeout(() => {
      raf = requestAnimationFrame(paso)
    }, retraso)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [objetivo, iniciar, retraso, duracion])

  return valor
}
