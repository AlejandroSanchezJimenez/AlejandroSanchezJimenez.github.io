'use client'

import { useEffect, useState } from 'react'

// Devuelve 0..1: cuánto de la sección ha recorrido el centro de la pantalla.
// 0 = el borde superior de la sección está en el centro, 1 = el inferior.
// Se redondea a pasos de 0.02 para no re-renderizar en cada píxel.
export function useProgresoSeccion(id) {
  const [progreso, setProgreso] = useState(0)

  useEffect(() => {
    let raf = 0

    const calcular = () => {
      raf = 0
      const el = document.getElementById(id)
      if (!el) return
      const r = el.getBoundingClientRect()
      const p = (window.innerHeight / 2 - r.top) / r.height
      const cuantizado = Math.round(Math.min(1, Math.max(0, p)) * 50) / 50
      setProgreso(cuantizado) // React ignora el cambio si el valor es igual
    }

    const pedir = () => {
      if (!raf) raf = requestAnimationFrame(calcular)
    }

    pedir() // cálculo inicial, en el siguiente frame
    window.addEventListener('scroll', pedir, { passive: true })
    window.addEventListener('resize', pedir)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', pedir)
      window.removeEventListener('resize', pedir)
    }
  }, [id])

  return progreso
}
