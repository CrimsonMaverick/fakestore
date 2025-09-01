
let productos = [];
let productosOriginales = [];

// Cuando cargue la página, pedimos la API
cargarProductosAPI((data) => {
  productos = [...data];
  productosOriginales = [...data];
  mostrarProductos(productos);
});
