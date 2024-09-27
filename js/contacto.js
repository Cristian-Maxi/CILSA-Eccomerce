//Efecto del Header con SCROLL
(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', function () {

        // Fixed Navbar
        window.addEventListener('scroll', function () {
            var fixedTop = document.querySelector('.fixed-top');
            if (fixedTop) {  // Verifica si el elemento existe
                if (window.innerWidth < 992) {
                    if (window.scrollY > 55) {
                        fixedTop.classList.add('shadow');
                    } else {
                        fixedTop.classList.remove('shadow');
                    }
                } else {
                    if (window.scrollY > 55) {
                        fixedTop.classList.add('shadow');
                        fixedTop.style.top = '-55px';
                    } else {
                        fixedTop.classList.remove('shadow');
                        fixedTop.style.top = '0';
                    }
                }
            }
        });

        // Back to top button
        var backToTopButton = document.querySelector('.back-to-top');
        if (backToTopButton) {  // Verifica si el botón existe
            window.addEventListener('scroll', function () {
                if (window.scrollY > 300) {
                    backToTopButton.style.display = 'block';
                    backToTopButton.style.opacity = '1';
                } else {
                    backToTopButton.style.opacity = '0';
                    setTimeout(function () {
                        backToTopButton.style.display = 'none';
                    }, 600);
                }
            });

            backToTopButton.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

    });

})();

//Modo Oscuro
function ModoOscuro() {
    document.querySelector("body").classList.toggle("modo-oscuro");
    document.querySelector("#form-title").classList.toggle("modo-oscuro");
    document.querySelector("form").classList.toggle("modo-oscuro");
    document.querySelector(".boton button").classList.toggle("modo-oscuro")
    document.querySelectorAll("input").forEach(input => input.classList.toggle("modo-oscuro"));
    document.querySelector("#boton-oscuro").classList.toggle("modo-oscuro")
}

function ComprobarCampos(event) {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let pais = document.getElementById("pais").value;

    const regex = /\d/; // Expresión regular para buscar números
    let mensajeError = ""; // Variable para guardar el mensaje de error

    if (regex.test(nombre)) {
        mensajeError += "Error: El campo Nombre no debe contener números.\n";
    }

    if (regex.test(apellido)) {
        mensajeError += "Error: El campo Apellido no debe contener números.\n";
    }

    if (regex.test(pais)) {
        mensajeError += "Error: El campo País no debe contener números.\n";
    }

    // Si hay errores, mostramos el mensaje y prevenimos el envío
    if (mensajeError) {
        alert(mensajeError);
        event.preventDefault(); // Evita el envío del formulario
        return false;
    }

    return true; // Permite el envío del formulario si no hay números en los campos
}