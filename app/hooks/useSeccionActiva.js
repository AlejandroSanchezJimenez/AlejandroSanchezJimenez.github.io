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
      // Solo cuenta la franja central de la pantalla
      { rootMargin: '-50% 0px -50% 0px' }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return activa
}
