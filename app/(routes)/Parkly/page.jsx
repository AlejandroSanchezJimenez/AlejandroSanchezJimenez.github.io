import Galeria from '@/app/components/Galeria'

export default function Parkly() {
  const fotos = Array.from({ length: 8 }, (_, i) => i + 1)
    .filter((n) => n !== 4)
    .map((n) => `/media/parkly/${n}.webp`)

  return <Galeria fotos={fotos} />
}
