const $ = (el) => document.querySelector(el);
window.onload = async () => {
  const title = $("input#title");
  const rating = $("input#rating");
  const awards = $("input#awards");
  const release_date = $("input#release_date");
  const length = $("input#length");
  const elementsForm = { title, rating, awards, release_date, length };
  const form = $(".formulario");

  const query = new URLSearchParams(location.search);
  const movieId = query.get("movieId");
  const { data } = await fetch(
    `http://localhost:3031/api/movies/${movieId}`
  ).then((res) => res.json());

  console.log(Object.keys(elementsForm));
  Object.entries(data).forEach(([key, value]) => {
    if (Object.keys(elementsForm).includes(key)) {
      elementsForm[key].value = value;
    }
  });

  form.onsubmit = async (e) => {
    try {
      e.preventDefault();
      let existError = Array.from(e.target.elements)
        .filter(({ name }) => name)
        .some((el) => !el.value?.trim());

      if (!existError) {
        await fetch(`http://localhost:3031/api/movies/update/${movieId}`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
        }).then((res) => res.json());
      } else {
        throw new Error("Actualización no realizada");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};
