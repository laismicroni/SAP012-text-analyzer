const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(' ');
    return words.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const characters = text.replace(/[^a-zA-Z0-9]/g, '');
    return characters.length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(' ');
    let totalLength = 0;
    for (let i = 0; i < words.length; i++) {
      totalLength += words[i].length;
    }
    const averageLength = totalLength / words.length;
    return parseFloat(averageLength.toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if (numbers) {
      return numbers.length;
    } else {
      return 0;
    }
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if (numbers) {
      let numberssum = 0;
      for (let i = 0; i < numbers.length; i++) {
        numberssum += parseFloat(numbers[i]);
      }
      return numberssum;
    }
    else {
      return 0;
    }
  },
};


export default analyzer;
