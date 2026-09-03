// app/(routes)/privacidad/page.jsx
import { Suspense } from 'react'
import PrivacidadContent from './PrivacidadContent'

export default function PrivacidadPage() {
  return (
    <Suspense fallback={null}>
      <PrivacidadContent />
    </Suspense>
  )
}
