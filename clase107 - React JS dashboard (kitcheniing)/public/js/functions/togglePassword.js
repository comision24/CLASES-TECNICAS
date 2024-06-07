window.addEventListener("load", () => {
  const inputPass2 = document.querySelector("#contrasenia");
  const btnEye = document.querySelector("#btn-eye");
  const iconEye = document.querySelector("#icon-eye");

  btnEye.addEventListener("click", (event) => {
    const isActive = iconEye.classList.contains("fa-eye-slash");
    if (isActive) {
      inputPass2.type = "password";
    } else {
      inputPass2.type = "text";
    }
    iconEye.classList.toggle("fa-eye");
    iconEye.classList.toggle("fa-eye-slash");
  });
});