
let productos = [];
let productosOriginales = [];
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        productos = [...data];
        productosOriginales = [...data];
        mostrarProductos();
      });
