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
    <div className='pl-8'>
      <h2 className='text-lg font-bold'>Este soy yo</h2>
      <hr className='mb-6' />
      <div className='flex flex-row space-y-4 gap-5'>
        <div className='flex flex-col w-[50%]'>
          <span className='text-4xl font-bold mb-6'>
            Mi nombre es Alejandro.
          </span>
          <span className='text-lg'>
            también me puedes llamar Alex, cualquiera me vale. Soy un
            desarrollador frontend especializado en React, Next.js y TypeScript.
            Si se puede encapsular, ¡hazle un componente!
          </span>
        </div>
        <span className='text-lg w-[50%]'>
          Tengo {age} años y llevo programando 3, de los cuales 1 ha sido
          trabajando profesionalmente en una empresa de Málaga. Nací en Jaén y
          allí fue donde aprendí a programar y a diseñar interfaces. Me gusta
          trabajar en proyectos que combinan buen diseño y experiencia de
          usuario. <br />
          <br /> Me encanta dejar volar mi creatividad y ver como el código
          cobra vida. Si la app es intuitiva, fácil de usar y tiene buen diseño,
          eso significa que tiene las tres cosas que son más importantes para un
          usuario: la funcionalidad, la usabilidad y la experiencia. Y más
          importante, te hace sentir que has creado algo realmente útil.
        </span>
      </div>
    </div>
  )
}
