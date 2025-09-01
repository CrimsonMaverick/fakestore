function mostrarProductos(productos) {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";
  productos.forEach(p => {
    const item = document.createElement("div");
    item.className = "col-12 col-sm-6 col-md-4 col-lg-3";
    item.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${p.image}" class="card-img-top p-3" style="height:200px; object-fit:contain;" alt="${p.title}">
        <div class="card-body d-flex flex-column">
          <h6 class="card-title">${p.title}</h6>
          <p class="card-text fw-bold mt-auto">$${p.price}</p>
        </div>
      </div>
    `;
    contenedor.appendChild(item);
  });
}
