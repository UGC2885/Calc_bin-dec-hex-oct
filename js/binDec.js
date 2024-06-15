// Funções para conversão entre binário e decimal
export function binarioParaDecimal(binario) {
  return parseInt(binario, 2);
}

export function decimalParaBinario(decimal) {
  return (decimal >>> 0).toString(2);
}
