import { leer_comando } from "./auto.js";

const comando = document.querySelector("#comando");
const form = document.querySelector("#comando-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const comando = leer_dimension(comando.value);

  div.innerHTML = "<p>Dimension: " + dimension + "</p>";
})
