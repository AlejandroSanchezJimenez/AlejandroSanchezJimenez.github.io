'use client'

import { useSearchParams } from 'next/navigation'

// Registro de políticas de privacidad por app.
// Para añadir una nueva app en el futuro, solo añade una entrada aquí.

const PRIVACY_POLICIES = {
  mysyncedlist: {
    nombre: 'MySyncList',
    fechaActualizacion: '3 de septiembre de 2026',

    secciones: [
      {
        titulo: 'Datos que recogemos',
        contenido: (
          <ul className="space-y-5">
            <li className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg  text-sm">
                01
              </div>

              <p className="m-0 leading-7 text-slate-600">
                <span className="font-semibold text-slate-900">
                  Datos de cuenta.
                </span>{' '}
                Correo electrónico y, en su caso, nombre de usuario, gestionados
                a través de Firebase Authentication.
              </p>
            </li>

            <li className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm">
                02
              </div>

              <p className="m-0 leading-7 text-slate-600">
                <span className="font-semibold text-slate-900">
                  Contenido generado por el usuario.
                </span>{' '}
                Listas, elementos añadidos a las listas, grupos creados y su
                configuración, almacenados en Firebase Firestore.
              </p>
            </li>

            <li className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm">
                03
              </div>

              <p className="m-0 leading-7 text-slate-600">
                <span className="font-semibold text-slate-900">
                  Datos técnicos básicos.
                </span>{' '}
                Identificadores de dispositivo e información de uso necesarios
                para el funcionamiento del servicio.
              </p>
            </li>
          </ul>
        )
      },

      {
        titulo: 'Cómo usamos los datos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Los datos recogidos se utilizan exclusivamente para ofrecer la
            funcionalidad de la app: crear y sincronizar listas entre los
            miembros de un grupo, gestionar el acceso a tu cuenta y mostrar el
            historial de consumos.
          </p>
        )
      },

      {
        titulo: 'Con quién compartimos los datos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Utilizamos Firebase (Google) como proveedor de infraestructura para
            autenticación y base de datos. No vendemos ni compartimos tus datos
            con terceros con fines publicitarios.
          </p>
        )
      },

      {
        titulo: 'Conservación y eliminación',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Conservamos tus datos mientras mantengas una cuenta activa. Puedes
            solicitar la eliminación de tu cuenta y de los datos asociados en
            cualquier momento contactando con nosotros.
          </p>
        )
      },

      {
        titulo: 'Tus derechos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Puedes solicitar acceso, rectificación o eliminación de tus datos
            personales en cualquier momento escribiendo a
            alejandro.sanjim2000@gmail.com
          </p>
        )
      },

      {
        titulo: 'Cambios en esta política',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Podemos actualizar esta política ocasionalmente. Cualquier cambio se
            reflejará en esta misma página con la fecha de actualización
            correspondiente.
          </p>
        )
      }
    ]
  },

  totallystyled: {
    nombre: 'TotallyStyled',
    fechaActualizacion: '3 de septiembre de 2026',

    secciones: [
      {
        titulo: 'Datos que recogemos',
        contenido: (
          <ul className="space-y-5">
            <li className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg  text-sm">
                01
              </div>

              <p className="m-0 leading-7 text-slate-600">
                <span className="font-semibold text-slate-900">
                  Datos de cuenta.
                </span>{' '}
                Correo electrónico y, en su caso, nombre de usuario, necesarios
                para iniciar sesión y acceder a la app.
              </p>
            </li>

            <li className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm">
                02
              </div>

              <p className="m-0 leading-7 text-slate-600">
                <span className="font-semibold text-slate-900">
                  Contenido generado por el usuario.
                </span>{' '}
                Fotografías de prendas de ropa y accesorios que subas a la app,
                así como las combinaciones de outfits que crees y guardes. Las
                imágenes se almacenan a través de Cloudinary.
              </p>
            </li>

            <li className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm">
                03
              </div>

              <p className="m-0 leading-7 text-slate-600">
                <span className="font-semibold text-slate-900">
                  Datos técnicos básicos.
                </span>{' '}
                Identificadores de dispositivo e información de uso necesarios
                para el funcionamiento del servicio.
              </p>
            </li>
          </ul>
        )
      },

      {
        titulo: 'Cómo usamos los datos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Los datos recogidos se utilizan exclusivamente para ofrecer la
            funcionalidad de la app: gestionar tu cuenta, almacenar las imágenes
            de tus prendas y permitirte crear y guardar combinaciones de
            outfits.
          </p>
        )
      },

      {
        titulo: 'Con quién compartimos los datos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Utilizamos Cloudinary como proveedor de almacenamiento y
            procesamiento de imágenes. No vendemos ni compartimos tus datos con
            terceros con fines publicitarios.
          </p>
        )
      },

      {
        titulo: 'Conservación y eliminación',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Conservamos tus datos, incluidas las imágenes subidas, mientras
            mantengas una cuenta activa. Puedes solicitar la eliminación de tu
            cuenta y de los datos asociados en cualquier momento contactando con
            nosotros.
          </p>
        )
      },

      {
        titulo: 'Tus derechos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Puedes solicitar acceso, rectificación o eliminación de tus datos
            personales en cualquier momento escribiendo a
            alejandro.sanjim2000@gmail.com
          </p>
        )
      },

      {
        titulo: 'Cambios en esta política',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Podemos actualizar esta política ocasionalmente. Cualquier cambio se
            reflejará en esta misma página con la fecha de actualización
            correspondiente.
          </p>
        )
      }
    ]
  }

  // Ejemplo de cómo añadir una futura app:
  //
  // otraapp: {
  //   nombre: 'OtraApp',
  //   fechaActualizacion: '...',
  //   secciones: [...],
  // },
}

