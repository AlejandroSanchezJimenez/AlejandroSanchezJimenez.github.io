'use client'

import { useState } from 'react'

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = {
    Neosif: {
      titulo: 'Neosif',
      subtitulo: 'Proyecto profesional en desarrollo',
      ano: '2025',
      descripcion:
        'Neosif es una aplicación web profesional enfocada en la normativa VERI*FACTU, desarrollada en React JS. Utiliza más de 40 componentes reutilizables y gestiona más de 50 clientes con sus empleados. Desarrollo en entorno profesional manteniendo confidencialidad.',
    },
    SocialMoto: {
      titulo: 'SocialMoto',
      subtitulo: 'Red social para moteros',
      ano: '2024',
      img: '/media/socialmoto/socialmoto1.PNG',
      descripcion:
        'SocialMoto es una red social para moteros con publicaciones, notificaciones, mensajes privados y rutas. Trabajo individual con Symfony, JavaScript y MySQL, con Bootstrap y Docker. Actualmente inactivo por falta de tiempo.',
    },
    Parkly: {
      titulo: 'Parkly',
      subtitulo: 'App móvil para gestionar parkings de moto',
      ano: '2024-2025',
      img: '/media/parkly/7.webp',
      descripcion:
        'Parkly es una app móvil para localizar parkings, reservar plazas y gestionar pagos. Desarrollada con React Native y Firebase. Actualmente parada por falta de tiempo.',
    },
  }

  return (
    <div className='pl-8 relative'>
      <div className='flex items-center gap-4 mb-6'>
        <img
          src='/media/engranaje.webp'
          alt='Tech Stack'
          className='w-10 h-10 object-contain'
        />
        <h4 className='text-3xl font-bold'>Algunos proyectos</h4>
      </div>

      <div className='w-full max-w-5xl flex flex-col space-y-8 relative'>
        {Object.entries(projects).map(([key, project], index) => (
          <div
            key={key}
            className='relative overflow-hidden rounded-2xl shadow-2xl p-6 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-500 transform transition duration-700 ease-out hover:scale-105 cursor-pointer'
            style={{
              animationDelay: `${index * 150}ms`,
              animationName: 'fadeSlide',
              animationDuration: '800ms',
              animationFillMode: 'forwards',
              opacity: 0,
            }}
            onClick={() => project.link && window.open(project.link, '_blank')}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <span className='absolute top-4 right-4 bg-purple-900/70 text-white text-sm px-2 py-1 rounded-full'>
              {project.ano}
            </span>

            <h3 className='text-3xl font-extrabold text-white mb-2'>
              {project.titulo}
            </h3>

            <p className='text-purple-200 font-semibold mb-4'>
              {project.subtitulo}
            </p>

            <p className='text-gray-100'>{project.descripcion}</p>
          </div>
        ))}
      </div>

      {/* Imagen flotante global */}
      {hoveredProject?.img && (
        <div className='fixed top-1/4 -left-[40%] w-96 h-56 rounded-xl shadow-2xl overflow-hidden z-50'>
          <img
            src={hoveredProject.img}
            alt={hoveredProject.titulo}
            className='w-full h-full object-cover'
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
