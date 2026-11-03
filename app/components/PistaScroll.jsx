'use client'

import { useEffect, useState } from 'react'

export default function PistaScroll() {
  const [oculta, setOculta] = useState(false)

  // En cuanto el usuario empieza a bajar, la pista desaparece y no vuelve
  useEffect(() => {
    const alScroll = () => {
      if (window.scrollY > 40) setOculta(true)
    }
    window.addEventListener('scroll', alScroll, { passive: true })
    return () => window.removeEventListener('scroll', alScroll)
  }, [])

  const bajar = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={bajar}
      aria-label="Desliza para ver más"
      tabIndex={oculta ? -1 : 0}
      // bottom-28 / md:bottom-24: por encima del Footer fijo (≈90px en móvil, ≈60px en escritorio)
      className={`pista-scroll fixed bottom-20 left-5 z-30 flex flex-col items-center gap-1 text-white transition-opacity duration-500 md:bottom-20 md:left-1/2 md:-translate-x-1/2 ${
        oculta ? 'pointer-events-none opacity-0' : ''
      }`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-200">
        Desliza
      </span>
      <svg
        className="pista-flecha h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  )
}
