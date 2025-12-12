const cuadros = document.querySelectorAll(".cuadro");

// Fondo original de la segunda capa
const fondoOriginal = "./assets/fondo.jpg";

cuadros.forEach(cuadro => {

    cuadro.addEventListener("mouseenter", () => {
        const nuevaImagen = cuadro.getAttribute("data-bg");

        document.body.style.backgroundImage = `
            linear-gradient(rgba(76, 69, 88, 0.226), rgba(44, 44, 44, 0.6)),
            url(${nuevaImagen})
        `;
    });

    cuadro.addEventListener("mouseleave", () => {
        document.body.style.backgroundImage = `
            linear-gradient(rgba(76, 69, 88, 0.226), rgba(44, 44, 44, 0.6)),
            url(${fondoOriginal})
        `;
    });

});
