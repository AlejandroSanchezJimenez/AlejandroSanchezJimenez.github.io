async function loadTranslations(lang) {
  try {
    const response = await fetch('/js/translations.json')
    const translations = await response.json()
    document.querySelectorAll('[data-key]').forEach((element) => {
      const key = element.getAttribute('data-key')
      element.innerHTML = translations[lang][key] || 'Traducción no disponible'
    })
  } catch (error) {
    console.error('Error al cargar las traducciones:', error)
  }
}

function changeLanguage(lang) {
  loadTranslations(lang)
}

loadTranslations('es')

const cursor = document.getElementById('cursor')

document.addEventListener('mousemove', (e) => {
  // Actualiza la posición del cursor
  cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`
  cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`
})

const sections = document.querySelectorAll('.section')

sections.forEach((section) => {
  section.addEventListener('mouseenter', () => {
    const sectionId = section.getAttribute('id')
    const correspondingLink = document.querySelector(
      `#menu a[href="#${sectionId}"]`
    )

    correspondingLink.classList.add('active')
  })

  section.addEventListener('mouseleave', () => {
    const sectionId = section.getAttribute('id')
    const correspondingLink = document.querySelector(
      `#menu a[href="#${sectionId}"]`
    )

    correspondingLink.classList.remove('active')
  })
})

document.querySelectorAll('.panel').forEach((panel) => {
  panel.addEventListener('mouseenter', () => {
    const titulo = panel.querySelector('.titulo')
    if (titulo) {
      titulo.style.color = '#42b8dd'
    }
  })

  panel.addEventListener('mouseleave', () => {
    const titulo = panel.querySelector('.titulo')
    if (titulo) {
      titulo.style.color = ''
    }
  })

  //   panel.addEventListener('click', () => {
  //     window.open(panel.getAttribute('data-url'), '_blank')
  //   })
})

const galleryImages = document.querySelectorAll('.gallery-item')
const lightbox = document.getElementById('lightbox')
const lightboxImg = lightbox.querySelector('img')
const prevBtn = lightbox.querySelector('.prev')
const nextBtn = lightbox.querySelector('.next')
const closeBtn = lightbox.querySelector('.close')
let currentIndex = 0

function showImage(index) {
  currentIndex = index
  lightboxImg.src = galleryImages[index].src
  lightbox.style.display = 'flex'
}

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => showImage(index))
})

function showNext() {
  currentIndex = (currentIndex + 1) % galleryImages.length
  lightboxImg.src = galleryImages[currentIndex].src
}

function showPrev() {
  currentIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length
  lightboxImg.src = galleryImages[currentIndex].src
}

nextBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  showNext()
})
prevBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  showPrev()
})
closeBtn.addEventListener('click', () => (lightbox.style.display = 'none'))
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none'
})
