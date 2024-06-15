// Função para conversões entre diferentes medidas (bin, dec, octa, hex)

import { binarioParaDecimalCompl,} from "./complemento2.js";
import { binarioParaDecimal } from "./binDec.js";
import { calc1 } from "./calc.js";

export default function conversor() {
  var input = document.getElementById("calc").value;
  var valor = input.trim();
  var medida = document.getElementById("medida").value;

  switch (medida) {
    case "bin":
      var dec = binarioParaDecimal(valor);
      var oct = dec.toString(8);
      var hex = dec.toString(16).toUpperCase();
      document.getElementById("bin").textContent = "BIN: " + valor;
      document.getElementById("dec").textContent = "DEC: " + dec;
      document.getElementById("octa").textContent = "OCT: " + oct;
      document.getElementById("hex").textContent = "HEX: " + hex;
      break;
    case "compl":
      var bin = parseInt(valor, 2);
      var dec = binarioParaDecimalCompl(valor);
      document.getElementById("bin").textContent = "BIN: " + valor;
      document.getElementById("dec").textContent = "DEC: " + dec;
      document.getElementById("octa").textContent = "";
      document.getElementById("hex").textContent = "";
      break;
    case "dec":
      var bin = parseInt(valor);
      var oct = bin.toString(8);
      var hex = bin.toString(16).toUpperCase();
      document.getElementById("bin").textContent = "BIN: " + bin.toString(2);
      document.getElementById("dec").textContent = "DEC: " + valor;
      document.getElementById("octa").textContent = "OCT: " + oct;
      document.getElementById("hex").textContent = "HEX: " + hex;
      break;
    case "octa":
      var dec = parseInt(valor, 8);
      var bin = dec.toString(2);
      var hex = dec.toString(16).toUpperCase();
      document.getElementById("bin").textContent = "BIN: " + bin;
      document.getElementById("dec").textContent = "DEC: " + dec;
      document.getElementById("octa").textContent = "OCT: " + valor;
      document.getElementById("hex").textContent = "HEX: " + hex;
      break;
    case "hex":
      var dec = parseInt(valor, 16);
      var bin = dec.toString(2);
      var oct = dec.toString(8);
      document.getElementById("bin").textContent = "BIN: " + bin;
      document.getElementById("dec").textContent = "DEC: " + dec;
      document.getElementById("octa").textContent = "OCT: " + oct;
      document.getElementById("hex").textContent =
        "HEX: " + valor.toUpperCase();
      break;
  }
  calc1();
}
