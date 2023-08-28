import { doc } from "firebase/firestore";
import { listenPosts, savePosts, eliminar } from "../lib/firebase";

function wall(navigateTo) {
  const section = document.createElement("section");
  section.className = "section wall";
  const title = document.createElement("H3");
  title.className= "title";
  const inputPost = document.createElement("input");
  const buttonPost = document.createElement("button");
  const postContainer = document.createElement("div");
  /*const buttonEdit = document.createElement("button");*/
  const buttonOut = document.createElement("button");

  title.textContent = "Wall";
  inputPost.placeholder = "postea aqui";
  inputPost.className = "inputPost";
  buttonPost.textContent = "crear post";
  /*buttonEdit.textContent = "editar";*/
  buttonOut.textContent = "Cerrar Sesion";

  buttonPost.addEventListener("click", () => {
    savePosts(inputPost.value)
      .then(() => {
        console.log("posteo exitoso");
                inputPost.value = "";
      })
      .catch((error) => {
        console.log(error);
        alert("algo salio mal");
      });
  });

  buttonOut.addEventListener("click", () => {
    navigateTo("/login");
  });
  const showPosts = (onSnapshot) => {
    postContainer.innerHTML = "";
    onSnapshot.forEach((doc) => {
      console.log(doc.data());
      const post = document.createElement("div");
      const buttonDelete = document.createElement("button");
      buttonDelete.textContent = "Eliminar";
      post.classList.add("card");

      post.innerHTML = doc.data().email + "</br>" + doc.data().text + "</br>";
      post.appendChild(buttonDelete);

      postContainer.appendChild(post);

      buttonDelete.addEventListener("click", () => {
        eliminar(doc.id)
          .then(() => {
            alert("eliminar post exitoso");
          })
          .catch(() => {
            alert("No es posible eliminar post");
          });
      });
    });
  };
  listenPosts(showPosts);

  section.append(title, inputPost, buttonPost, buttonOut, postContainer);

  return section;
}
export default wall;
