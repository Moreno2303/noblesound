
  const slides = document.querySelectorAll('.slide');
  let index = 0;

  function mostrarSlide(nuevoIndex) {
    slides[index].classList.remove('activo');
    index = (nuevoIndex + slides.length) % slides.length;
    slides[index].classList.add('activo');
  }

  document.querySelector('.anterior').addEventListener('click', () => {
    mostrarSlide(index - 1);
  });

  document.querySelector('.siguiente').addEventListener('click', () => {
    mostrarSlide(index + 1);
  });

  // Agregar al carrito
  document.getElementById('agregarCarrito').addEventListener('click', () => {
    const producto = {
      nombre: "Producto 1",
      precio: 10.00,
      color: slides[index].getAttribute('data-color') || "Desconocido",
      imagen: slides[index].getAttribute('src')
    };

    // Obtener carrito actual o iniciar vacío
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Agregar producto
    carrito.push(producto);

    // Guardar actualizado
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert(`Agregado al carrito: ${producto.nombre} (${producto.color})`);
  });

