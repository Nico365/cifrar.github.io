window.cipher = {
  encode: (text, key) => {
    let asciiToLetter;
    for (let i = 0; i < text.length; i++) {
      let ascii = text.charCodeAt(i);
      if (ascii >= 65 && ascii <= 90) {
        // Formula para letras mayúsculas
        let formula = ((ascii - 65 + key) % 26 + 65);
        resultEncrypt[i] = formula;
        console.log(formula);
      } else if (ascii >= 97 && ascii <= 122) {
        // Formula para letras minúsculas
        let formulaDos = ((ascii - 97 + key) % 26 + 97);
        resultEncrypt[i] = formulaDos;
      } else {
        let formulaAscii = ascii;
        resultEncrypt[i] = formulaAscii;
      }
    }
    for (let j = 0; j < resultEncrypt.length; j++) {
      asciiToLetter = String.fromCharCode(resultEncrypt[j]);
      resultEncrypt[j] = asciiToLetter;
    }
    return resultEncrypt;
  },

  decode: (resultEncrypt, key) => {
    for (let k = 0; k < resultEncrypt.length; k++) {
      let asciiDos = resultEncrypt[k].charCodeAt();
      if (asciiDos <= 91 && asciiDos >= 61) {
        let formulaTres = (((asciiDos + 65) - key) % 26 + 65);
        resultDecrypt[k] = formulaTres;
      } else if (asciiDos <= 122 && asciiDos >= 95) {
        let formulaCuatro = (((asciiDos - 122) - key) % 26 + 122);
        resultDecrypt[k] = formulaCuatro;
      } else {
        let formulaAsciiDos = asciiDos;
        resultDecrypt[k] = formulaAsciiDos;
      }
    }
    for (let l = 0; l < resultDecrypt.length; l++) {
      let asciiToLetterTwo = String.fromCharCode(resultDecrypt[l]);
      resultDecrypt[l] = asciiToLetterTwo;
    }
    return resultDecrypt;
  }
};