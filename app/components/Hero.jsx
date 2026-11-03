'use client'

import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

const NOMBRE = 'ASANJIMDEV'
const LETRAS = NOMBRE.split('')
const FRANJAS = 5

// Tiempos en ms
const T_INICIO = 120 // deja pintar el estado inicial antes de animar
const T_ESPERA = 2000 // desde que entran las letras hasta que empieza la salida
const T_REVELAR = 450 // tras empezar la salida, avisa a la página para montar los stickers
const T_FIN = 1500 // tras empezar la salida, se quita el hero (ya es invisible)

const EASE_ENTRADA = 'cubic-bezier(0.22, 1, 0.36, 1)'
const EASE_SALIDA = 'cubic-bezier(0.76, 0, 0.24, 1)'

export default function Hero({ onReveal, onFinish }) {
  const [fase, setFase] = useState('inicio') // inicio | entrada | salida
  const reducido = useMediaQuery('(prefers-reduced-motion: reduce)')

  // Guardamos los callbacks en una ref para que la línea de tiempo no se reinicie
  const callbacks = useRef({ onReveal, onFinish })
  useEffect(() => {
    callbacks.current = { onReveal, onFinish }
  })

  // Bloquea el scroll de la página mientras dura el hero
  useEffect(() => {
    const previo = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)
    return () => {
      document.body.style.overflow = previo
    }
  }, [])

  // Línea de tiempo única (solo timeouts, sin setState síncrono)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const inicioSalida = T_INICIO + (reduce ? 800 : T_ESPERA)

    const timers = [
      setTimeout(() => setFase('entrada'), T_INICIO),
      setTimeout(() => setFase('salida'), inicioSalida),
      setTimeout(
        () => callbacks.current.onReveal?.(),
        inicioSalida + T_REVELAR
      ),
      setTimeout(() => callbacks.current.onFinish?.(), inicioSalida + T_FIN)
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  const estiloLetra = (i) => {
    if (fase === 'inicio') {
      return {
        transform: reducido ? 'none' : 'translateY(110%)',
        opacity: 0
      }
    }
    if (fase === 'entrada') {
      return {
        transform: 'translateY(0)',
        opacity: 1,
        transition: reducido
          ? 'opacity 500ms ease'
          : `transform 700ms ${EASE_ENTRADA} ${i * 60}ms, opacity 500ms ease ${i * 60}ms`
      }
    }
    // salida
    return {
      transform: reducido ? 'none' : 'translateY(-110%)',
      opacity: 0,
      transition: reducido
        ? 'opacity 400ms ease'
        : `transform 600ms ${EASE_SALIDA} ${i * 30}ms, opacity 400ms ease ${i * 30}ms`
    }
  }

  const estiloFranja = (i) => {
    const salio = fase === 'salida'
    return {
      left: `${i * 20}%`,
      width: 'calc(20% + 1px)', // el +1px evita líneas finas entre franjas
      transform: reducido
        ? 'none'
        : salio
          ? 'translateY(-101%)'
          : 'translateY(0)',
      opacity: reducido && salio ? 0 : 1,
      transition: reducido
        ? 'opacity 500ms ease'
        : `transform 900ms ${EASE_SALIDA} ${i * 90}ms`,
      willChange: 'transform'
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex touch-none items-center justify-center overflow-hidden ${
        fase === 'salida' ? 'pointer-events-none' : ''
      }`}
    >
      {/* Franjas: cubren la pantalla y al final se deslizan hacia arriba, una tras otra */}
      {Array.from({ length: FRANJAS }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 h-full bg-gradient-to-tr from-purple-900 via-indigo-800 to-purple-700"
          style={estiloFranja(i)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
        </div>
      ))}

      {/* Nombre: cada letra sube desde una máscara y sale hacia arriba */}
      <h1
        aria-label={NOMBRE}
        className="relative flex justify-center whitespace-nowrap text-[clamp(2.25rem,11vw,4.5rem)] font-extrabold leading-none text-white"
      >
        {LETRAS.map((letra, i) => (
          <span
            key={i}
            aria-hidden
            className="inline-block overflow-hidden py-2"
          >
            <span
              className="inline-block will-change-transform"
              style={estiloLetra(i)}
            >
              {letra}
            </span>
          </span>
        ))}
      </h1>
    </div>
  )
}
