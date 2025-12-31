'use client'
import React from 'react'

/**
 * Componente de fondo animado adaptado al Hero.
 */
const ParticlesBackground = () => {
  return (
    <div className='fixed inset-0 bg-gradient-to-tr from-purple-900 via-indigo-800 to-purple-700 z-0 overflow-hidden'>
      {/* Shapes con animación optimizada */}
      <div
        className='absolute rounded-full animated-shape'
        style={{
          top: 100,
          left: 150,
          height: 180,
          width: 180,
          backgroundColor: '#9333ea',
          opacity: 0.3,
          animation: 'pulse 6s ease-in-out infinite',
        }}
      ></div>

      <div
        className='absolute rounded-full animated-shape'
        style={{
          top: 200,
          left: 50,
          height: 220,
          width: 220,
          backgroundColor: 'transparent',
          border: '2px solid #c084fc',
          opacity: 0.4,
          animation: 'spin 50s linear infinite',
        }}
      ></div>

      <div
        className='absolute rounded-lg animated-shape'
        style={{
          top: 450,
          right: 200,
          height: 160,
          width: 160,
          backgroundColor: '#8b5cf6',
          opacity: 0.35,
          animation: 'pulse 7s ease-in-out infinite',
        }}
      ></div>

      <div
        className='absolute rounded-full animated-shape'
        style={{
          top: 500,
          right: 300,
          height: 130,
          width: 130,
          border: '2px solid #a78bfa',
          backgroundColor: 'transparent',
          opacity: 0.45,
          animation: 'spin-left 40s linear infinite',
        }}
      ></div>

      <div
        className='absolute rounded-3xl animated-shape'
        style={{
          top: 600,
          left: 550,
          height: 200,
          width: 200,
          backgroundColor: '#7c3aed',
          opacity: 0.25,
          animation: 'pulse 8s ease-in-out infinite',
        }}
      ></div>

      {/* Animaciones CSS */}
      <style>
        {`
          .animated-shape {
            will-change: transform, opacity;
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes spin-left {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.6; }
          }
        `}
      </style>
    </div>
  )
}

export default ParticlesBackground
