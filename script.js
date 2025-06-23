// script.js
const proyectos = [
  {
    nombre: "Método de Bisección",
    descripcion: "Encuentra raíces de funciones con el método de bisección.",
    enlace: "proyectos/biseccion.py"
  },
  {
    nombre: "Método de Jacobi",
    descripcion: "Resuelve sistemas lineales iterativamente.",
    enlace: "proyectos/jacobi.py"
  }
];

const contenedor = document.getElementById("proyectos-lista");

proyectos.forEach(p => {
  const tarjeta = document.createElement("div");
  tarjeta.innerHTML = `
    <h3>${p.nombre}</h3>
    <p>${p.descripcion}</p>
    <a href="${p.enlace}" target="_blank">Ver código</a>
  `;
  tarjeta.classList.add("tarjeta");
  contenedor.appendChild(tarjeta);
});

// script.js (al final)
const btn = document.getElementById("modo-btn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
});


