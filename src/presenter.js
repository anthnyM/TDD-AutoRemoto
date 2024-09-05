import { leer_comando, leer_dimension, leer_pos_inicial, leer_instrucciones, validar_comando, moverAuto} from "./auto.js";

const comando = document.querySelector("#comando");
const form = document.querySelector("#comando-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const output = leer_comando(comando.value);
  const dimension = leer_dimension(comando.value);
  const pos_inicial = leer_pos_inicial(comando.value);
  const instrucciones = leer_instrucciones(comando.value);
  const pos_final = moverAuto(dimension, pos_inicial, instrucciones)

  if (validar_comando(comando.value)){
    div.innerHTML = 
    "<p>Comando: " + output + "</p>" +
    "<p>Dimension: " + dimension + "</p>" +
    "<p>Posicion inicial: " + pos_inicial + "</p>" +
    "<p>Instrucciones: " + instrucciones + "</p>" + 
    "<p>Posicion Final: " + pos_final + "</p>";

  }
  else {
    div.innerHTML = "<p>Comando invalido</p>"
  }
});
