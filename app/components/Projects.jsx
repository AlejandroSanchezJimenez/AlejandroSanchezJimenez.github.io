'use client'
import { useState, useRef } from 'react'
import { fijarProyectoHover } from '../hooks/useProyectoHover'
import { projects } from '../data/proyectos'

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
            onPointerEnter={(e) => {
              if (e.pointerType === 'mouse') fijarProyectoHover(key)
            }}
            onPointerLeave={() => fijarProyectoHover(null)}
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
