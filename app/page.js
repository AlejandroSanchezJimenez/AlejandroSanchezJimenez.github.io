'use client'

import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Section from './components/Section'
import Footer from './components/Footer'

export default function HomePage() {
  const [heroFinished, setHeroFinished] = useState(false)

  return (
    <>
      {!heroFinished && <Hero onFinish={() => setHeroFinished(true)} />}
      {heroFinished && (
        <main>
          <Section id='intro' title='Frontend Developer'>
            <p className='max-w-[40%] text-gray-300'>
              ¡Hola! Soy un desarrollador frontend especializado en React,
              Next.js y TypeScript. Me apasiona crear interfaces modernas,
              eficientes y accesibles. Estoy muy interesado en aprender y
              desarrollar nuevas tecnologías que sean útiles para mi trabajo y
              amigables para el usuario.
            </p>
            <br />
          </Section>
          <Section id='about' title='Sobre mí' />
          <Section id='tech' title='Stack Tecnológico' />
          <Section id='experience' title='Experiencia' />
          <Section id='projects' title='Formación' />
          <Footer />
        </main>
      )}
    </>
  )
}
