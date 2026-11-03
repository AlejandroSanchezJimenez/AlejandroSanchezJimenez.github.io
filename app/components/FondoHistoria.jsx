'use client'

import { useEffect, useRef } from 'react'
import { useSeccionActiva } from '../hooks/useSeccionActiva'

const IDS = ['intro', 'about', 'tech', 'experience', 'projects', 'education']

const escenas = {
  intro: (
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900">
      <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
    </div>
  ),

  about: (
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-rose-950/60 to-amber-950/40">
      <div className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
    </div>
  ),

  tech: (
    <div className="absolute inset-0 bg-slate-950">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(56,189,248,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,.25) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
    </div>
  ),

  experience: (
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-emerald-950/50">
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
    </div>
  ),

  projects: (
    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-violet-950/50 to-slate-900">
      <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl" />
    </div>
  ),

  education: (
    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-slate-900 to-slate-950">
      <div className="absolute bottom-0 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl" />
    </div>
  )
}

export default function FondoHistoria() {
  const activa = useSeccionActiva(IDS)
  const capaRef = useRef(null)

  // Parallax suave: el fondo se mueve más lento que el contenido
  useEffect(() => {
    const onScroll = () => {
      if (capaRef.current) {
        capaRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        ref={capaRef}
        className="absolute -inset-[20%] will-change-transform"
      >
        {Object.entries(escenas).map(([id, escena]) => (
          <div
            key={id}
            className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${
              activa === id ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {escena}
          </div>
        ))}
      </div>
    </div>
  )
}
