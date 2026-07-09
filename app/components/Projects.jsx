'use client'
import { useState, useEffect, useRef } from 'react'

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowSize.width < 768

  // Listener para cerrar la imagen al clicar fuera en móvil
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target) &&
        isMobile
      ) {
        setHoveredProject(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobile])

  const projects = {
    TotallyStyled: {
      titulo: 'TotallyStyled',
      subtitulo:
        'Aplicación para guardar tus outfits basada en la famosa película de los 90 Clueless',
      url: 'https://alejandrosanchezjimenez.github.io/TotallyStyled/',
      ano: '2026',
      descripcion:
        'TotallyStyled nace del amor y de la necesidad. Mi pareja necesitaba una aplicación para guardar sus outfits, pero no encontró una que se ajustara a sus necesidades. Fue entonces que decidí crear una, y con la ayuda de Clueless (película icónica) en un par de días le di solución. Está creado en Flutter, utiliza Firebase y Firestore para almacenar los datos, y utiliza Flutter UI para la interfaz. Actualmente en desarrollo, con funcionalidades básicas implementadas y pruebas en curso.'
    },
    MySyncedList: {
      titulo: 'MySyncedList',
      subtitulo: 'Aplicación para sincronizar listas de tareas',
      url: 'https://alejandrosanchezjimenez.github.io/mysyncedlist/',
      ano: '2026',
      descripcion:
        'MySyncedList es una aplicación para sincronizar listas de tareas entre dispositivos. Utiliza flutter, se creó como una necesidad personal. Permite crear listas, compartirlas con otros usuarios y sincronizarlas en tiempo real. Actualmente en desarrollo, con funcionalidades básicas implementadas y pruebas en curso.'
    },
    PokeClick: {
      titulo: 'PokeClick',
      subtitulo: 'Web juego de colección Pokemon',
      url: 'https://alejandrosanchezjimenez.github.io/PokeClick/',
      ano: '2026',
      descripcion:
        'PokeClick es un juego web de colección Pokémon. Un pequeño proyecto que permite abrir sobres con monedas conseguidas a base de clickar en la pantalla. Contiene desafios y distintos packs para obtener Pokémon y así completar tu colección. Está desarrollado en React, no tiene backend, solo usa una API pública llamada PokeAPI. Un proyecto secundario hecho en ratos libres juntando dos pasiones, la programación y Pokémon.'
    },
    Neosif: {
      titulo: 'Neosif',
      subtitulo: 'Proyecto profesional en desarrollo',
      ano: '2025',
      descripcion:
        'Neosif es una aplicación web profesional enfocada en la normativa VERI*FACTU, desarrollada en React JS. Utiliza más de 40 componentes reutilizables y gestiona más de 50 clientes con sus empleados. Desarrollo en entorno profesional manteniendo confidencialidad.'
    },
    Parkly: {
      titulo: 'Parkly',
      subtitulo: 'App móvil para gestionar parkings de moto',
      ano: '2024-2025',
      descripcion:
        'Parkly es una app móvil para localizar parkings, reservar plazas y gestionar pagos. Desarrollada con React Native y Firebase. Actualmente parada por falta de tiempo.'
    },
    SocialMoto: {
      titulo: 'SocialMoto',
      subtitulo: 'Red social para moteros',
      ano: '2024',
      descripcion:
        'SocialMoto es una red social para moteros con publicaciones, notificaciones, mensajes privados y rutas. Trabajo individual con Symfony, JavaScript y MySQL, con Bootstrap y Docker. Actualmente inactivo por falta de tiempo.'
    }
  }

  // Tamaño de la imagen en desktop
  const imageSize = { w: 288, h: 160 }
  const offsetXDesktop = -150
  const offsetYDesktop = -120

  // Posición calculada para desktop
  const getImagePosition = () => {
    const w = imageSize.w
    const h = imageSize.h
    let left = mousePos.x + offsetXDesktop
    let top = mousePos.y + offsetYDesktop

    if (left + w > windowSize.width) left = windowSize.width - w - 10
    if (left < 0) left = 10
    if (top + h > windowSize.height) top = windowSize.height - h - 10
    if (top < 0) top = 10

    return { left, top, w, h }
  }

  const imgPos = getImagePosition()

  return (
    <div
      ref={containerRef}
      className="px-4 sm:px-6 md:px-8 lg:px-12 relative"
      onMouseMove={(e) =>
        !isMobile && setMousePos({ x: e.clientX, y: e.clientY })
      }
      onTouchMove={(e) =>
        !isMobile &&
        setMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY })
      }
    >
      <div className="flex items-center gap-4 mb-6">
        <img
          src="./media/engranaje.webp"
          alt="Tech Stack"
          className="w-10 h-10 object-contain"
        />
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-400">
          Algunos proyectos
        </h2>
      </div>

      <div className="w-full max-w-5xl flex flex-col space-y-8 relative">
        {Object.entries(projects).map(([key, project], index) => (
          <div
            key={key}
            className={`relative overflow-hidden rounded-2xl shadow-2xl p-6 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-500 transform transition duration-700 ease-out hover:scale-105 ${
              project.url ? 'cursor-pointer' : 'cursor-default'
            }`}
            style={{
              animationDelay: `${index * 150}ms`,
              animationName: 'fadeSlide',
              animationDuration: '800ms',
              animationFillMode: 'forwards',
              opacity: 0
            }}
            onClick={(e) => {
              if (project.url) {
                window.open(project.url, '_blank', 'noopener,noreferrer')
                return
              }

              if (isMobile) {
                e.stopPropagation()
                setHoveredProject(
                  hoveredProject?.titulo === project.titulo ? null : project
                )
              } else {
                setHoveredProject(project)
              }
            }}
            onMouseEnter={() => !isMobile && setHoveredProject(project)}
            onMouseLeave={() => !isMobile && setHoveredProject(null)}
          >
            <span className="absolute top-4 right-4 bg-purple-900/70 text-white text-sm px-2 py-1 rounded-full">
              {project.ano}
            </span>

            <h3 className="text-3xl font-extrabold text-white mb-2">
              {project.titulo}
            </h3>

            <p className="text-purple-200 font-semibold mb-4">
              {project.subtitulo}
            </p>

            <p className="text-gray-100">{project.descripcion}</p>

            {/* Imagen en móvil al final del proyecto */}
            {isMobile &&
              hoveredProject?.titulo === project.titulo &&
              hoveredProject.img && (
                <div className="mt-4 w-full h-48 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={hoveredProject.img}
                    alt={hoveredProject.titulo}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              )}
          </div>
        ))}
      </div>

      {/* Imagen flotante en desktop */}
      {!isMobile && hoveredProject?.img && (
        <div
          className="absolute z-50 rounded-xl shadow-2xl overflow-hidden pointer-events-none"
          style={{
            top: imgPos.top + 'px',
            left: imgPos.left + 'px',
            width: imgPos.w + 'px',
            height: imgPos.h + 'px'
          }}
        >
          <img
            src={hoveredProject.img}
            alt={hoveredProject.titulo}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}

      <style jsx>{`
        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
