export default function About() {
  const birthDate = new Date('2000-10-17')

  const calculateAge = (date) => {
    const today = new Date()
    let age = today.getFullYear() - date.getFullYear()
    const monthDiff = today.getMonth() - date.getMonth()
    const dayDiff = today.getDate() - date.getDate()

    // Si aún no ha llegado su cumpleaños este año
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--
    }

    return age
  }

  const age = calculateAge(birthDate)

  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-purple-400'>
        Este soy yo
      </h2>
      <hr className='mb-6 border-gray-600' />

      <div className='flex flex-col md:flex-row gap-6 md:gap-10 text-white'>
        <div className='flex flex-col w-full md:w-1/2'>
          <span className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
            Mi nombre es Alejandro.
          </span>
          <span className='text-base sm:text-lg'>
            También me puedes llamar Alex, cualquiera me vale. Soy un
            desarrollador frontend especializado en React, Next.js y TypeScript.
            Si se puede encapsular, ¡hazle un componente!
          </span>
        </div>

        <div className='w-full md:w-1/2 text-base sm:text-lg'>
          <p>
            Tengo {age} años y llevo programando 3, de los cuales 1 ha sido
            trabajando profesionalmente en una empresa de Málaga. Nací en Jaén y
            allí fue donde aprendí a programar y a diseñar interfaces. Me gusta
            trabajar en proyectos que combinan buen diseño y experiencia de
            usuario.
          </p>
          <p className='mt-4'>
            Me encanta dejar volar mi creatividad y ver como el código cobra
            vida. Si la app es intuitiva, fácil de usar y tiene buen diseño, eso
            significa que tiene las tres cosas más importantes para un usuario:
            funcionalidad, usabilidad y experiencia. Y más importante, te hace
            sentir que has creado algo realmente útil.
          </p>
        </div>
      </div>
    </div>
  )
}
