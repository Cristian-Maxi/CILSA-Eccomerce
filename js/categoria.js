import { productos } from "./productos.js";

//Efecto del Header con SCROLL
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    // Fixed Navbar
    window.addEventListener("scroll", function () {
      var fixedTop = document.querySelector(".fixed-top");
      if (fixedTop) {
        // Verifica si el elemento existe
        if (window.innerWidth < 992) {
          if (window.scrollY > 55) {
            fixedTop.classList.add("shadow");
          } else {
            fixedTop.classList.remove("shadow");
          }
        } else {
          if (window.scrollY > 55) {
            fixedTop.classList.add("shadow");
            fixedTop.style.top = "-55px";
          } else {
            fixedTop.classList.remove("shadow");
            fixedTop.style.top = "0";
          }
        }
      }
    });

    // Back to top button
    var backToTopButton = document.querySelector(".back-to-top");
    if (backToTopButton) {
      // Verifica si el botón existe
      window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
          backToTopButton.style.display = "block";
          backToTopButton.style.opacity = "1";
        } else {
          backToTopButton.style.opacity = "0";
          setTimeout(function () {
            backToTopButton.style.display = "none";
          }, 600);
        }
      });

      backToTopButton.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  });
})();

// Seleccionar el contenedor donde se agregarán Todos los Productos
const allProductos = document.getElementById("AllProductos");
// Seleccionar el contenedor donde se agregarán Todos los Productos
const placasDeVideo = document.getElementById("PlacaDeVideo");
// Seleccionar el contenedor donde se agregarán Todos los Productos
const procesador = document.getElementById("Procesador");
// Seleccionar el contenedor donde se agregarán Todos los Productos
const monitor = document.getElementById("Monitor");
// Seleccionar el contenedor donde se agregarán Todos los Productos
const periferico = document.getElementById("Periferico");

// Generar categoria "Todos los Productos"
productos.forEach((producto, index) => {
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
                    <a href=${producto.enlace}><h4 class="text-dark">${producto.nombre}</h4></a>
                    <p>${producto.descripcion}</p>
                    <div class="d-flex justify-content-between flex-lg-wrap">
                        <p class="text-dark fs-5 fw-bold mb-0">$${producto.precio.toLocaleString()}</p>
                        <a href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary agregar-carrito" data-index="${index}">
                            <i class="fa fa-shopping-bag me-2 text-primary"></i> Agregar
                        </a>

                        <!-- Boton para que funcione el Modal
                        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal-${index}">Detalles</button>
                        -->
                        
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Se agrega Modal a los Productos
        <div class="modal fade" id="modal-${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel-${index}" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header justify-content-between">
                        <h5 class="modal-title" id="exampleModalLabel-${index}">${producto.nombre}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <img src="${producto.imagen}" class="card-img-top p-5" alt="${producto.alt}">
                    <div class="card-body p-5">
                        <p class="card-text"><strong>${producto.nombre}</strong></p>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${producto.descripcion}</h6>
                        <h5 class="card-title">$${producto.precio.toLocaleString()}</h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <a href="#" class="btn btn-primary agregar-carrito" data-index="${index}" data-bs-dismiss="modal">Añadir al carrito</a>
                    </div>
                </div>
            </div>
        </div>
        -->
    `;
  allProductos.innerHTML += productoHTML;
});

// Generar categoria "Placas de Video"
productos.forEach((producto, index) => {
  if (producto.categoria === "Placa de video") {
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
                        <a href=${producto.enlace}><h4 class="text-dark">${producto.nombre}</h4></a>
                        <p>${producto.descripcion}</p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                            <p class="text-dark fs-5 fw-bold mb-0">$${producto.precio.toLocaleString()}</p>
                        <a href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary agregar-carrito" data-index="${index}">
                            <i class="fa fa-shopping-bag me-2 text-primary"></i> Agregar
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            
        `;
    placasDeVideo.innerHTML += productoHTML;
  }
});

// Generar categoria "Procesadores"
productos.forEach((producto, index) => {
  if (producto.categoria === "Procesador") {
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
                        <a href=${producto.enlace}><h4 class="text-dark">${producto.nombre}</h4></a>
                        <p>${producto.descripcion}</p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                            <p class="text-dark fs-5 fw-bold mb-0">$${producto.precio.toLocaleString()}</p>
                            <a href="#"
                                class="btn border border-secondary rounded-pill px-3 text-primary agregar-carrito" data-index="${index}">
                                <i class="fa fa-shopping-bag me-2 text-primary"></i> Agregar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    procesador.innerHTML += productoHTML;
  }
});

// Generar categoria "Monitores"
productos.forEach((producto, index) => {
  if (producto.categoria === "Monitor") {
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
                        <a href=${producto.enlace}><h4 class="text-dark">${producto.nombre}</h4></a>
                        <p>${producto.descripcion}</p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                            <p class="text-dark fs-5 fw-bold mb-0">$${producto.precio.toLocaleString()}</p>
                            <a href="#"
                                class="btn border border-secondary rounded-pill px-3 text-primary agregar-carrito" data-index="${index}">
                                <i class="fa fa-shopping-bag me-2 text-primary"></i> Agregar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    monitor.innerHTML += productoHTML;
  }
});

// Generar categoria "Perifericos"
productos.forEach((producto, index) => {
  if (producto.categoria === "Periferico") {
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
                        <a href=${producto.enlace}><h4 class="text-dark">${producto.nombre}</h4></a>
                        <p>${producto.descripcion}</p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                            <p class="text-dark fs-5 fw-bold mb-0">$${producto.precio.toLocaleString()}</p>
                            <a href="#"
                                class="btn border border-secondary rounded-pill px-3 text-primary agregar-carrito" data-index="${index}">
                                <i class="fa fa-shopping-bag me-2 text-primary"></i> Agregar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    periferico.innerHTML += productoHTML;
  }
});

