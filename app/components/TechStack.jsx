export default function TechStack() {
  const tecnologias = {
    FRONTEND: {
      React: {
        name: 'React',
        level: 'Avanzado',
        img: './media/tech/react.png',
      },
      JavaScript: {
        name: 'JavaScript ES6+',
        level: 'Avanzado',
        img: './media/tech/js.webp',
      },
      TypeScript: {
        name: 'TypeScript',
        level: 'Intermedio',
        img: './media/tech/ts.png',
      },
      HTML: { name: 'HTML5', level: 'Avanzado', img: './media/tech/html.png' },
      CSS: { name: 'CSS3', level: 'Avanzado', img: './media/tech/css.png' },
      Tailwind: {
        name: 'Tailwind CSS',
        level: 'Avanzado',
        img: './media/tech/tailwind.png',
      },
      Bootstrap: {
        name: 'Bootstrap',
        level: 'Avanzado',
        img: './media/tech/bootstrap.png',
      },
      Angular: {
        name: 'Angular',
        level: 'Intermedio',
        img: './media/tech/angular.png',
      },
      Figma: {
        name: 'Figma',
        level: 'Avanzado',
        img: './media/tech/figma.png',
      },
    },
    BACKEND: {
      PHP: { name: 'PHP', level: 'Avanzado', img: './media/tech/php.png' },
      Symfony: {
        name: 'Symfony',
        level: 'Avanzado',
        img: './media/tech/symfony.webp',
      },
      Node: {
        name: 'Node.js',
        level: 'Intermedio',
        img: './media/tech/node.webp',
      },
      Python: {
        name: 'Python',
        level: 'Intermedio',
        img: './media/tech/python.png',
      },
      Dart: { name: 'Dart', level: 'Intermedio', img: './media/tech/dart.png' },
    },
    DATABASES: {
      MySQL: {
        name: 'MySQL',
        level: 'Avanzado',
        img: './media/tech/mysql.png',
      },
      MongoDB: {
        name: 'MongoDB',
        level: 'Intermedio',
        img: './media/tech/mongo.svg',
      },
      SQLDeveloper: {
        name: 'SQL Developer',
        level: 'Avanzado',
        img: './media/tech/sqldeveloper.webp',
      },
      Firebase: {
        name: 'Firebase',
        level: 'Intermedio',
        img: './media/tech/firebase.png',
      },
    },
    TOOLS: {
      Git: { name: 'Git', level: 'Avanzado', img: './media/tech/git.png' },
      Docker: {
        name: 'Docker',
        level: 'Básico',
        img: './media/tech/docker.png',
      },
      Postman: {
        name: 'Postman',
        level: 'Intermedio',
        img: './media/tech/postman.webp',
      },
      Flutter: {
        name: 'Flutter',
        level: 'Intermedio',
        img: './media/tech/flutter.webp',
      },
    },
  }

  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12'>
      <div className='flex items-center gap-4 mb-10'>
        <img
          src='./media/engranaje.webp'
          alt='Tech Stack'
          className='w-10 h-10 object-contain'
        />
        <h2 className='text-4xl md:text-5xl font-extrabold text-purple-400'>
          Mi stack tecnológico
        </h2>
      </div>

      <div className='flex flex-col space-y-12'>
        {Object.entries(tecnologias).map(([category, techs]) => (
          <div
            key={category}
            className='flex flex-col md:flex-row gap-6 md:gap-10 items-start'
          >
            {/* Título grande */}
            <span className='text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-purple-400 w-full md:w-1/2'>
              {category}
            </span>

            {/* Tecnologías */}
            <div className='w-full md:w-1/2 flex flex-wrap gap-4'>
              {Object.values(techs).map((tech) => (
                <div
                  key={tech.name}
                  className='flex items-center space-x-2 bg-gray-800/50 rounded-md px-3 py-2 hover:scale-105 transition-transform'
                >
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className='w-10 h-10 object-contain'
                  />
                  <div className='flex flex-col'>
                    <span className='text-base sm:text-lg text-gray-200'>
                      {tech.name}
                    </span>
                    <span className='text-sm sm:text-base text-purple-300'>
                      ({tech.level})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
