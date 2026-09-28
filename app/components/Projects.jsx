'use client'
import { useState, useRef } from 'react'

const PREVIEW_W = 440
const PREVIEW_H = 320

export default function Projects() {
  const containerRef = useRef(null)
  // Vista previa flotante al hacer hover sobre una miniatura
  const [preview, setPreview] = useState(null) // { src, top, left }

  const handleEnter = (e, src) => {
    const container = containerRef.current
    if (!container) return
    const containerRect = container.getBoundingClientRect()
    const rect = e.currentTarget.getBoundingClientRect()

    let left = rect.left - containerRect.left + rect.width / 2 - PREVIEW_W / 2
    const maxLeft = containerRect.width - PREVIEW_W - 8
    if (left < 8) left = 8
    if (left > maxLeft) left = maxLeft

    let top = rect.top - containerRect.top - PREVIEW_H - 12
    if (top < 8) {
      top = rect.bottom - containerRect.top + 12
    }

    setPreview({ src, top, left })
  }

  const handleLeave = () => setPreview(null)

  const projects = {
    'Pastillero+': {
      titulo: 'Pastillero+',
      subtitulo: 'App para gestionar medicamentos y recordatorios',
      ano: '2026',
      descripcion:
        'Aplicación móvil centrada en la organización y seguimiento de tratamientos médicos. Permite crear medicamentos, configurar diferentes dosis y horarios y generar recordatorios automáticos para cada toma. El sistema gestiona las dosis de forma individual, facilitando el seguimiento de tratamientos con varias tomas diarias y permitiendo consultar y administrar las dosis programadas. La aplicación funciona de forma completamente local, por lo que los datos y recordatorios permanecen disponibles sin conexión a Internet.',
      appStore: '',
      img: []
    },
    CrowFall: {
      titulo: 'CrowFall',
      subtitulo:
        'Juego arcade roguelite de conseguir puntos y monedas hasta llegar al nido final ',
      ano: '2026',
      descripcion:
        'CrowFall es un juego arcade roguelite donde los jugadores manejan a un cuervo que salta entre una ciudad en ruinas para llegar a su nido. Utiliza Flutter para su desarrollo y ofrece una experiencia de juego dinámica y desafiante. Actualmente en desarrollo, preparando su ficha para App Store.',
      appStore: '',
      img: []
    },
    RaSearch: {
      titulo: 'RaSearch',
      subtitulo: 'App de catálogo y búsqueda de jeroglíficos egipcios',
      ano: '2026',
      descripcion:
        'RaSearch es una aplicación Flutter para catalogar y buscar jeroglíficos egipcios. Utiliza Firebase y Firestore para almacenar los datos, con una búsqueda universal por código Gardiner, Unicode, símbolo o texto libre, organizada por categorías Gardiner. Incluye caché local con Hive, sistema de favoritos e historial de búsquedas recientes guardado por dispositivo sin necesidad de login, copia de símbolos al portapapeles y la opción de compartir la ficha de cada jeroglífico como PDF. Actualmente en desarrollo, preparando su ficha para App Store.',
      appStore: 'https://apps.apple.com/es/app/rasearch/id6809452019',
      img: []
    },
    TotallyStyled: {
      titulo: 'TotallyStyled',
      subtitulo:
        'Aplicación para guardar tus outfits basada en la famosa película de los 90 Clueless',
      url: 'https://alejandrosanchezjimenez.github.io/TotallyStyled/',
      ano: '2026',
      descripcion:
        'TotallyStyled nace del amor y de la necesidad. Mi pareja necesitaba una aplicación para guardar sus outfits, pero no encontró una que se ajustara a sus necesidades. Fue entonces que decidí crear una, y con la ayuda de Clueless (película icónica) en un par de días le di solución. Está creado en Flutter, utiliza Firebase y Firestore para almacenar los datos, y utiliza Flutter UI para la interfaz. Actualmente en desarrollo, con funcionalidades básicas implementadas y pruebas en curso.',
      appStore: 'https://apps.apple.com/es/app/totally-styled/id6808181347',
      img: []
    },
    MySyncedList: {
      titulo: 'MySyncedList',
      subtitulo: 'Aplicación para sincronizar listas de tareas',
      url: 'https://alejandrosanchezjimenez.github.io/mysyncedlist/',
      ano: '2026',
      descripcion:
        'MySyncedList es una aplicación para sincronizar listas de tareas entre dispositivos. Utiliza flutter, se creó como una necesidad personal. Permite crear listas, compartirlas con otros usuarios y sincronizarlas en tiempo real. Actualmente en desarrollo, con funcionalidades básicas implementadas y pruebas en curso.',
      appStore: 'https://apps.apple.com/es/app/mysyncedlist/id6807769925',
      img: []
    },
    PokeClick: {
      titulo: 'PokeClick',
      subtitulo: 'Web juego de colección Pokemon',
      url: 'https://alejandrosanchezjimenez.github.io/PokeClick/',
      ano: '2026',
      descripcion:
        'PokeClick es un juego web de colección Pokémon. Un pequeño proyecto que permite abrir sobres con monedas conseguidas a base de clickar en la pantalla. Contiene desafios y distintos packs para obtener Pokémon y así completar tu colección. Está desarrollado en React, no tiene backend, solo usa una API pública llamada PokeAPI. Un proyecto secundario hecho en ratos libres juntando dos pasiones, la programación y Pokémon.',
      appStore: '',
      img: [
        './media/pokeclick/pokeclick.PNG',
        './media/pokeclick/Captura.PNG',
        './media/pokeclick/2.PNG',
        './media/pokeclick/3.PNG',
        './media/pokeclick/4.PNG'
      ]
    },
    Neosif: {
      titulo: 'Neosif',
      subtitulo: 'Proyecto profesional en desarrollo',
      ano: '2025',
      descripcion:
        'Neosif es una aplicación web profesional enfocada en la normativa VERI*FACTU, desarrollada en React JS. Utiliza más de 40 componentes reutilizables y gestiona más de 50 clientes con sus empleados. Desarrollo en entorno profesional manteniendo confidencialidad.',
      appStore: '',
      img: []
    },
    Parkly: {
      titulo: 'Parkly',
      subtitulo: 'App móvil para gestionar parkings de moto',
      ano: '2024-2025',
      descripcion:
        'Parkly es una app móvil para localizar parkings, reservar plazas y gestionar pagos. Desarrollada con React Native y Firebase. Actualmente parada por falta de tiempo.',
      appStore: 'https://apps.apple.com/es/app/parkly/id6813046542',
      img: []
    },
    SocialMoto: {
      titulo: 'SocialMoto',
      subtitulo: 'Red social para moteros',
      ano: '2024',
      descripcion:
        'SocialMoto es una red social para moteros con publicaciones, notificaciones, mensajes privados y rutas. Trabajo individual con Symfony, JavaScript y MySQL, con Bootstrap y Docker. Actualmente inactivo por falta de tiempo.',
      appStore: '',
      img: [
        './media/socialmoto/socialmoto1.PNG',
        './media/socialmoto/socialmoto5.PNG',
        './media/socialmoto/socialmoto7.PNG',
        './media/socialmoto/socialmoto8.PNG',
        './media/socialmoto/socialmoto10.PNG',
        './media/socialmoto/socialmoto11.PNG'
      ]
    }
  }

  return (
    <div ref={containerRef} className="px-4 sm:px-6 md:px-8 lg:px-12 relative">
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
            onClick={() => {
              if (project.url) {
                window.open(project.url, '_blank', 'noopener,noreferrer')
              }
            }}
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

            {/* Galería de imágenes del proyecto, justo debajo de la descripción */}
            {project.img && project.img.length > 0 && (
              <div
                className={`mt-4 grid gap-3 ${
                  project.img.length === 1
                    ? 'grid-cols-1'
                    : project.img.length === 2
                      ? 'grid-cols-2'
                      : 'grid-cols-2 sm:grid-cols-3'
                }`}
              >
                {project.img.map((src, i) => (
                  <div
                    key={i}
                    onMouseEnter={(e) => handleEnter(e, src)}
                    onMouseLeave={handleLeave}
                    className="relative w-full h-40 rounded-xl overflow-hidden shadow-lg group"
                  >
                    <img
                      src={src}
                      alt={`${project.titulo} ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            )}

            {project.appStore && (
              <a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-4 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/60 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="w-5 h-5 fill-white"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                Descarga en App Store
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Vista previa flotante: aparece al pasar el ratón por una miniatura, */}
      {/* posicionada respecto al contenedor (sigue el scroll actual) */}
      {preview && (
        <div
          className="absolute z-50 rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-black/90 pointer-events-none flex items-center justify-center"
          style={{
            top: preview.top + 'px',
            left: preview.left + 'px',
            width: PREVIEW_W + 'px',
            height: PREVIEW_H + 'px'
          }}
        >
          <img
            src={preview.src}
            alt="Vista previa"
            className="max-w-full max-h-full object-contain"
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
