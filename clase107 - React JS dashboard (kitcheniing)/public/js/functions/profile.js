window.addEventListener("load", async () => {
  const selectProvince = document.querySelector("select[name='province']");
  const selectCity = document.querySelector("select[name='city']");

  selectCity.disabled = true;

  const endpointProvinces =
    "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre";

  const { provincias } = await fetch(endpointProvinces).then((res) =>
    res.json()
  );
  insertOptions(provincias, selectProvince, "nombre");

  selectProvince.addEventListener("change", async function () {
    selectCity.innerHTML =
      '<option value="" selected hidden>Seleccionar localidad</option>';

    const provinceSelected = this.options[this.selectedIndex].value;

    if (!provinceSelected) {
      selectCity.disabled = true;
    } else {
      const endpointCities = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provinceSelected}&campos=id,nombre&max=1000`;

      const { municipios } = await fetch(endpointCities).then((res) =>
        res.json()
      );
      insertOptions(municipios, selectCity, "nombre");
      selectCity.disabled = false;
    }
  });
});

const getOption = ({ id, nombre }) => `<option value="${id}">${nombre}</option>`;

const orderData = (a, b, keyData) => {
  
  const nombreA = a[keyData];
  const nombreB = b[keyData];

  if (nombreA < nombreB) return -1;
  if (nombreA > nombreB) return 1;
  return 0;
};

const insertOptions = (data, elementSelect, sortKeyName) => {
  data
    .sort((a, b) => orderData(a, b, sortKeyName))
    .forEach((province) => {
      console.log(Object.keys(province))
      console.log(Object.values(province))
      /* { id:1, nombre: "Buenos Aires" } */
      elementSelect.innerHTML += getOption(province);
    });
};
