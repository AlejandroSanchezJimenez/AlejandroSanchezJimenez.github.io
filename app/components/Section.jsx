'use client'
import { useRef, useEffect, useState } from 'react'
import Quotes from './Quotes'
import Projects from './Projects'
import Experience from './Experience'
import TechStack from './TechStack'
import About from './About'

export default function Section({ id, title, children }) {
  const ref = useRef()
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.7 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  // Determinar desplazamiento según la sección
  const translateXClass = inView ? 'translate-x-0' : '-translate-x-20'

  // Contenido genérico
  const renderContent = () => {
    switch (id) {
      case 'intro':
        return (
          <>
            <div className='pl-8'>
              <span className='text-7xl text-purple-400 font-bold'>
                FRONTEND
              </span>
              <br />
              <span className='ml-10 text-7xl text-white font-bold'>
                DEVELOPER
              </span>
              <br />
              <br />
              {children}
            </div>
          </>
        )
      case 'about':
        return <About />

      case 'tech':
        return <TechStack />

      case 'experience':
        return <Experience />

      case 'projects':
        return <Projects />

      default:
        return (
          <div className='pl-8'>
            <h2 className='text-4xl font-bold mb-6'>{title}</h2>
            {children}
          </div>
        )
    }
  }

  return (
    <section
      ref={ref}
      id={id}
      className='relative py-20 flex flex-col items-center w-full overflow-hidden'
    >
      <div
        className={`w-full max-w-5xl transition-transform duration-700 ease-out ${translateXClass}`}
      >
        {renderContent()}
      </div>
    </section>
  )
}
