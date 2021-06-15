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
});

/* ETAPA 3
- Nodo padre: div con class contenedor
- Nodo hijo repetitivo: divs con class tarjeta
- Explicación: Profe no llegamos a terminar
*/
