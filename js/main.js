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

// Función para generar las estrellas
function generarEstrellas(valoracion) {
    let estrellas = '';
    for (let i = 1; i <= 5; i++) {
      estrellas += i <= valoracion ? `<i class="fas fa-star text-primary"></i>` : `<i class="fas fa-star"></i>`;
    }
    return estrellas;
  }
  
// Seleccionar el contenedor donde se agregarán las ofertas
const contenedor = document.getElementById('productos');
// Seleccionar el contenedor donde se agregarán los Mas Buscados
const masBuscados = document.getElementById('masBuscados');

// Generar HTML para productos en oferta
// Ejemplo usando FETCH
fetch('./js/productos.json')
  .then(response => response.json())
  .then(productos => {
    productos.forEach(producto => {
      if (producto.oferta) {
        const productoHTML = `
          <div class="col-lg-6 col-xl-4 oferta">
              <div class="p-4 rounded bg-light">
                  <div class="row align-items-center">
                      <div class="col-6">
                          <img src="${producto.imagen}" class="img-fluid rounded-circle w-100" alt="${producto.nombre}">
                      </div>
                      <div class="col-6">
                          <a href="${producto.enlace}" class="h5">${producto.nombre}</a>
                          <div class="d-flex my-3">
                              ${generarEstrellas(producto.valoracion)}
                          </div>
                          <h4 class="mb-3">${producto.precio}</h4>
                          <a href="${producto.enlace}" class="btn border border-secondary rounded-pill px-3 text-primary">
                              <i class="fa fa-shopping-bag me-2 text-primary"></i>Descripcion
                          </a>
                      </div>
                  </div>
              </div>
          </div>
        `;
        contenedor.innerHTML += productoHTML;
      }
    });
  });


// Generar HTML para productos mas buscados
// Ejemplo usando un módulo ES6 con datos embebidos (productos.js)
import { productos } from './productos.js';

productos.forEach(producto => {
    if(producto.masBuscados){
        const productoHTML = `
            <div class="col-md-6 col-lg-6 col-xl-3 oferta">
                <div class="text-center">
                    <img src="${producto.imagen}" class="img-fluid rounded" alt="${producto.nombre}">
                    <div class="py-4">
                        <a href="${producto.enlace}" class="h5">${producto.nombre}</a>
                        <div class="d-flex my-3 justify-content-center">
                            ${generarEstrellas(producto.valoracion)}
                        </div>
                        <h4 class="mb-3">$${producto.precio}</h4>
                        <a href="${producto.enlace}" class="btn border border-secondary rounded-pill px-3 text-primary"><i
                                class="fa fa-shopping-bag me-2 text-primary"></i> Descripcion</a>
                    </div>
                </div>
            </div>
        `;
        masBuscados.innerHTML += productoHTML;
    }
  });

