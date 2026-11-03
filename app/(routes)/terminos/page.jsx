// app/(routes)/terminos/page.jsx
import { Suspense } from 'react'
import TerminosContent from './components/TerminosContent'

export default function TerminosPage() {
  return (
    <Suspense fallback={null}>
      <TerminosContent />
    </Suspense>
  )
}
