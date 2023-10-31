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
    let resultSpace = document.getElementById('exercise-1');
    resultSpace.innerText = `The reversed word is ${reversedUserWord}`;
});
*/

// Exercise 2
/*
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
    /* if (0 > stringNumber || stringNumber > stringArray.length || isNaN(stringNumber)){
        alert('Pick another number');
        stringNumber = prompt('How many strings do you want to concatenate?');
    }*
    concatenatedStrings = stringChain (stringArray, stringNumber);
    let resultSpace = document.getElementById('exercise-2');
    resultSpace.innerText = `The concatenated string is '${concatenatedStrings}'`;
});
*/

// Exercise 3
/*
function doubler (number){
    let double = number*2;
    return double;
}

window.addEventListener('load', function(){
    let numbers = [];
    for (let i = 0; i < 10; i++){
        const userNumber = Number(prompt(`Choose 10 numbers - number ${i+1}`));
        let doubledNumber = doubler(userNumber);
        numbers [i] = doubledNumber;
    }
    let resultSpace = document.getElementById('exercise-3');
    resultSpace.innerText = `The doubled numbers are ${numbers}`;
});
*/

// Exercise 4
/*
function upperOrLower (val, string){
    if (val === 0){
        return string.toLowerCase();
    } else if (val === 1) {
        return string.toUpperCase();
    }
}

window.addEventListener('load', function(){
    let randomAlphabet = [];
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alphabetString.length; i++){
        let value = Math.floor(Math.random()*(1-0+1)+0);
        let alphabetLetter = alphabetString[i];
        alphabetLetter = upperOrLower(value, alphabetLetter);
        randomAlphabet[i] = alphabetLetter;
    }
    let resultSpace = document.getElementById('exercise-4');
    resultSpace.innerText = `The random alphabet is ${randomAlphabet}`;
});
*/
// Exercise 5

function coinThrower (){
    let val = Math.floor(Math.random()*(1-0+1)+0);
    if (val === 0){
        return `Head`;
    }else if (val === 1){
        return `Tail`;
    }
}

window.addEventListener('load', function(){
    let throwNumber = Number(prompt('How many times do you want to throw the coin?'));
    if (isNaN(throwNumber)){
        alert('Invalid value');
        throwNumber = prompt('How many times do you want to throw the coin?');
    }
    let totalUserWins = 0;
    let totalUserLosses = 0;
    for (let i = 0; i < throwNumber; i++){
        let userGuess = prompt('Head or Tail?');
        if (userGuess !== 'Head' && userGuess !== 'Tail'){
            alert('Invalid choice');
            userGuess = prompt('Head or Tail?');
        }
        let throwResult = coinThrower();
        if (throwResult === userGuess){
            totalUserWins+=1;
        }else {
            totalUserLosses+=1;
        }
        console.log(throwResult, totalUserWins, totalUserLosses);
    }
    let result = '';
    if (totalUserWins > totalUserLosses){
        result = 'You won!';
    }else if (totalUserLosses > totalUserWins){
        result = 'You lost!';
    }else if (totalUserLosses === totalUserWins){
        result = 'You tie!';
    }
    let resultSpace = document.getElementById('exercise-5');
    resultSpace.innerText = `The result of this match is ${result}`;
});
