/* ----FORMA 1-----
const imagenes = document.querySelectorAll("img");
const divsTarjetas = document.querySelectorAll(".tarjeta");
divsTarjetas.forEach((divTarjeta, i) => {
  const anchor = document.createElement("a");
  let urlImagen = prompt("Ingrese el url de la imagen " + (i + 1));
  anchor.setAttribute("href", urlImagen);
  //Etapa 2
  anchor.setAttribute("class", "rutas-img");
  anchor.setAttribute("target", "_blank");
  divTarjeta.appendChild(anchor);
  anchor.appendChild(imagenes[i]);
  imagenes.forEach((imagen) => {
    imagen.setAttribute("src", urlImagen);
    imagen.setAttribute("width", "300px");
  });
});*/

/* ETAPA 3
- Nodo padre: div con class contenedor
- Nodo hijo repetitivo: divs con class tarjeta
- Explicación: Primero obtenemos al div contenedor de todas las tarjetas. Luego
  cree una funcion que se encargue de pedir la url al usuario, generar la template y agregarlas al nodo padre en
  cada iteracion. (Salio luego de que otra compañera de otra mesa me ayude)
*/

let nodoPadre = document.querySelector("div");

function crearTemplate() {
  for (let i = 0; i < 3; i++) {
    let urlImagen = prompt("Buenas! Introduci la url de la imagen " + (i + 1));
    let temp = `<div class="tarjeta">
    <a href=${urlImagen} target=_blank ><img src=${urlImagen} width=300px class="imagen" alt="imagen${i + 1}" id="imagen${i + 1}" /></a>
  </div>`;
    nodoPadre.innerHTML += temp;
  };
};
crearTemplate();
