import { productos } from './productos.js';

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

// Seleccionar el contenedor donde se agregarán Todos los Productos
const allProductos = document.getElementById('AllProductos');
// Seleccionar el contenedor donde se agregarán Todos los Productos
const placasDeVideo = document.getElementById('PlacaDeVideo');
// Seleccionar el contenedor donde se agregarán Todos los Productos
const procesador = document.getElementById('Procesador');
// Seleccionar el contenedor donde se agregarán Todos los Productos
const monitor = document.getElementById('Monitor');
// Seleccionar el contenedor donde se agregarán Todos los Productos
const periferico = document.getElementById('Periferico');

// Generar categoria "Todos los Productos"
productos.forEach(producto => {
    const productoHTML = `
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="rounded position-relative fruite-item">
                <div class="fruite-img border border-secondary border-bottom-0">
                    <img src="${producto.imagen}" class="img-fluid w-100 rounded-top"
                        alt="${producto.categoria}">
                </div>
                <div class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                    style="top: 10px; left: 10px;">${producto.categoria}</div>
                <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>${producto.nombre}</h4>
                    <p>${producto.descripcion}</p>
                    <div class="d-flex justify-content-between flex-lg-wrap">
                        <p class="text-dark fs-5 fw-bold mb-0">$${producto.precio}</p>
                        <a href="${producto.enlace}"
                            class="btn border border-secondary rounded-pill px-3 text-primary"><i
                                class="fa fa-shopping-bag me-2 text-primary"></i>
                            Descripcion</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    allProductos.innerHTML += productoHTML;
  });


// Generar categoria "Placas de Video"
productos.forEach(producto => {
    if(producto.categoria === "Placa de video") {
        const productoHTML = `
            <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="rounded position-relative fruite-item">
                    <div class="fruite-img border border-secondary border-bottom-0">
                        <img src="${producto.imagen}" class="img-fluid w-100 rounded-top"
                            alt="${producto.categoria}">
                    </div>
                    <div class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px;">${producto.categoria}</div>
                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>${producto.nombre}</h4>
                        <p>${producto.descripcion}</p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                            <p class="text-dark fs-5 fw-bold mb-0">$${producto.precio}</p>
                            <a href="${producto.enlace}"
                                class="btn border border-secondary rounded-pill px-3 text-primary"><i
                                    class="fa fa-shopping-bag me-2 text-primary"></i>
                                Descripcion</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        placasDeVideo.innerHTML += productoHTML;
    }
  });

// Generar categoria "Procesadores"
productos.forEach(producto => {
    if(producto.categoria === "Procesador") {
        const productoHTML = `
            <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="rounded position-relative fruite-item">
                    <div class="fruite-img border border-secondary border-bottom-0">
                        <img src="${producto.imagen}" class="img-fluid w-100 rounded-top"
                            alt="${producto.categoria}">
                    </div>
                    <div class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px;">${producto.categoria}</div>
                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>${producto.nombre}</h4>
                        <p>${producto.descripcion}</p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                            <p class="text-dark fs-5 fw-bold mb-0">$${producto.precio}</p>
                            <a href="${producto.enlace}"
                                class="btn border border-secondary rounded-pill px-3 text-primary"><i
                                    class="fa fa-shopping-bag me-2 text-primary"></i>
                                Descripcion</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        procesador.innerHTML += productoHTML;
    }
  });

// Generar categoria "Monitores"
productos.forEach(producto => {
    if(producto.categoria === "Monitor") {
        const productoHTML = `
            <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="rounded position-relative fruite-item">
                    <div class="fruite-img border border-secondary border-bottom-0">
                        <img src="${producto.imagen}" class="img-fluid w-100 rounded-top"
                            alt="${producto.categoria}">
                    </div>
                    <div class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px;">${producto.categoria}</div>
                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>${producto.nombre}</h4>
                        <p>${producto.descripcion}</p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                            <p class="text-dark fs-5 fw-bold mb-0">$${producto.precio}</p>
                            <a href="${producto.enlace}"
                                class="btn border border-secondary rounded-pill px-3 text-primary"><i
                                    class="fa fa-shopping-bag me-2 text-primary"></i>
                                Descripcion</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        monitor.innerHTML += productoHTML;
    }
  });

// Generar categoria "Perifericos"
productos.forEach(producto => {
    if(producto.categoria === "Periferico") {
        const productoHTML = `
            <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="rounded position-relative fruite-item">
                    <div class="fruite-img border border-secondary border-bottom-0">
                        <img src="${producto.imagen}" class="img-fluid w-100 rounded-top"
                            alt="${producto.categoria}">
                    </div>
                    <div class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px;">${producto.categoria}</div>
                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>${producto.nombre}</h4>
                        <p>${producto.descripcion}</p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                            <p class="text-dark fs-5 fw-bold mb-0">$${producto.precio}</p>
                            <a href="${producto.enlace}"
                                class="btn border border-secondary rounded-pill px-3 text-primary"><i
                                    class="fa fa-shopping-bag me-2 text-primary"></i>
                                Descripcion</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        periferico.innerHTML += productoHTML;
    }
  });

