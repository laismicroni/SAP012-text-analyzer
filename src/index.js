import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`.

document.querySelector('textarea').addEventListener('input', () => {
    const text = document.querySelector('textarea').value;
    const wordCount = analyzer.getWordCount(text);
    document.querySelector('.wordCount').textContent = `Contagem de palavras: ${wordCount}`;
    const characterCount = analyzer.getCharacterCount(text);
    document.querySelector('.characterCount').textContent = `Contagem de caracteres: ${characterCount}`;
    const characterNoSpacesCount = analyzer.getCharacterCountExcludingSpaces(text);
    document.querySelector('.characterNoSpacesCount').textContent = `Caracteres sem espaços: ${characterNoSpacesCount}`;
    const numberCount = analyzer.getNumberCount(text);
    document.querySelector('.numberCount').textContent = `Números: ${numberCount}`;
    const numberSum = analyzer.getNumberSum(text);
    document.querySelector('.numberSum').textContent = `Soma de números: ${numberSum}`;
    const wordLengthAverage = analyzer.getAverageWordLength(text);
    document.querySelector('.wordLengthAverage').textContent = `Comprimento médio das palavras: ${wordLengthAverage}`;
    
})

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('reset-button');
    button.addEventListener('click', () => {
        document.querySelector('textarea').value = '';
        document.querySelector('.wordCount').textContent = 'Contagem de palavras: ';
        document.querySelector('.characterCount').textContent = 'Contagem de caracteres: ';
        document.querySelector('.characterNoSpacesCount').textContent = 'Caracteres sem espaços: ';
        document.querySelector('.numberCount').textContent = 'Números: ';
        document.querySelector('.numberSum').textContent = 'Soma de números: ';
        document.querySelector('.wordLengthAverage').textContent = 'Comprimento médio das palavras: ';

    })
})
    