export default function PrivacidadContent() {
  const searchParams = useSearchParams()

  const app = searchParams.get('app')
  const policy = app ? PRIVACY_POLICIES[app] : null

  if (!app) {
    return (
      <main className="min-h-screen  px-4 py-4">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm sm:p-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-300">
              Política de privacidad
            </h1>

            <p className="mt-4 leading-7 text-white">
              Indica la app en la URL, por ejemplo:
            </p>

            <code className="mt-4 block rounded-xl bg-slate-900 px-4 py-3 font-mono text-sm text-slate-100">
              /privacidad?app=mysyncedlist
            </code>
          </div>
        </div>
      </main>
    )
  }

  if (!policy) {
    return (
      <main className="min-h-screen  px-4 py-4">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm sm:p-12">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl text-xl">
              ?
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-300">
              App no encontrada
            </h1>

            <p className="mt-4 leading-7 text-white">
              No hay una política de privacidad registrada para la app
              solicitada.
            </p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen  px-4 py-4 sm:py-4">
      <div className="mx-auto max-w-3xl">
        {/* Cabecera */}
        <header className="mb-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Documento legal
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Política de privacidad
          </h1>

          <div className="mt-5 flex flex-col gap-2 text-sm text-white sm:flex-row sm:items-center sm:gap-3">
            <span className="font-medium text-white">{policy.nombre}</span>

            <span className="hidden text-slate-300 sm:block">•</span>

            <span>Última actualización: {policy.fechaActualizacion}</span>
          </div>
        </header>

        {/* Contenido */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {policy.secciones.map((seccion, index) => (
            <section
              key={seccion.titulo}
              className={`px-6 py-8 sm:px-10 sm:py-10 ${
                index !== 0 ? 'border-t border-slate-100' : ''
              }`}
            >
              <div className="flex gap-5">
                {/* Número de sección */}
                <div className="hidden shrink-0 pt-1 sm:block">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="m-0 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                    {seccion.titulo}
                  </h2>

                  <div className="mt-5">{seccion.contenido}</div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Pie */}
        <footer className="mt-8 px-2 text-center">
          <p className="text-xs leading-5 text-slate-400">
            Esta política de privacidad se aplica a {policy.nombre}.
          </p>
        </footer>
      </div>
    </main>
  )
}
