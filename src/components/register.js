import { registerFirebase } from "../lib/firebase";
function register(navigateTo) {
  const section = document.createElement("section");
  section.className = "sectionregister";
  const title = document.createElement("h2");
  const form = document.createElement("div");
  const inputEmail = document.createElement("input");
  const inputPass = document.createElement("input");
  const buttonLogin = document.createElement("button");
  const buttonReturn = document.createElement("button");

  title.textContent = "Registrate";
  inputEmail.placeholder = "correo";
  inputPass.placeholder = "contraseña";
  inputPass.type = "password";
  buttonReturn.textContent = "Return";
  buttonReturn.addEventListener("click", () => navigateTo("/login"));

  buttonLogin.textContent = "registrarme";
  buttonLogin.addEventListener("click", () => {
    registerFirebase(inputEmail.value, inputPass.value)
      .then((user) => {
        console.log(user);
        navigateTo("/wall");
      })
      .catch((error) => {
        console.log(error);
        alert("ya estas registrado o no has ingresado datos correctos");
      });
  });

  form.append(inputEmail, inputPass, buttonLogin,buttonReturn);
  section.append(title, form);

  return section;
}

export default register;
