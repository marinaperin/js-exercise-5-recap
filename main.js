// Exercise 1
/*
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
*/
// Exercise 2

function stringChain (array, numberOfStrings){
    let chain = '';
    for (let i = 0; i < array.length; i++){
        chain += array[i];
        if (i+1 === numberOfStrings){
            break;
        }
    }
    return chain;
}

window.addEventListener('load', function(){
    let stringArray = ['Hello,', ' today is', ' a good', ' day.', ' How are you?', ' Do you like M-', ' Mysteries?', ' Do you want to', ' play a game with me?'];
    let concatenatedStrings = '';
    const stringNumber = Number(prompt('How many strings do you want to concatenate?'));
    /* while (0 > stringNumber || stringNumber > stringArray.length || isNaN(stringNumber)){
        alert('Pick another number');
        prompt('How many strings do you want to concatenate?');
    }*/
    concatenatedStrings = stringChain (stringArray, stringNumber);
    let resultSpace = document.getElementById('result');
    resultSpace.innerText = `The concatenated string is '${concatenatedStrings}'`;
});


