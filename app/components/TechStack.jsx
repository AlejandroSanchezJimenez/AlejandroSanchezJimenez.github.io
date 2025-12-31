export default function TechStack() {
  const tecnologias = {
    FRONTEND: {
      React: {
        name: 'React',
        level: 'Avanzado',
        img: '/media/tech/react.png',
      },
      JavaScript: {
        name: 'JavaScript ES6+',
        level: 'Avanzado',
        img: '/media/tech/js.webp',
      },
      TypeScript: {
        name: 'TypeScript',
        level: 'Intermedio',
        img: '/media/tech/ts.png',
      },
      HTML: { name: 'HTML5', level: 'Avanzado', img: '/media/tech/html.png' },
      CSS: { name: 'CSS3', level: 'Avanzado', img: '/media/tech/css.png' },
      Tailwind: {
        name: 'Tailwind CSS',
        level: 'Avanzado',
        img: '/media/tech/tailwind.png',
      },
      Bootstrap: {
        name: 'Bootstrap',
        level: 'Avanzado',
        img: '/media/tech/bootstrap.png',
      },
      Angular: {
        name: 'Angular',
        level: 'Intermedio',
        img: '/media/tech/angular.png',
      },
      Figma: {
        name: 'Figma',
        level: 'Avanzado',
        img: '/media/tech/figma.png',
      },
    },

    BACKEND: {
      PHP: { name: 'PHP', level: 'Avanzado', img: '/media/tech/php.png' },
      Symfony: {
        name: 'Symfony',
        level: 'Avanzado',
        img: '/media/tech/symfony.webp',
      },
      Node: {
        name: 'Node.js',
        level: 'Intermedio',
        img: '/media/tech/node.webp',
      },
      Python: {
        name: 'Python',
        level: 'Intermedio',
        img: '/media/tech/python.png',
      },
      Dart: {
        name: 'Dart',
        level: 'Intermedio',
        img: '/media/tech/dart.png',
      },
    },

    DATABASES: {
      MySQL: {
        name: 'MySQL',
        level: 'Avanzado',
        img: '/media/tech/mysql.png',
      },
      MongoDB: {
        name: 'MongoDB',
        level: 'Intermedio',
        img: '/media/tech/mongo.svg',
      },
      SQLDeveloper: {
        name: 'SQL Developer',
        level: 'Avanzado',
        img: '/media/tech/sqldeveloper.webp',
      },
      Firebase: {
        name: 'Firebase',
        level: 'Intermedio',
        img: '/media/tech/firebase.png',
      },
    },

    TOOLS: {
      Git: { name: 'Git', level: 'Avanzado', img: '/media/tech/git.png' },
      Docker: {
        name: 'Docker',
        level: 'Básico',
        img: '/media/tech/docker.png',
      },
      Postman: {
        name: 'Postman',
        level: 'Intermedio',
        img: '/media/tech/postman.webp',
      },
      Flutter: {
        name: 'Flutter',
        level: 'Intermedio',
        img: '/media/tech/flutter.webp',
      },
    },
  }

  return (
    <div className='pl-8'>
      <div className='flex items-center gap-4 mb-6'>
        <img
          src='/media/engranaje.webp'
          alt='Tech Stack'
          className='w-10 h-10 object-contain'
        />
        <h4 className='text-3xl font-bold'>Mi stack tecnológico</h4>
      </div>
      <div className='flex flex-col space-y-12'>
        {Object.entries(tecnologias).map(([category, techs]) => (
          <div key={category} className='flex flex-row space-x-6 items-start'>
            {/* Título grande */}
            <span className='text-6xl w-[50%] font-bold text-purple-400'>
              {category}
            </span>

            {/* Tecnologías */}
            <div className='w-[50%] flex flex-wrap gap-4'>
              {Object.values(techs).map((tech) => (
                <div
                  key={tech.name}
                  className='flex items-center space-x-2 bg-gray-800/50 rounded-md px-2 py-1 hover:scale-105'
                >
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className='w-10 h-10 object-contain'
                  />
                  <div className='flex flex-col'>
                    <span className='text-lg text-gray-200'>{tech.name}</span>
                    <span className='text-sm text-purple-300'>
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
