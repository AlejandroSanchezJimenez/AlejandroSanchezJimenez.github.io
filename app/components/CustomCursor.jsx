'use client'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [trail, setTrail] = useState([])

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setTrail((prev) => [...prev.slice(-10), { x: e.clientX, y: e.clientY }])
    }

    const addHoverEvents = () => {
      const hoverables = document.querySelectorAll('a, button')
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true))
        el.addEventListener('mouseleave', () => setHovered(false))
      })
    }

    window.addEventListener('mousemove', moveCursor)
    addHoverEvents()

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      {/* Trail de partículas */}
      {trail.map((t, i) => (
        <div
          key={i}
          className='fixed pointer-events-none rounded-full z-30'
          style={{
            left: t.x,
            top: t.y,
            transform: 'translate(-50%, -50%)',
            width: `${10 + i}px`,
            height: `${10 + i}px`,
            background: `rgba(139,92,246,${0.1 + i * 0.05})`, // tonos morados
            filter: `blur(${i * 2}px)`,
            transition: 'width 0.2s, height 0.2s, background 0.2s',
          }}
        ></div>
      ))}

      {/* Cursor principal */}
      <div
        className='fixed pointer-events-none z-50 transition-transform duration-150 ease-out rounded-full'
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          width: hovered ? '25px' : '50px',
          height: hovered ? '25px' : '50px',
          background: hovered
            ? 'linear-gradient(45deg, #a78bfa, #8b5cf6)'
            : '#c4b5fd',
          boxShadow:
            '0 0 10px rgba(139,92,246,0.6), 0 0 20px rgba(139,92,246,0.4)',
        }}
      ></div>

      {/* Outline suave */}
      <div
        className='fixed pointer-events-none z-40 transition-all duration-300 ease-out rounded-full'
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          width: hovered ? '60px' : '100px',
          height: hovered ? '60px' : '100px',
          borderRadius: '50%',
          border: '2px solid rgba(139,92,246,0.5)',
          boxShadow: '0 0 15px rgba(139,92,246,0.4)',
        }}
      ></div>
    </>
  )
}
