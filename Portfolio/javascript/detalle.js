document.addEventListener("DOMContentLoaded", () => {
  const dataRaw = localStorage.getItem("proyectoSeleccionado");

  if (!dataRaw) {
    window.location.href = "portfolioJulenHidalgo.html";
    return;
  }

  let proyecto;
  try {
    proyecto = JSON.parse(dataRaw);
  } catch (e) {
    console.error("Error al parsear JSON:", e);
    window.location.href = "portfolioJulenHidalgo.html";
    return;
  }

  // Título seguro
  const tituloElem = document.querySelector(".titulo");
  if (tituloElem) tituloElem.textContent = proyecto.nombre;

  // Enlaces GitHub
  const enlacesGit = [
    { label: "Cliente", url: proyecto.git_cliente },
    { label: "Server", url: proyecto.git_server },
    { label: "Extensión Chrome", url: proyecto.git_extension },
  ]
    .filter((e) => e.url)
    .map(
      (e) => `
    <li>
      <span>GitHub ${e.label}:</span> 
      <a class="enlacegit" href="${e.url}" target="_blank">${e.url}</a>
    </li>`
    )
    .join("");

  // Descripción completa
  const descripcionHTML = `
    <ul>
      <li><span>Descripción:</span> ${proyecto.descripcion_larga}</li>
      <li><span>Conocimientos aplicados:</span> ${proyecto.conocimientos}</li>
      <li><span>Fecha:</span> ${proyecto.fecha}</li>
      <li><span>Colaboradores:</span> ${proyecto.colaboradores_largo}</li>
      ${enlacesGit}
    </ul>
  `;

  const descElem = document.querySelector(".descripcion");
  if (descElem) descElem.innerHTML = descripcionHTML;

  // Galería multimedia
  const slideshow = document.querySelector(".slideshow-container");
  if (slideshow && proyecto.imagenes) {
    let imagesLoadedCount = 0;

    proyecto.imagenes.forEach((src, index) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("mySlides", "fade", "slides");
      wrapper.style.display = "none"; // Asegura ocultarlas todas inicialmente

      if (src.endsWith(".mp4")) {
        wrapper.innerHTML = `
          <video width="640" height="360" controls>
            <source src="${src}" type="video/mp4">
          </video>`;
        slideshow.insertBefore(wrapper, slideshow.querySelector(".prev"));

        // Mostrar el primer slide directamente si es vídeo
        if (index === 0) {
          wrapper.style.display = "block";
        }
      } else {
        const img = new Image();
        img.src = src;
        img.classList.add("imgSlides");
        img.alt = "Imagen del proyecto";
        img.onload = () => {
          imagesLoadedCount++;

          // Mostrar el primer slide una vez cargado
          if (index === 0) {
            wrapper.style.display = "block";
          }
        };

        wrapper.appendChild(img);
        slideshow.insertBefore(wrapper, slideshow.querySelector(".prev"));
      }
    });
  }
});
