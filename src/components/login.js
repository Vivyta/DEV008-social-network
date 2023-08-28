import { loginFirebase } from "../lib/firebase";
function login(navigateTo) {
  const section = document.createElement("section");
  section.className= "sectionlogin";
  const title = document.createElement("h1");
  title.className= "titlelogin";
  const titleDescription = document.createElement("p");
  const buttonReturn = document.createElement("button");
  const form = document.createElement("div");
  form.className="divlogin";
  const inputEmail = document.createElement("input");
  const inputPass = document.createElement("input");
  const buttonLogin = document.createElement("button");
  

  title.textContent = "Mangalover bienvenid@s";
  titleDescription.textContent= "Aquí podras encontrar tu sitio para recomendar o comentar de tu manga favorito";
  inputEmail.placeholder = "correo";
  inputPass.placeholder = "contraseña";
  inputPass.type ="password";
  buttonLogin.textContent = "Ir";
  buttonLogin.addEventListener("click", () => {
    loginFirebase(inputEmail.value, inputPass.value)
      .then((user) => {
        console.log(user);
        navigateTo("/wall");
      })
      .catch((error) => {
        console.log(error);
        alert("Usuario no registrado");
      });
  });

  buttonReturn.textContent = "registrarme";
  buttonReturn.addEventListener("click", () => navigateTo("/register"));

  form.append(inputEmail, inputPass, buttonLogin, buttonReturn);
  section.append(title, form);

  return section;
}

export default login;