// Después de haber generado todas las Tarjetas
const botonesAgregarCarrito = document.querySelectorAll(".agregar-carrito");
botonesAgregarCarrito.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    const index = e.target.dataset.index;
    carrito.agregarProductoCarrito(productos[index]);
  });
});

let carrito = {
  productos: [],
  total: 0,

  agregarProductoCarrito(producto) {
    this.productos.push(producto);
    this.total += producto.precio;
    cargarASeccion(producto);
    this.mostrar();
    this.guardarCarritoLocalStorage();
    chekBotonConfirmar();
  },

  eliminarProductoCarrito(producto) {
    // Encontramos el índice del primer producto que coincide
    const index = this.productos.findIndex((p) => p.nombre === producto.nombre);

    // Si existe el producto, lo eliminamos
    if (index !== -1) {
      this.total -= this.productos[index].precio; // Restamos el precio
      this.productos.splice(index, 1);
      this.guardarCarritoLocalStorage();
      chekBotonConfirmar();
    }
  },

  eliminarCarrito() {
    this.productos = [];
    this.total = 0;
    contador.innerHTML = carrito.productos.length;
  },

  mostrar() {
    let carrito = {
      nombre: "Carrito de compras",
      productos: this.productos,
      total: this.total,
    };
    console.log(carrito);
  },

  guardarCarritoLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(this));
    if (this.total === 0) {
      localStorage.removeItem("carrito");
    }
  },

  eliminarCarritoLocalStorage() {
    localStorage.removeItem("carrito");
  },

  leerCarritoLocalStorage() {
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    if (carrito) {
      this.productos = carrito.productos;
      this.total = carrito.total;
      this.productos.forEach((producto) => {
        cargarASeccion(producto);
      });
      document.querySelector(
        ".total"
      ).innerHTML = `Total: $${this.total.toLocaleString()}`;
    } else {
      document.querySelector(".total").innerHTML =
        '<p class="total">No hay productos seleccionados</p>';
    }
  },
};

function cargarASeccion(producto) {
    // Asegúrate de que contador seleccione correctamente el elemento deseado
    const contador = document.querySelector(".position-absolute.bg-secondary");
    const contenedor = document.querySelector(".carrito");
    const item = document.createElement("div");
    item.classList.add("item");
    contador.classList.remove("blue"); // Asegúrate de que el contador esté bien seleccionado
  
    item.innerHTML = `
          <div class="carrito-item">
              <img class="carrito-img" src="${producto.imagen}" alt="${producto.nombre}">
              <div class="carrito-info">
                  <p class="nombre">${producto.nombre}</p>
                  <h5 class="precio">$${producto.precio.toLocaleString()}</h5>
              </div>         
              <button class="btn btn-danger eliminar" onclick="eliminarProductoCarrito('${producto}')"> <i class="fa-solid fa-trash"></i></button>
          </div>
      `;
  
    document.querySelector(".total").innerHTML = `Total: $${carrito.total.toLocaleString()}`;
    contenedor.appendChild(item);
  
    const botonEliminar = item.querySelector(".eliminar");
    botonEliminar.addEventListener("click", () => {
      carrito.eliminarProductoCarrito(producto);
      contador.innerHTML = carrito.productos.length;
      item.remove();
      if (carrito.total === 0) {
        document.querySelector(".total").innerHTML = '<p class="total">No hay productos seleccionados</p>';
        contador.classList.add("blue");
      } else {
        document.querySelector(".total").innerHTML = `Total: $${carrito.total.toLocaleString()}`;
      }
    });
  
    contador.innerHTML = carrito.productos.length;
  }

  const botonConfirmar = document.querySelector(".confirmar");
  let contador = document.querySelector(".contador");
  
  function chekBotonConfirmar() {
    if (carrito.total === 0) {
      botonConfirmar.disabled = true;
      // Eliminar la clase de estilo de hover si el botón está deshabilitado
      botonConfirmar.classList.remove("activo");
    } else {
      botonConfirmar.disabled = false;
      // Agregar la clase de estilo de hover si el botón está habilitado
      botonConfirmar.classList.add("activo");
    }
  }
  
  chekBotonConfirmar();
  botonConfirmar.addEventListener("click", () => {
    if (carrito.total === 0) {
      document.getElementById("modalCompraLabel").textContent = "Compra Fallida"
      const mensajeCompra ="No hay productos en el carrito";
      document.getElementById("modalCompraMensaje").textContent = mensajeCompra;
      const modal = new bootstrap.Modal(document.getElementById("modalCompraConfirmada"));
      modal.show();
    } else {
      document.querySelector(".carrito").innerHTML = "";
      document.querySelector(".total").innerHTML =
        '<p class="total">No hay productos seleccionados</p>';

      document.getElementById("modalCompraLabel").textContent = "Compra Realizada"
      
      // Crear mensaje de confirmación
      const mensajeCompra =
        "Compra confirmada, su recibo es de $" + carrito.total.toLocaleString() + ". Muchas gracias por comprar en House Gaming.";
  
      // Asignar mensaje al modal
      document.getElementById("modalCompraMensaje").textContent = mensajeCompra;
  
      // Mostrar el modal
      const modal = new bootstrap.Modal(document.getElementById("modalCompraConfirmada"));
      modal.show();
  
      carrito.eliminarCarrito();
      carrito.guardarCarritoLocalStorage();
      chekBotonConfirmar();
      contador.classList.add("blue");
    }
  });