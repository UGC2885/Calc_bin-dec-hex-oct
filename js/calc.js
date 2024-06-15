// Função para cálculos baseados na medida (bin ou dec)

import { operacaoLogica } from "./oprLog.js";

export function calc1() {
  var medida = document.getElementById("medida").value;
  var input = document.getElementById("calc").value;
  switch (medida) {
    case "bin":
      var partes = input.split(/(\+|\-|\*|\/)/).map(function (part) {
        return part.trim();
      });
      var resultado = operacaoLogica(partes[0], partes[1], partes[2]);
      document.getElementById("result").value = resultado;
      break;
    case "dec":
      var decimal = eval(input);
      document.getElementById("result").value = decimal;
      break;
  }
}

