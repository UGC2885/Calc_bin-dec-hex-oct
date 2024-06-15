// Função para operações lógicas

import { decimalParaBinario } from "./binDec.js";

export function operacaoLogica(binario1, operador, binario2) {
  var decimal1 = parseInt(binario1, 2);
  var decimal2 = parseInt(binario2, 2);
  var resultadoDecimal;

  switch (operador) {
    case "+":
      resultadoDecimal = decimal1 + decimal2;
      break;
    case "-":
      resultadoDecimal = decimal1 - decimal2;
      break;
    case "*":
      resultadoDecimal = decimal1 * decimal2;
      break;
    case "/":
      resultadoDecimal = Math.floor(decimal1 / decimal2);
      break;
    default:
      return binario1;
  }

  return decimalParaBinario(resultadoDecimal);
}
