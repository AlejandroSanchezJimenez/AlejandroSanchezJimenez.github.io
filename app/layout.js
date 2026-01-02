import CustomCursor from './components/CustomCursor'
import ParticlesBackground from './components/ParticlesBackground'
import ProgressBar from './components/ProgressBar'
import './globals.css'

export const metadata = {
  title: 'ASANJIMDEV | Frontend Developer',
  description: 'Portfolio de Alejandro Sánchez',
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className='relative min-h-screen bg-gradient-animated overflow-x-hidden custom-cursor'>
        <ParticlesBackground />
        <CustomCursor />
        <ProgressBar />
        {/* Correo girado */}
        <div className='fixed left-0 top-1/2 -translate-y-1/2 z-50'>
          <a
            href='mailto:alejandro.sanjim2000@gmail.com'
            className='block transform rotate-90 origin-bottom-left px-2 py-1 rounded-r shadow text-white font-bold hover:text-blue-600'
          >
            alejandro.sanjim2000@gmail.com
          </a>
        </div>

        {/* Contenido */}
        <div className='mt-[10%] relative z-10 pb-10'>{children}</div>

        {/* Fondo animado */}
        <div className='absolute inset-0 -z-10 animate-gradient-bg'></div>
      </body>
    </html>
  )
}
