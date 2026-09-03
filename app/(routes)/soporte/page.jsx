// app/(routes)/soporte/page.jsx
export default function SoportePage() {
  return (
    <main className="min-h-screen text-white">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
        <header className="border-b border-slate-200 pb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Soporte</h1>
        </header>

        <div className="mt-10 text-[15px] leading-7">
          <p>
            ¿Tienes alguna duda, sugerencia o has encontrado un problema en
            alguna de mis apps? Escríbeme y te responderé lo antes posible.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 p-6">
            <p className="text-sm font-medium ">Correo de contacto</p>
            <a
              href="mailto:alejandro.sanjim2000@gmail.com"
              className="mt-1 block text-lg font-medium underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
            >
              alejandro.sanjim2000@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
