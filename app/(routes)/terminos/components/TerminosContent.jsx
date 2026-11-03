'use client'

import { useSearchParams } from 'next/navigation'

// Registro de términos de servicio (EULA) por app.
// Para añadir una nueva app en el futuro, solo añade una entrada aquí.

const TERMS_OF_SERVICE = {
  mysyncedlist: {
    nombre: 'MySyncList',
    fechaActualizacion: '3 de septiembre de 2026',

    secciones: [
      {
        titulo: 'Aceptación de los términos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Al acceder o utilizar MySyncList, aceptas estos Términos de
            Servicio. Si no estás de acuerdo con alguno de estos términos, no
            utilices la aplicación.
          </p>
        )
      },

      {
        titulo: 'Licencia de uso',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Se te concede una licencia limitada, no exclusiva, no transferible
            y revocable para utilizar MySyncList con fines personales y no
            comerciales, conforme a estos términos.
          </p>
        )
      },

      {
        titulo: 'Tu cuenta',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            La cuenta se gestiona mediante correo electrónico a través de
            Firebase Authentication. Eres responsable de mantener la
            confidencialidad de tus credenciales y de todas las actividades que
            ocurran en tu cuenta. Debes notificarnos inmediatamente de cualquier
            uso no autorizado.
          </p>
        )
      },

      {
        titulo: 'Uso aceptable',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Te comprometes a no utilizar la aplicación para fines ilícitos, a no
            intentar acceder a listas o grupos a los que no estés invitado, a no
            interferir con el funcionamiento del servicio y a no intentar
            obtener acceso no autorizado a ningún sistema o dato relacionado
            con la aplicación.
          </p>
        )
      },

      {
        titulo: 'Contenido del usuario',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Las listas, elementos, grupos y su configuración que creas en
            MySyncList te pertenecen. Al compartirlos con los miembros de un
            grupo, autorizas a dichos miembros a verlos y editarlos según los
            permisos del grupo. Eres responsable del contenido que compartes y
            de que este no infrinja derechos de terceros.
          </p>
        )
      },

      {
        titulo: 'Propiedad intelectual',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            MySyncList, incluyendo su diseño, código, textos y marcas, es
            propiedad del desarrollador. Nada de estos términos implica la
            cesión de derechos de propiedad intelectual salvo la licencia de uso
            descrita anteriormente.
          </p>
        )
      },

      {
        titulo: 'Servicios de terceros',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            MySyncList utiliza Firebase, proporcionado por Google, para
            autenticación y base de datos. Estos servicios se rigen por sus
            propios términos. No somos responsables de las interrupciones o
            fallos derivados de los servicios de terceros.
          </p>
        )
      },

      {
        titulo: 'Limitación de responsabilidad',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            MySyncList se ofrece «tal cual», sin garantías de ningún tipo. En la
            máxima medida permitida por la ley, no seremos responsables de
            pérdida de datos, pérdida de beneficios ni de cualquier daño directo
            o indirecto derivado del uso o la imposibilidad de uso de la
            aplicación.
          </p>
        )
      },

      {
        titulo: 'Terminación',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Podemos suspender o cancelar tu acceso a MySyncList si incumples
            estos términos. También puedes eliminar tu cuenta en cualquier
            momento, lo que provocará la eliminación de tus datos asociados.
          </p>
        )
      },

      {
        titulo: 'Cambios en estos términos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Podemos actualizar estos términos ocasionalmente. Cualquier cambio
            se reflejará en esta misma página con la fecha de actualización
            correspondiente. El uso continuado de la aplicación tras dichos
            cambios implica su aceptación.
          </p>
        )
      },

      {
        titulo: 'Contacto',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Si tienes alguna consulta sobre estos términos, puedes contactar con
            nosotros escribiendo a{' '}
            <span className="font-medium text-slate-900">
              alejandro.sanjim2000@gmail.com
            </span>
            .
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
        titulo: 'Aceptación de los términos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Al acceder o utilizar TotallyStyled, aceptas estos Términos de
            Servicio. Si no estás de acuerdo con alguno de estos términos, no
            utilices la aplicación.
          </p>
        )
      },

      {
        titulo: 'Licencia de uso',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Se te concede una licencia limitada, no exclusiva, no transferible
            y revocable para utilizar TotallyStyled con fines personales y no
            comerciales, conforme a estos términos.
          </p>
        )
      },

      {
        titulo: 'Tu cuenta',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Para acceder a TotallyStyled necesitas una cuenta asociada a tu
            correo electrónico. Eres responsable de mantener la
            confidencialidad de tus credenciales y de todas las actividades que
            ocurran en tu cuenta. Debes notificarnos inmediatamente de cualquier
            uso no autorizado.
          </p>
        )
      },

      {
        titulo: 'Uso aceptable',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Te comprometes a no utilizar la aplicación para fines ilícitos, a no
            subir contenido que infrinja derechos de terceros, a no interferir
            con el funcionamiento del servicio y a no intentar obtener acceso no
            autorizado a ningún sistema o dato relacionado con la aplicación.
          </p>
        )
      },

      {
        titulo: 'Contenido del usuario',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Las fotografías de prendas y las combinaciones de outfits que crees
            en TotallyStyled te pertenecen. Concedes a la aplicación la licencia
            necesaria para almacenar dicho contenido y mostrártelo como parte de
            sus funcionalidades. Eres responsable del contenido que subes y de
            que este no infrinja derechos de terceros.
          </p>
        )
      },

      {
        titulo: 'Suscripciones y pagos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Determinadas funcionalidades de TotallyStyled están disponibles a
            través de suscripciones de pago. Los pagos se gestionan a través de
            la tienda de aplicaciones desde la que descargaste la app (App Store
            o Google Play), que se rige por sus propios términos. Las
            suscripciones se renuevan automáticamente salvo que se cancelen con
            al menos 24 horas antes de la fecha de renovación. La cancelación
            se realiza desde los ajustes de tu cuenta en la tienda
            correspondiente. No se emitirán reembolsos salvo en los casos
            previstos por la legislación aplicable.
          </p>
        )
      },

      {
        titulo: 'Propiedad intelectual',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            TotallyStyled, incluyendo su diseño, código, textos y marcas, es
            propiedad del desarrollador. Nada de estos términos implica la
            cesión de derechos de propiedad intelectual salvo la licencia de uso
            descrita anteriormente.
          </p>
        )
      },

      {
        titulo: 'Servicios de terceros',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            TotallyStyled utiliza Firebase, proporcionado por Google, para
            autenticación, base de datos y almacenamiento de imágenes a través
            de Firebase Storage. Estos servicios se rigen por sus propios
            términos. No somos responsables de las interrupciones o fallos
            derivados de los servicios de terceros.
          </p>
        )
      },

      {
        titulo: 'Limitación de responsabilidad',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            TotallyStyled se ofrece «tal cual», sin garantías de ningún tipo. En
            la máxima medida permitida por la ley, no seremos responsables de
            pérdida de datos, pérdida de beneficios ni de cualquier daño directo
            o indirecto derivado del uso o la imposibilidad de uso de la
            aplicación.
          </p>
        )
      },

      {
        titulo: 'Terminación',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Podemos suspender o cancelar tu acceso a TotallyStyled si incumples
            estos términos. También puedes eliminar tu cuenta en cualquier
            momento, lo que provocará la eliminación de tus datos asociados.
          </p>
        )
      },

      {
        titulo: 'Cambios en estos términos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Podemos actualizar estos términos ocasionalmente. Cualquier cambio
            se reflejará en esta misma página con la fecha de actualización
            correspondiente. El uso continuado de la aplicación tras dichos
            cambios implica su aceptación.
          </p>
        )
      },

      {
        titulo: 'Contacto',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Si tienes alguna consulta sobre estos términos, puedes contactar con
            nosotros escribiendo a{' '}
            <span className="font-medium text-slate-900">
              alejandro.sanjim2000@gmail.com
            </span>
            .
          </p>
        )
      }
    ]
  },

  rasearch: {
    nombre: 'RaSearch',
    fechaActualizacion: '7 de septiembre de 2026',

    secciones: [
      {
        titulo: 'Aceptación de los términos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Al acceder o utilizar RaSearch, aceptas estos Términos de Servicio.
            Si no estás de acuerdo con alguno de estos términos, no utilices la
            aplicación.
          </p>
        )
      },

      {
        titulo: 'Licencia de uso',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Se te concede una licencia limitada, no exclusiva, no transferible y
            revocable para utilizar RaSearch con fines personales, educativos y
            de investigación, conforme a estos términos.
          </p>
        )
      },

      {
        titulo: 'Uso aceptable',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            RaSearch está pensado para la consulta e estudio de la escritura del
            Antiguo Egipto. Te comprometes a no utilizar la aplicación con fines
            ilícitos, a no alterar ni extraer masivamente los datos de la base
            de datos para su reventa, a no interferir con el funcionamiento del
            servicio y a no intentar obtener acceso no autorizado a ningún
            sistema relacionado con la aplicación.
          </p>
        )
      },

      {
        titulo: 'Sin cuenta de usuario',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            RaSearch no requiere crear una cuenta ni iniciar sesión para
            utilizar sus funcionalidades principales. Al no existir cuentas, no
            hay credenciales de las que ser responsable.
          </p>
        )
      },

      {
        titulo: 'Propiedad intelectual',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            RaSearch, incluyendo su diseño, código, interfaz y marcas, es
            propiedad del desarrollador. La información sobre jeroglíficos
            procede de fuentes y bases de datos que pueden estar sujetas a sus
            propias condiciones. Los documentos PDF generados pueden utilizarse
            con fines personales, educativos y de investigación.
          </p>
        )
      },

      {
        titulo: 'Servicios de terceros',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            RaSearch utiliza Firebase, proporcionado por Google, para
            determinados servicios de la aplicación. Estos servicios se rigen
            por sus propios términos. No somos responsables de las
            interrupciones o fallos derivados de los servicios de terceros.
          </p>
        )
      },

      {
        titulo: 'Actualizaciones',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Podemos actualizar la aplicación, añadir o eliminar funcionalidades
            y modificar la base de datos de jeroglíficos en cualquier momento
            para mejorar el servicio o adaptarlo a nuevos requisitos.
          </p>
        )
      },

      {
        titulo: 'Limitación de responsabilidad',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            RaSearch se ofrece «tal cual», sin garantías de ningún tipo. La
            información mostrada tiene fines informativos y educativos y no
            debe considerarse una fuente académica definitiva. En la máxima
            medida permitida por la ley, no seremos responsables de ningún daño
            directo o indirecto derivado del uso o la imposibilidad de uso de la
            aplicación.
          </p>
        )
      },

      {
        titulo: 'Cambios en estos términos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Podemos actualizar estos términos ocasionalmente. Cualquier cambio
            se reflejará en esta misma página con la fecha de actualización
            correspondiente. El uso continuado de la aplicación tras dichos
            cambios implica su aceptación.
          </p>
        )
      },

      {
        titulo: 'Contacto',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Si tienes alguna consulta sobre estos términos, puedes contactar con
            nosotros escribiendo a{' '}
            <span className="font-medium text-slate-900">
              alejandro.sanjim2000@gmail.com
            </span>
            .
          </p>
        )
      }
    ]
  },

  crowfall: {
    nombre: 'CrowFall',
    fechaActualizacion: '11 de septiembre de 2026',

    secciones: [
      {
        titulo: 'Aceptación de los términos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Al acceder o utilizar CrowFall, aceptas estos Términos de Servicio.
            Si no estás de acuerdo con alguno de estos términos, no utilices la
            aplicación.
          </p>
        )
      },

      {
        titulo: 'Licencia de uso',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Se te concede una licencia limitada, no exclusiva, no transferible y
            revocable para jugar a CrowFall con fines personales y no
            comerciales, conforme a estos términos.
          </p>
        )
      },

      {
        titulo: 'Uso aceptable',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Te comprometes a no utilizar la aplicación con fines ilícitos, a no
            modificar, descompilar ni realizar ingeniería inversa del
            juego en la medida permitida por la ley, a no interferir con su
            funcionamiento y a no utilizar métodos automatizados para obtener
            ventajas injustas.
          </p>
        )
      },

      {
        titulo: 'Sin cuenta de usuario',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            CrowFall no requiere crear una cuenta ni iniciar sesión para jugar.
            No existen credenciales de usuario ni perfiles asociados.
          </p>
        )
      },

      {
        titulo: 'Propiedad intelectual',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            CrowFall, incluyendo su diseño, código, gráficos, sonidos y marcas,
            es propiedad del desarrollador. No se ceden derechos de propiedad
            intelectual salvo la licencia de uso descrita anteriormente.
          </p>
        )
      },

      {
        titulo: 'Actualizaciones',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Podemos actualizar la aplicación, añadir o eliminar contenido,
            modificar el balance o cambiar funcionalidades en cualquier momento
            para mejorar el juego o adaptarlo a nuevos requisitos.
          </p>
        )
      },

      {
        titulo: 'Limitación de responsabilidad',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            CrowFall se ofrece «tal cual», sin garantías de ningún tipo. En la
            máxima medida permitida por la ley, no seremos responsables de
            cualquier daño directo o indirecto derivado del uso o la
            imposibilidad de uso de la aplicación.
          </p>
        )
      },

      {
        titulo: 'Cambios en estos términos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Podemos actualizar estos términos ocasionalmente. Cualquier cambio
            se reflejará en esta misma página con la fecha de actualización
            correspondiente. El uso continuado de la aplicación tras dichos
            cambios implica su aceptación.
          </p>
        )
      },

      {
        titulo: 'Contacto',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Si tienes alguna consulta sobre estos términos, puedes contactar con
            nosotros escribiendo a{' '}
            <span className="font-medium text-slate-900">
              alejandro.sanjim2000@gmail.com
            </span>
            .
          </p>
        )
      }
    ]
  },

  parkly: {
    nombre: 'Parkly',
    fechaActualizacion: '17 de septiembre de 2026',

    secciones: [
      {
        titulo: 'Aceptación de los términos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Al acceder o utilizar Parkly, aceptas estos Términos de Servicio.
            Si no estás de acuerdo con alguno de estos términos, no utilices la
            aplicación.
          </p>
        )
      },

      {
        titulo: 'Licencia de uso',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Se te concede una licencia limitada, no exclusiva, no transferible y
            revocable para utilizar Parkly con fines personales y no
            comerciales, conforme a estos términos.
          </p>
        )
      },

      {
        titulo: 'Tu cuenta',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Para acceder a Parkly necesitas una cuenta asociada a tu correo
            electrónico. Eres responsable de mantener la confidencialidad de tus
            credenciales y de todas las actividades que ocurran en tu cuenta.
            Debes notificarnos inmediatamente de cualquier uso no autorizado.
          </p>
        )
      },

      {
        titulo: 'Uso aceptable',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Te comprometes a no publicar información falsa, engañosa o que
            infrinja derechos de terceros, a no utilizar la aplicación con fines
            ilícitos, a no interferir con su funcionamiento y a no intentar
            obtener acceso no autorizado a ningún sistema o dato relacionado
            con Parkly.
          </p>
        )
      },

      {
        titulo: 'Contribuciones a la comunidad',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Los parkings, lugares favoritos y demás información que añadas a
            Parkly pueden mostrarse al resto de la comunidad. Eres responsable
            de tus contribuciones y de que estas sean veraces y no infrinjan
            derechos de terceros. Los puntos obtenidos tienen un fin exclusivamente
            interno de participación y no tienen valor monetario ni pueden
            canjearse.
          </p>
        )
      },

      {
        titulo: 'Uso de la ubicación',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Parkly utiliza la ubicación de tu dispositivo para mostrar tu
            posición y los parkings cercanos. Puedes modificar o retirar estos
            permisos en cualquier momento desde los ajustes de tu dispositivo,
            si bien algunas funcionalidades del mapa dejarán de estar
            disponibles.
          </p>
        )
      },

      {
        titulo: 'Propiedad intelectual',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Parkly, incluyendo su diseño, código, textos y marcas, es propiedad
            del desarrollador. Nada de estos términos implica la cesión de
            derechos de propiedad intelectual salvo la licencia de uso
            descrita anteriormente.
          </p>
        )
      },

      {
        titulo: 'Limitación de responsabilidad',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Parkly se ofrece «tal cual», sin garantías de ningún tipo. La
            información sobre parkings puede no estar completa o actualizada y
            no debe considerarse una fuente oficial. En la máxima medida
            permitida por la ley, no seremos responsables de cualquier daño
            directo o indirecto derivado del uso o la imposibilidad de uso de
            la aplicación.
          </p>
        )
      },

      {
        titulo: 'Terminación',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Podemos suspender o cancelar tu acceso a Parkly si incumples estos
            términos. También puedes eliminar tu cuenta en cualquier momento, lo
            que provocará la eliminación de tus datos asociados.
          </p>
        )
      },

      {
        titulo: 'Cambios en estos términos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Podemos actualizar estos términos ocasionalmente. Cualquier cambio
            se reflejará en esta misma página con la fecha de actualización
            correspondiente. El uso continuado de la aplicación tras dichos
            cambios implica su aceptación.
          </p>
        )
      },

      {
        titulo: 'Contacto',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Si tienes alguna consulta sobre estos términos, puedes contactar con
            nosotros escribiendo a{' '}
            <span className="font-medium text-slate-900">
              alejandro.sanjim2000@gmail.com
            </span>
            .
          </p>
        )
      }
    ]
  },

  pastillero: {
    nombre: 'Pastillero+',
    fechaActualizacion: '25 de septiembre de 2026',

    secciones: [
      {
        titulo: 'Aceptación de los términos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Al acceder o utilizar Pastillero+, aceptas estos Términos de
            Servicio. Si no estás de acuerdo con alguno de estos términos, no
            utilices la aplicación.
          </p>
        )
      },

      {
        titulo: 'Licencia de uso',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Se te concede una licencia limitada, no exclusiva, no transferible y
            revocable para utilizar Pastillero+ con fines personales, conforme a
            estos términos.
          </p>
        )
      },

      {
        titulo: 'Uso aceptable',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Te comprometes a no utilizar la aplicación con fines ilícitos, a no
            interferir con su funcionamiento, a no intentar obtener acceso no
            autorizado a ningún sistema relacionado con la aplicación y a no
            modificar sus componentes en la medida permitida por la ley.
          </p>
        )
      },

      {
        titulo: 'Sin cuenta de usuario',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Pastillero+ no requiere crear una cuenta ni iniciar sesión. Toda la
            información se almacena localmente en tu dispositivo y no se envía a
            servidores externos.
          </p>
        )
      },

      {
        titulo: 'Naturaleza de la información',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Pastillero+ es una herramienta de organización personal y no
            sustituye el consejo médico profesional. La información sobre
            medicamentos, dosis y horarios que introduzcas es responsabilidad
            tuya. Consulta siempre con un profesional de la salud ante cualquier
            duda sobre tu tratamiento.
          </p>
        )
      },

      {
        titulo: 'Propiedad intelectual',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Pastillero+, incluyendo su diseño, código, textos y marcas, es
            propiedad del desarrollador. Nada de estos términos implica la
            cesión de derechos de propiedad intelectual salvo la licencia de uso
            descrita anteriormente.
          </p>
        )
      },

      {
        titulo: 'Actualizaciones',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Podemos actualizar la aplicación, añadir o eliminar funcionalidades
            y modificar su interfaz en cualquier momento para mejorar el
            servicio o adaptarlo a nuevos requisitos.
          </p>
        )
      },

      {
        titulo: 'Limitación de responsabilidad',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Pastillero+ se ofrece «tal cual», sin garantías de ningún tipo. En
            la máxima medida permitida por la ley, no seremos responsables de
            cualquier daño derivado del uso de la información almacenada en la
            aplicación, incluidos errores en las dosis u horarios introducidos
            por el usuario.
          </p>
        )
      },

      {
        titulo: 'Responsabilidad de los datos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Al tratarse de un almacenamiento local, la pérdida del dispositivo o
            la desinstalación de la aplicación puede implicar la eliminación de
            la información introducida. Eres responsable de la custodia de tus
            datos.
          </p>
        )
      },

      {
        titulo: 'Cambios en estos términos',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Podemos actualizar estos términos ocasionalmente. Cualquier cambio
            se reflejará en esta misma página con la fecha de actualización
            correspondiente. El uso continuado de la aplicación tras dichos
            cambios implica su aceptación.
          </p>
        )
      },

      {
        titulo: 'Contacto',
        contenido: (
          <p className="m-0 leading-7 text-slate-600">
            Si tienes alguna consulta sobre estos términos, puedes contactar con
            nosotros escribiendo a{' '}
            <span className="font-medium text-slate-900">
              alejandro.sanjim2000@gmail.com
            </span>
            .
          </p>
        )
      }
    ]
  },

  // Ejemplo de cómo añadir una futura app:
  //
  // otraapp: {
  //   nombre: 'OtraApp',
  //   fechaActualizacion: '...',
  //   secciones: [...],
  // },
}

