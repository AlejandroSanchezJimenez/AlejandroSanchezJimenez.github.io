const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
    // Actualiza la posición del cursor
    cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
});

const sections = document.querySelectorAll(".section");

sections.forEach(section => {
    section.addEventListener("mouseenter", () => {
        const sectionId = section.getAttribute("id");
        const correspondingLink = document.querySelector(`#menu a[href="#${sectionId}"]`);

        correspondingLink.classList.add('active');
    });

    section.addEventListener("mouseleave", () => {
        const sectionId = section.getAttribute("id");
        const correspondingLink = document.querySelector(`#menu a[href="#${sectionId}"]`);
        
        correspondingLink.classList.remove('active');
    });
});



document.querySelectorAll('.panel').forEach(panel => {
    panel.addEventListener('mouseenter', () => {
        const titulo = panel.querySelector('.titulo');
        if (titulo) {
            titulo.style.color = '#42b8dd'; 
        }
    });

    panel.addEventListener('mouseleave', () => {
        const titulo = panel.querySelector('.titulo');
        if (titulo) {
            titulo.style.color = ''; 
        }
    });
});