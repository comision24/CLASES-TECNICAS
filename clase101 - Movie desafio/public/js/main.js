window.onload = async () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch
  const { data } = await fetch("http://localhost:3031/api/movies").then((res) =>
    res.json()
  );

  data.forEach((movie) => {

    const a = document.createElement("a");
    a.style.display = "inline-block";
    a.style.textDecoration = "none";

    a.href = "/formulario?movieId=" + movie.id

    const card = document.createElement("div");
    card.setAttribute("class", "card");
    

    const h1 = document.createElement("h1");
    h1.textContent = movie.title;

    const p = document.createElement("p");
    p.textContent = `Rating: ${movie.rating}`;

    const duracion = document.createElement("p");
    duracion.textContent = `Duración: ${movie.length}`;

    container.appendChild(a);
    a.appendChild(card)
    card.appendChild(h1);
    card.appendChild(p);
    if (movie.genre !== null) {
      const genero = document.createElement("p");
      genero.textContent = `Genero: ${movie.genre.name}`;
      card.appendChild(genero);
    }
    card.appendChild(duracion);
  });


};