export default function TerminosContent() {
  const searchParams = useSearchParams()

  const app = searchParams.get('app')
  const terms = app ? TERMS_OF_SERVICE[app] : null

  if (!app) {
    return (
      <main className="min-h-screen  px-4 py-4">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm sm:p-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-300">
              Términos de servicio
            </h1>

            <p className="mt-4 leading-7 text-white">
              Indica la app en la URL, por ejemplo:
            </p>

            <code className="mt-4 block rounded-xl bg-slate-900 px-4 py-3 font-mono text-sm text-slate-100">
              /terminos?app=mysyncedlist
            </code>
          </div>
        </div>
      </main>
    )
  }

  if (!terms) {
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
              No hay unos términos de servicio registrados para la app
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
            Términos de servicio
          </h1>

          <div className="mt-5 flex flex-col gap-2 text-sm text-white sm:flex-row sm:items-center sm:gap-3">
            <span className="font-medium text-white">{terms.nombre}</span>

            <span className="hidden text-slate-300 sm:block">•</span>

            <span>Última actualización: {terms.fechaActualizacion}</span>
          </div>
        </header>

        {/* Contenido */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {terms.secciones.map((seccion, index) => (
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
            Estos términos de servicio se aplican a {terms.nombre}.
          </p>
        </footer>
      </div>
    </main>
  )
}
