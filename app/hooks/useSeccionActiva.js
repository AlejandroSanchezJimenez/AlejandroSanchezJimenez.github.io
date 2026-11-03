'use client'

import { useEffect, useState } from 'react'

export function useSeccionActiva(ids) {
  const [activa, setActiva] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) setActiva(e.target.id)
        })
      },
      // Franja del 10% en el centro (más fiable en Safari iOS que una línea de 0px)
      { rootMargin: '-45% 0px -45% 0px' }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return activa
}
