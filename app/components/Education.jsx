'use client'

export default function Experience() {
  const education = {
    Unita: {
      titulo: 'FP Superior de Desarrollo Web',
      empresa: 'IES Las Fuentezuelas',
      periodo: '2021 - 2024',
      ubicacion: 'Jaén',
      descripcion:
        'Grado estudiado en instituto público con un profesorado excelente. IES Las Fuentezuelas tiene una historia completa sobre la enseñanza en grados con muchos años de experiencia (más de 20 enseñanzas de formación) y muy buenas valoraciones.',
      link: 'https://www.linkedin.com/company/i-e-s-las-fuentezuelas-ja%C3%A9n/?originalSubdomain=es',
    },
  }

  return (
    <section className='px-4 sm:px-6 md:px-8 lg:px-12 py-20 relative'>
      <div className='flex items-center gap-4 mb-12'>
        <img
          src='./media/engranaje.webp'
          alt='Educación'
          className='w-10 h-10 object-contain'
        />
        <h2 className='text-4xl md:text-5xl font-extrabold text-purple-400'>
          Mi Educación
        </h2>
      </div>

      {/* Timeline */}
      <div className='relative max-w-4xl mx-auto'>
        {/* Línea vertical */}
        <div className='absolute left-5 top-0 w-1 h-full bg-purple-700 rounded-full'></div>

        {Object.entries(education).map(([key, edu], index) => (
          <div
            key={key}
            className='relative mb-12 pl-12 flex flex-col md:flex-row items-start md:items-center transition-transform duration-700 ease-out hover:scale-105 cursor-pointer'
            onClick={() => window.open(edu.link, '_blank')}
          >
            {/* Punto del timeline */}
            <div className='absolute left-0 top-1 w-4 h-4 bg-purple-400 rounded-full border-2 border-white'></div>

            {/* Contenido de la tarjeta */}
            <div className='bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-6 shadow-lg w-full md:w-[calc(100%-3rem)]'>
              <h3 className='text-2xl md:text-3xl font-bold text-white mb-1'>
                {edu.titulo}
              </h3>
              <p className='text-lg text-purple-300 font-semibold mb-1'>
                {edu.empresa} | {edu.periodo} | {edu.ubicacion}
              </p>
              <p className='text-gray-300'>{edu.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
