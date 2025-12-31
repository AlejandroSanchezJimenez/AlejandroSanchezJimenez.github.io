'use client'
import { useEffect, useState } from 'react'

export default function Quotes() {
  const quotes = [
    'En los chistes y en el código, si tienes que explicar algo, es malo.',
    'Ser competente en tu framework estrella y llevar las actualizaciones al día es lo que te convierte en un desarrollador actualizado',
    'First, solve the problem. Then, write the code.',
  ]

  return (
    <div className='fixed inset-y-0 z-40 flex flex-col justify-center space-y-6 pointer-events-none'>
      {/* Quote 0 - derecha */}
      <div className='absolute right-0 max-w-xs p-4 bg-purple-700 text-white rounded-l shadow'>
        <p>“{quotes[0]}”</p>
      </div>

      {/* Quote 1 - izquierda */}
      <div className='absolute left-0 max-w-xs p-4 bg-purple-700 text-white rounded-r shadow mt-32'>
        <p>“{quotes[1]}”</p>
      </div>

      {/* Quote 2 - derecha */}
      <div className='absolute right-0 max-w-xs p-4 bg-purple-700 text-white rounded-l shadow mt-64'>
        <p>“{quotes[2]}”</p>
      </div>
    </div>
  )
}
