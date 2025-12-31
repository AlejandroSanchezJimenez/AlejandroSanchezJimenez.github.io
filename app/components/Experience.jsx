export default function Experience() {
  const experience = {
    Unita: {
      titulo: 'Frontend Developer',
      empresa: 'Unita',
      periodo: 'Febrero 2025 - Actualidad',
      descripcion:
        'Desarrollo del frontend de una aplicación de facturación conforme a la normativa VERI*FACTU, utilizada por más de 50 empresas cliente y sus empleados. Implementación de más de 40 componentes reutilizables con React, creación de  pantallas, formularios y flujos completos de usuario. Integración y consumo de APIs REST, mejora y mantenimiento de código existente aplicando buenas prácticas. Colaboración con backend y soporte funcional de la aplicación, con control de versiones y flujo de trabajo en GitHub. Apoyo al backend en Node.js + MongoDB (también MySQL según la estructura necesitada), desarrollando CRUDes estables en TypeScript en momentos críticos del proyecto, asegurando la continuidad del desarrollo y la integración correcta con el frontend.',
      link: 'https://unita.es/',
    },
    Reindal: {
      titulo: 'Prácticas como desarrollador web',
      empresa: 'Reindal',
      periodo: 'Marzo 2024 - Junio 2024',
      descripcion:
        'Desarrollo y mantenimiento de aplicaciones web. Trabajo en entorno internacional utilizando inglés (en ocasiones italiano a menor escala) a nivel profesional. Adaptación a nuevas tecnologías y metodologías de trabajo (Slim Microframework). Colaboración en equipo y resolución de incidencias técnicas.',
      link: 'https://reindal.com/',
    },
  }

  return (
    <div className='pl-8'>
      <div className='flex items-center gap-4 mb-6'>
        <img
          src='./media/engranaje.webp'
          alt='Tech Stack'
          className='w-10 h-10 object-contain'
        />
        <h4 className='text-3xl font-bold'>Mi experiencia</h4>
      </div>
      <div className='w-full max-w-5xl flex flex-col space-y-12'>
        {Object.entries(experience).map(([key, exp], index) => (
          <div
            key={key}
            className={`transition-transform duration-700 ease-out bg-gray-800/50 rounded-md p-6 shadow-lg hover:cursor-pointer hover:scale-105`}
            onClick={() => window.open(exp.link, '_blank')}
          >
            <h3 className='text-2xl font-bold text-purple-400 mb-2'>
              {exp.titulo}
            </h3>
            <p className='text-lg font-semibold text-white mb-1'>
              {exp.empresa} | {exp.periodo}
            </p>
            <p className='text-gray-300'>{exp.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
