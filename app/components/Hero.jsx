'use client'

import { useEffect, useState } from 'react'

export default function Hero({ onFinish }) {
  const name = 'ASANJIMDEV'
  const [letters, setLetters] = useState(
    name.split('').map((char) => ({ char, visible: false }))
  )
  const [phase, setPhase] = useState('typing') // typing | fadeName | stripes

  // Animación de letras desde abajo
  useEffect(() => {
    if (phase !== 'typing') return

    letters.forEach((_, i) => {
      setTimeout(() => {
        setLetters((prev) =>
          prev.map((l, index) => (index === i ? { ...l, visible: true } : l))
        )
      }, i * 100)
    })

    const totalTime = letters.length * 100 + 500
    const timer = setTimeout(() => {
      setPhase('fadeName')
    }, totalTime)

    return () => clearTimeout(timer)
  }, [phase])

  // Fade out del nombre
  useEffect(() => {
    if (phase !== 'fadeName') return

    const fadeTimer = setTimeout(() => {
      setLetters((prev) => prev.map((l) => ({ ...l, visible: false })))
      setPhase('stripes')
    }, 500)

    return () => clearTimeout(fadeTimer)
  }, [phase])

  // Animación de franjas
  useEffect(() => {
    if (phase !== 'stripes') return

    const stripes = document.querySelectorAll('.hero-stripe')
    // Invertimos el orden para animar de derecha a izquierda
    Array.from(stripes)
      .reverse()
      .forEach((stripe, i) => {
        setTimeout(() => {
          stripe.classList.add('translate-y-full', 'opacity-0')
        }, i * 200)
      })

    const endTimer = setTimeout(() => {
      onFinish()
    }, 5 * 200 + 800)

    return () => clearTimeout(endTimer)
  }, [phase, onFinish])

  return (
    <div className='fixed inset-0 z-50 overflow-hidden flex justify-center items-center'>
      {/* Franjas verticales */}
      {phase === 'stripes' &&
        [0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className='hero-stripe w-1/5 h-full bg-gradient-to-tr from-purple-900 via-indigo-800 to-purple-700 absolute transition-transform duration-700 ease-out'
            style={{ left: `${i * 20}%` }}
          ></div>
        ))}

      {/* Fondo liso inicial */}
      {phase !== 'stripes' && (
        <div className='absolute inset-0 bg-gradient-to-tr from-purple-900 via-indigo-800 to-purple-700'></div>
      )}

      {/* Nombre */}
      {phase !== 'stripes' && (
        <h1 className='relative text-5xl md:text-7xl font-extrabold text-white flex flex-wrap justify-center'>
          {letters.map((l, i) => (
            <span
              key={i}
              className={`inline-block transform transition-transform duration-500 ${
                l.visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              {l.char === ' ' ? '\u00A0' : l.char}
            </span>
          ))}
        </h1>
      )}
    </div>
  )
}
