'use client'

import { useEffect, useRef, useState } from 'react'
import { useSeccionActiva } from '../hooks/useSeccionActiva'
import { useProgresoSeccion } from '../hooks/useProgresoSeccion'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useParallaxRaton } from '../hooks/useParallaxRaton'
import { useProyectoHover } from '../hooks/useProyectoHover'

const IDS = ['intro', 'about', 'tech', 'experience', 'projects', 'education']

// true  = los stickers de secciones anteriores se quedan pegados (se acumulan)
// false = cada sticker se va hacia arriba al salir de su sección
const ACUMULAR = false

// Sección cuyos stickers aparecen poco a poco según el scroll (campo "aparece": 0..1)
const SECCION_PROGRESIVA = 'projects'

// Grosor del borde blanco en píxeles (escritorio / móvil)
const BORDE_ESCRITORIO = 6
const BORDE_MOVIL = 4

// Parallax con el ratón: píxeles de desplazamiento máximo con profundidad 1
const AMPLITUD = 22
// Profundidad por defecto según el orden del sticker dentro de su sección.
// Más alto = más cerca = se mueve más. Puedes fijarla con el campo "prof" en un sticker.
const PROFUNDIDADES = [1, 1.6, 0.7]

// Cuánto crece un sticker cuando el ratón está sobre la tarjeta de su proyecto
const ESCALA_HOVER = 1.1

// Contorno blanco con drop-shadow encadenados (funciona también en Safari iOS)
function filtroSticker(g) {
  return [
    `drop-shadow(${g}px 0 0 white)`,
    `drop-shadow(-${g}px 0 0 white)`,
    `drop-shadow(0 ${g}px 0 white)`,
    `drop-shadow(0 -${g}px 0 white)`,
    'drop-shadow(0 10px 14px rgba(0,0,0,0.45))'
  ].join(' ')
}

