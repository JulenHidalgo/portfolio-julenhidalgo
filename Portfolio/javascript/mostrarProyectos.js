document.addEventListener("DOMContentLoaded", () => {
  const raw = document.getElementById("proyectos-json").textContent;
  const data = JSON.parse(raw);
  const contenedor = document.body; // O usa document.getElementById('contenedor-proyectos')

  data.proyectos.forEach((proy) => {
    const divProyecto = document.createElement("div");
    divProyecto.classList.add("proyecto");
    divProyecto.id = proy.id;

    // Crear estructura básica HTML
    divProyecto.innerHTML = `
      <div class="tituloProyecto">${proy.nombre}</div>
      <div class="descripcion">
        <ul>
          <li><span>Descripción:</span> ${proy.descripcion_corta}</li>
          <li><span>Fecha:</span> ${proy.fecha}</li>
          <li><span>Colaboradores:</span> ${proy.colaboradores}</li>
        </ul>
        <div class="enlaces"></div>
      </div>
      <div class="imagenes">
        <img src="${proy.imagenes[0]}" alt="Imagen de ${proy.nombre}" />
      </div>
    `;

    // Crear enlace personalizado
    const enlace = document.createElement("a");
    enlace.href = "plantillaProyecto.html";
    enlace.textContent = "Más información";
    enlace.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("proyectoSeleccionado", JSON.stringify(proy));
      window.location.href = "plantillaProyecto.html";
    });

    // Insertar enlace en el contenedor adecuado
    const contenedorEnlaces = divProyecto.querySelector(".enlaces");
    contenedorEnlaces.appendChild(enlace);

    // Insertar proyecto en el DOM
    contenedor.appendChild(divProyecto);
  });
});
