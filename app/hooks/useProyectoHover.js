'use client'

import { useSyncExternalStore } from 'react'

// Mini-store compartido entre Projects (dice qué tarjeta tiene el ratón encima)
// y StickersHistoria (reacciona). Sin dependencias ni contexto.
let actual = null
const oyentes = new Set()

export function fijarProyectoHover(clave) {
  if (actual === clave) return
  actual = clave
  oyentes.forEach((aviso) => aviso())
}

function suscribir(aviso) {
  oyentes.add(aviso)
  return () => oyentes.delete(aviso)
}

export function useProyectoHover() {
  return useSyncExternalStore(
    suscribir,
    () => actual,
    () => null
  )
}
