export function binarioParaDecimalCompl(binario) {
  // Verifica se o número é negativo
  if (binario[0] === "1") {
      // Inverte os bits e adiciona 1 para obter o valor absoluto
      let valorAbsoluto = 0;
      for (let i = 0; i < binario.length; i++) {
          if (binario[i] === "0") {
              valorAbsoluto += Math.pow(2, binario.length - 1 - i);
          }
      }
      valorAbsoluto += 1;
      // Retorna o valor absoluto como negativo
      return -valorAbsoluto;
  } else {
      // Se for positivo, apenas converte para decimal normalmente
      return parseInt(binario, 2);
  }
}
