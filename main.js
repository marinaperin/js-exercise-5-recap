// Exercise 1

function wordReverser (wordToReverse){
    let reversedWord = '';
    for (let i = wordToReverse.length -1; i >= 0; i--){
        reversedWord += wordToReverse[i];
    }
    return reversedWord;
}

window.addEventListener('load', function(){
    const userWord = prompt(`Pick a word to reverse`);
    const reversedUserWord = wordReverser(userWord);
    let resultSpace = document.getElementById('result');
    resultSpace.innerText = `The reversed word is ${reversedUserWord}`;
});

