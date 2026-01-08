import Galeria from '@/app/components/Galeria'

export default function SocialMoto() {
  const fotos = Array.from({ length: 13 }, (_, i) => i + 1)
    .filter((n) => n !== 4)
    .map((n) => `/media/socialmoto/socialmoto${n}.PNG`)

  return <Galeria fotos={fotos} />
}
