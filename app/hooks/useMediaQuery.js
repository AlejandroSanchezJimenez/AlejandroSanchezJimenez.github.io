'use client'

import { useCallback, useSyncExternalStore } from 'react'

export function useMediaQuery(consulta) {
  const suscribir = useCallback(
    (aviso) => {
      const mq = window.matchMedia(consulta)
      mq.addEventListener('change', aviso)
      return () => mq.removeEventListener('change', aviso)
    },
    [consulta]
  )

  return useSyncExternalStore(
    suscribir,
    () => window.matchMedia(consulta).matches, // cliente
    () => false // servidor
  )
}
