'use client'

import { useSeccionActiva } from '../hooks/useSeccionActiva'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { CAPITULOS, IDS_CAPITULOS } from '../data/capitulos'

export default function NavegacionCapitulos() {
  const activa = useSeccionActiva(IDS_CAPITULOS)
  const reducirMovimiento = useMediaQuery('(prefers-reduced-motion: reduce)')

  const indiceActivo = Math.max(0, IDS_CAPITULOS.indexOf(activa))
  const progreso = indiceActivo / (CAPITULOS.length - 1)

  const ir = (id, indice) => {
    const behavior = reducirMovimiento ? 'auto' : 'smooth'
    // El primer capítulo vuelve arriba del todo (hay un margen encima de la intro)
    if (indice === 0) {
      window.scrollTo({ top: 0, behavior })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' })
  }

  return (
    <nav
      aria-label="Capítulos"
      className="capitulos-nav fixed right-2 top-1/2 z-30 -translate-y-1/2 md:right-5"
    >
      <ol className="relative flex flex-col items-end gap-5 md:gap-6">
        {/* Línea de fondo y línea de progreso, alineadas con el centro de los puntos */}
        <span
          aria-hidden
          className="absolute bottom-1.5 right-[5px] top-1.5 w-px bg-white/20"
        >
          <span
            className="block w-px bg-purple-400 transition-[height] duration-500 motion-reduce:transition-none"
            style={{ height: `${progreso * 100}%` }}
          />
        </span>

        {CAPITULOS.map((c, i) => {
          const esActivo = i === indiceActivo
          const numero = String(i + 1).padStart(2, '0')

          return (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => ir(c.id, i)}
                aria-label={`Ir a ${c.etiqueta}`}
                aria-current={esActivo ? 'location' : undefined}
                // padding y margen negativo: zona de toque de 24px sin mover el layout
                className="group relative -m-1.5 flex rounded-full p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
              >
                {/* Etiqueta: solo en escritorio. Fija en el activo, al hover en el resto */}
                <span
                  className={`pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-purple-950/70 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 motion-reduce:transition-none md:block ${
                    esActivo
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                  }`}
                >
                  <span className="mr-1.5 text-purple-300">{numero}</span>
                  {c.etiqueta}
                </span>

                {/* Punto */}
                <span
                  className={`block h-3 w-3 rounded-full border-2 transition-all duration-300 motion-reduce:transition-none ${
                    esActivo
                      ? 'scale-125 border-purple-300 bg-purple-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]'
                      : i < indiceActivo
                        ? 'border-purple-400 bg-purple-400/60 group-hover:bg-purple-300'
                        : 'border-white/60 bg-transparent group-hover:bg-white/60'
                  }`}
                />
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
