'use client'
import { useRef, useEffect, useState } from 'react'
import Quotes from './Quotes'
import Projects from './Projects'
import Experience from './Experience'
import TechStack from './TechStack'
import About from './About'
import Education from './Education'

export default function Section({ id, title, children }) {
  const ref = useRef()
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.6 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  const translateXClass = inView
    ? 'translate-x-0'
    : '-translate-x-4 sm:-translate-x-10 md:-translate-x-20'

  const renderContent = () => {
    switch (id) {
      case 'intro':
        return (
          <>
            <span className='block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-purple-400 font-bold'>
              FRONTEND
            </span>

            <span className='block mt-3 sm:ml-8 md:ml-14 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold'>
              DEVELOPER
            </span>

            <div className='mt-10'>{children}</div>
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

      case 'education':
        return <Education />

      default:
        return (
          <>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6'>
              {title}
            </h2>
            {children}
          </>
        )
    }
  }

  return (
    <section
      ref={ref}
      id={id}
      className='relative py-20 sm:py-28 md:py-36 flex flex-col items-center w-full overflow-hidden'
    >
      <div
        className={`w-full
        max-w-full sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl
        px-14 sm:px-10 md:px-16 lg:px-24 xl:px-32
        transition-transform duration-700 ease-out ${translateXClass}`}
      >
        {renderContent()}
      </div>
    </section>
  )
}
