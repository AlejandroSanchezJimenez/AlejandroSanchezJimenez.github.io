'use client'

import { useSeccionActiva } from '../hooks/useSeccionActiva'

const IDS = ['intro', 'about', 'tech', 'experience', 'projects', 'education']

// true  = los stickers de secciones anteriores se quedan pegados (se acumulan)
// false = cada sticker se va hacia arriba al salir de su sección
const ACUMULAR = false

// Grosor del borde blanco en píxeles
const GROSOR_BORDE = 8

const STICKERS = [
  // ── INTRO ──
  {
    seccion: 'intro',
    src: '/stickers/portatil.webp',
    alt: 'Portátil con código',
    pos: { top: '15%', right: '6%', width: 'clamp(160px, 28vw, 380px)' },
    rot: 6,
    delay: 0
  },
  {
    seccion: 'intro',
    src: '/stickers/cafe.webp',
    alt: 'Taza de café',
    pos: { bottom: '10%', right: '30%', width: 'clamp(100px, 16vw, 230px)' },
    rot: -9,
    delay: 200
  },

  // ── SOBRE MÍ ──
  {
    seccion: 'about',
    src: '/stickers/persona.png',
    alt: 'Persona trabajando',
    pos: { top: '20%', right: '8%', width: 'clamp(150px, 26vw, 360px)' },
    rot: -6,
    delay: 0
  },

  // ── STACK ──
  {
    seccion: 'tech',
    src: '/stickers/react.webp',
    alt: 'Logo de React',
    pos: { top: '10%', right: '30%', width: 'clamp(110px, 18vw, 260px)' },
    rot: 10,
    delay: 0
  },
  {
    seccion: 'tech',
    src: '/stickers/servidor.png',
    alt: 'Servidor',
    pos: { top: '45%', right: '5%', width: 'clamp(130px, 22vw, 320px)' },
    rot: -5,
    delay: 150
  },
  {
    seccion: 'tech',
    src: '/stickers/movil.webp',
    alt: 'App móvil',
    pos: { bottom: '8%', right: '32%', width: 'clamp(100px, 15vw, 220px)' },
    rot: 7,
    delay: 300
  },

  // ── EXPERIENCIA ──
  {
    seccion: 'experience',
    src: '/stickers/oficina.png',
    alt: 'Oficina',
    pos: { top: '14%', right: '6%', width: 'clamp(150px, 26vw, 360px)' },
    rot: 5,
    delay: 0
  },
  {
    seccion: 'experience',
    src: '/stickers/basedatos.png',
    alt: 'Base de datos',
    pos: { bottom: '12%', right: '28%', width: 'clamp(110px, 17vw, 250px)' },
    rot: -8,
    delay: 200
  },

  // ── FORMACIÓN (id "projects") ──
  {
    seccion: 'projects',
    src: '/stickers/libros.png',
    alt: 'Libros',
    pos: { top: '18%', right: '8%', width: 'clamp(140px, 24vw, 340px)' },
    rot: -7,
    delay: 0
  },

  // ── EDUCACIÓN ──
  {
    seccion: 'education',
    src: '/stickers/birrete.png',
    alt: 'Birrete',
    pos: { top: '12%', right: '25%', width: 'clamp(110px, 18vw, 260px)' },
    rot: 9,
    delay: 0
  },
  {
    seccion: 'education',
    src: '/stickers/diploma.png',
    alt: 'Diploma',
    pos: { top: '42%', right: '6%', width: 'clamp(140px, 24vw, 340px)' },
    rot: -5,
    delay: 200
  }
]

export default function StickersHistoria() {
  const activa = useSeccionActiva(IDS)
  const indiceActivo = IDS.indexOf(activa)

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {/* Filtro que dibuja el borde blanco siguiendo la silueta del PNG */}
      <svg width="0" height="0" className="absolute">
        <filter id="borde-sticker" x="-15%" y="-15%" width="130%" height="130%">
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={GROSOR_BORDE}
            result="dilatado"
          />
          <feFlood floodColor="#ffffff" result="blanco" />
          <feComposite
            in="blanco"
            in2="dilatado"
            operator="in"
            result="borde"
          />
          <feMerge>
            <feMergeNode in="borde" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </svg>

      {STICKERS.map((s, i) => {
        const indice = IDS.indexOf(s.seccion)

        let estado
        if (indice === indiceActivo) estado = 'visible'
        else if (indice > indiceActivo) estado = 'abajo'
        else estado = ACUMULAR ? 'visible' : 'arriba'

        const transform =
          estado === 'visible'
            ? `translateY(0) rotate(${s.rot}deg)`
            : estado === 'abajo'
              ? `translateY(150vh) rotate(${s.rot * 4}deg)`
              : `translateY(-150vh) rotate(${s.rot * 4}deg)`

        return (
          <img
            key={i}
            src={s.src}
            alt={s.alt}
            draggable={false}
            className="absolute h-auto opacity-40 will-change-transform motion-reduce:transition-none md:opacity-100"
            style={{
              ...s.pos,
              transform,
              // Primero el borde blanco con la forma del PNG, luego la sombra sobre esa silueta
              filter:
                'url(#borde-sticker) drop-shadow(0 12px 16px rgba(0,0,0,0.45))',
              transitionProperty: 'transform',
              transitionDuration: '1100ms',
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              transitionDelay: `${s.delay}ms`
            }}
          />
        )
      })}
    </div>
  )
}
