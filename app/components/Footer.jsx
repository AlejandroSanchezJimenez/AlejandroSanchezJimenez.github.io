'use client'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 right-0 z-50 flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-purple-900/50 text-white'>
      {/* Texto */}
      <p className='text-sm mb-2 md:mb-0'>
        &copy; {new Date().getFullYear()} | created by ASANJIMDEV 💜
      </p>

      {/* Redes sociales */}
      <div className='flex space-x-4'>
        <a
          href='https://www.linkedin.com/in/asanjim/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-400 transition-colors'
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href='https://www.instagram.com/alejand1710/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-pink-500 transition-colors'
        >
          <FaInstagram size={24} />
        </a>
        {/* <a
          href='https://github.com/tu-usuario'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-gray-400 transition-colors'
        >
          <FaGithub size={24} />
        </a> */}
      </div>
    </footer>
  )
}
