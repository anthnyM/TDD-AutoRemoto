import { leer_comando, leer_dimension} from "./auto.js";

const comando = document.querySelector("#comando");
const form = document.querySelector("#comando-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const output = leer_comando(comando.value);
  const dimension = leer_dimension(comando.value);
  div.innerHTML = 
  "<p>Comando: " + output + "</p>" +
  "<p>Dimension: " + dimension + "</p>";
});
