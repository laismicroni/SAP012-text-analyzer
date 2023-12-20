import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`.


document.querySelector('textarea').addEventListener('input', () => {
    const text = document.querySelector('textarea').value;
        const wordCount = analyzer.getWordCount(text);
        document.querySelectorAll('.teste')[0].textContent = `Contagem de palavras: ${wordCount}`;
        const characterCount = analyzer.getCharacterCount(text);
        document.querySelectorAll('.teste')[1].textContent = `Contagem de caracteres: ${characterCount}`;
        const characterNoSpacesCount = analyzer.getCharacterCountExcludingSpaces(text);
        document.querySelectorAll('.teste')[2].textContent = `Caracteres sem espaços: ${characterNoSpacesCount}`;
        const numberCount = analyzer.getNumberCount(text);
        document.querySelectorAll('.teste')[3].textContent = `Números: ${numberCount}`;
        const numberSum = analyzer.getNumberSum(text);
        document.querySelectorAll('.teste')[4].textContent = `Soma de números: ${numberSum}`;
        const wordLengthAverage = analyzer.getAverageWordLength(text);
        document.querySelectorAll('.teste')[5].textContent = `Comprimento médio das palavras: ${wordLengthAverage}`;
})

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('reset-button');
    button.addEventListener('click', () => {
        document.querySelectorAll('.teste')[0].textContent = 'Contagem de palavras: ';
        document.querySelectorAll('.teste')[1].textContent = 'Contagem de caracteres: ';
        document.querySelectorAll('.teste')[2].textContent = 'Caracteres sem espaços: ';
        document.querySelectorAll('.teste')[3].textContent = 'Números: ';
        document.querySelectorAll('.teste')[4].textContent = 'Soma de números: ';
        document.querySelectorAll('.teste')[5].textContent = 'Comprimento médio das palavras: ';
    })
})



    