// capa: 'frente' = por encima del contenido (para secciones con tarjetas opacas)
//       sin capa = por detrás del contenido
// proyecto: clave de la tarjeta en Projects.jsx; reacciona cuando el ratón está sobre ella
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

  // ── PROYECTOS: delante del contenido, apilados en el borde derecho ──
  // aparece = punto del recorrido (0 = al entrar, 1 = al final) en el que entra
  {
    seccion: 'projects',
    capa: 'frente',
    proyecto: 'Ludus',
    src: '/stickers/ludus.png',
    alt: 'Ludus',
    pos: { top: '10%', right: '5%', width: 'clamp(140px, 17vw, 250px)' },
    rot: -5,
    delay: 0,
    aparece: 0
  },
  {
    seccion: 'projects',
    capa: 'frente',
    proyecto: 'RaSearch',
    src: '/stickers/rasearch.png',
    alt: 'RaSearch',
    pos: { top: '40%', right: '8%', width: 'clamp(100px, 12vw, 180px)' },
    rot: 8,
    delay: 0,
    aparece: 0.25
  },
  {
    seccion: 'projects',
    capa: 'frente',
    proyecto: 'Parkly',
    src: '/stickers/parkly.png',
    alt: 'Parkly',
    pos: { bottom: '8%', right: '6%', width: 'clamp(100px, 12vw, 180px)' },
    rot: -7,
    delay: 0,
    aparece: 0.5
  },

  // ── FORMACIÓN (id "education") ──
  {
    seccion: 'education',
    src: '/stickers/libros.png',
    alt: 'Libros',
    pos: { bottom: '10%', right: '30%', width: 'clamp(110px, 18vw, 260px)' },
    rot: -7,
    delay: 350
  },
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
  const progresoProyectos = useProgresoSeccion(SECCION_PROGRESIVA)
  const proyectoHover = useProyectoHover()

  const esMovil = useMediaQuery('(max-width: 767px)')
  const reducirMovimiento = useMediaQuery('(prefers-reduced-motion: reduce)')
  const punteroFino = useMediaQuery('(hover: hover) and (pointer: fine)')

  // Parallax solo con ratón, en escritorio y si no se pide reducir movimiento
  const parallaxActivo = punteroFino && !esMovil && !reducirMovimiento
  const raizRef = useRef(null)
  useParallaxRaton(raizRef, parallaxActivo)

  // Los stickers arrancan fuera de pantalla y entran en cuanto se monta el componente
  const [listo, setListo] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setListo(true))
    )
    return () => cancelAnimationFrame(id)
  }, [])

  // Posición de cada sticker dentro de su sección (para ordenarlos en móvil)
  const contadorPorSeccion = {}

  // Dos capas: una detrás del contenido y otra delante
  const detras = []
  const delante = []

  STICKERS.forEach((s, i) => {
    const indice = IDS.indexOf(s.seccion)
    const orden = contadorPorSeccion[s.seccion] ?? 0
    contadorPorSeccion[s.seccion] = orden + 1
    const enFrente = s.capa === 'frente'

    // Los stickers con "aparece" esperan a que el scroll llegue a ese punto
    const habilitado =
      !s.aparece ||
      s.seccion !== SECCION_PROGRESIVA ||
      progresoProyectos >= s.aparece

    let estado
    if (!listo) estado = 'abajo'
    else if (indice === indiceActivo) estado = habilitado ? 'visible' : 'abajo'
    else if (indice > indiceActivo) estado = 'abajo'
    else estado = ACUMULAR ? 'visible' : 'arriba'

    // Con "reducir movimiento" el recorrido es corto y con fundido, no se elimina
    const distancia = reducirMovimiento ? 12 : 130
    const giro = reducirMovimiento ? 1 : 3

    const transform =
      estado === 'visible'
        ? `translate3d(0, 0, 0) rotate(${s.rot}deg)`
        : estado === 'abajo'
          ? `translate3d(0, ${distancia}dvh, 0) rotate(${s.rot * giro}deg)`
          : `translate3d(0, -${distancia}dvh, 0) rotate(${s.rot * giro}deg)`

    // En móvil: los de delante se apilan pequeños en el borde derecho;
    // los de detrás van en fila abajo
    let pos = s.pos
    if (esMovil) {
      pos = enFrente
        ? {
            bottom: `${4 + orden * 24}%`,
            right: '5%',
            width: 'clamp(64px, 18vw, 90px)'
          }
        : {
            bottom: '3%',
            right: `${3 + orden * 31}%`,
            width: 'clamp(80px, 28vw, 130px)'
          }
    }

    const visible = estado === 'visible'

    // Parallax: desplazamiento e inclinación según --px / --py (posición del ratón)
    const profundidad = s.prof ?? PROFUNDIDADES[orden % PROFUNDIDADES.length]
    const k = AMPLITUD * profundidad
    const estiloParallax = parallaxActivo
      ? {
          translate: `calc(var(--px, 0) * ${k}px) calc(var(--py, 0) * ${k}px)`,
          rotate: `calc(var(--px, 0) * ${profundidad * 2}deg)`
        }
      : undefined

    // Reacción a la tarjeta: crece con rebote elástico mientras el ratón está sobre ella
    const resaltado =
      !!s.proyecto && proyectoHover === s.proyecto && !reducirMovimiento

    const estiloCapa2 = {
      ...estiloParallax,
      scale: resaltado ? ESCALA_HOVER : 1,
      // La transición solo afecta a "scale"; el parallax se suaviza por su cuenta
      transitionProperty: 'scale',
      transitionDuration: '350ms',
      transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      willChange: 'translate, rotate, scale'
    }

    const sticker = (
      // Capa 1: posición y entrada/salida con rebote
      <div
        key={i}
        className="absolute will-change-transform"
        style={{
          ...pos,
          transform,
          opacity: reducirMovimiento ? (visible ? 1 : 0) : esMovil ? 0.9 : 1,
          transitionProperty: 'transform, opacity',
          transitionDuration: reducirMovimiento ? '450ms' : '1100ms',
          transitionTimingFunction: reducirMovimiento
            ? 'ease-out'
            : 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          transitionDelay: `${s.delay}ms`
        }}
      >
        {/* Capa 2: parallax con el ratón + crecimiento al hacer hover en la tarjeta */}
        <div style={estiloCapa2}>
          {/* Capa 3: flotación continua (pausada mientras el sticker no se ve) */}
          <div
            className="sticker-flota"
            style={{
              '--dur': `${4 + (i % 3)}s`, // cada uno con su ritmo
              '--ret': `${(i % 4) * -0.7}s`, // retraso negativo: no van sincronizados
              animationPlayState: visible ? 'running' : 'paused'
            }}
          >
            {/* Capa 4: la imagen con su borde blanco */}
            <img
              src={s.src}
              alt={s.alt}
              draggable={false}
              className="block h-auto w-full"
              style={{
                filter: filtroSticker(esMovil ? BORDE_MOVIL : BORDE_ESCRITORIO)
              }}
            />
          </div>
        </div>
      </div>
    )

    const destino = enFrente ? delante : detras
    destino.push(sticker)
  })

  return (
    // Este div no tiene tamaño ni z-index: solo sirve para que las dos capas hereden --px y --py
    <div ref={raizRef}>
      {/* Capa de fondo: por detrás del contenido */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      >
        {detras}
      </div>

      {/* Capa delantera: por encima del contenido, sin bloquear clics */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
      >
        {delante}
      </div>
    </div>
  )
}
