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
    let resultSpace = document.getElementById('exercise-1');
    resultSpace.innerText = `The reversed word is ${reversedUserWord}`;
});


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
    /* if (0 > stringNumber || stringNumber > stringArray.length || isNaN(stringNumber)){
        alert('Pick another number');
        stringNumber = prompt('How many strings do you want to concatenate?');
    }*/
    concatenatedStrings = stringChain (stringArray, stringNumber);
    let resultSpace = document.getElementById('exercise-2');
    resultSpace.innerText = `The concatenated string is '${concatenatedStrings}'`;
});


// Exercise 3

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


// Exercise 4

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


// Exercise 5

function coinThrower (){
    let val = Math.floor(Math.random()*(1-0+1)+0);
    if (val === 0){
        return `Head`;
    }else if (val === 1){
        return `Tail`;
    }
}

window.addEventListener('load', function coinThrowerGame(){
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


// Exercise 6 

function diceThrower (){
    let val = Math.floor(Math.random()* 6) + 1;
    return val;
}

window.addEventListener('load', function diceThrowerGame(){
    let botThrow = diceThrower();
    let userThrow = diceThrower();
    let winner = '';
    if (botThrow > userThrow){
        winner = 'the bot!';
    }else if (userThrow > botThrow){
        winner = 'you!';
    }else if (userThrow === botThrow){
        winner = `no one. It's a tie!`;
    }
    let resultSpace = document.getElementById('exercise-6');
    resultSpace.innerText = `The bot throw is ${botThrow} and the player throw is ${userThrow}. The winner is... ${winner}`;
});


// Exercise 7

function rouletteThrower (){
    let val = Math.floor(Math.random()* 37);
    return val;
}

window.addEventListener('load', function rouletteThrowerGame(){
    let userBet = (prompt('Do you want to bet on a number or even/odd?'));
    if (userBet !== 'even/odd' && userBet !== 'number'){
        alert('Invalid bet');
        userBet = prompt('Do you want to bet on a number or even/odd?');
    }else if (userBet === 'number'){
        userBet = prompt('Which number?');
    }else if ( userBet === 'even/odd'){
        userBet = prompt('Even or Odd?');
    }
    let betResult = rouletteThrower();
    let betWinner = '';
    if (betResult % 2 === 0 && userBet === 'Even' || userBet === 'even'){
        betWinner = 'You won!';
    }else if (betResult === userBet){
        betWinner = 'You won!';
    }else if (betResult % 2 !== 0 && userBet === 'Odd' || userBet === 'odd'){
        betWinner = `You won!`;
    }else {
        betWinner = 'You lost!'
    }
    let resultSpace = document.getElementById('exercise-7');
    resultSpace.innerText = `You played ${userBet}, the result is ${betResult}. ${betWinner}`;
});


// Exercise 8 

window.addEventListener('load', function(){
    let gameChoice = prompt('Which game do you want to play? Coin, Dice or Roulette?');
    let resultSpace = document.getElementById('exercise-8');
    if (gameChoice !== 'Coin' && gameChoice !== 'Dice' && gameChoice !== 'Roulette'){
        alert('Invalid choice');
        gameChoice = prompt('Which game do you want to play? Coin, Dice or Roulette?');
    }else if (gameChoice === 'Coin'){
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
    }
    let result = '';
    if (totalUserWins > totalUserLosses){
        result = 'You won!';
    }else if (totalUserLosses > totalUserWins){
        result = 'You lost!';
    }else if (totalUserLosses === totalUserWins){
        result = 'You tie!';
    }
    resultSpace.innerText = `The result of this match is ${result}`;
        resultSpace.innerText = `The result of this match is ${result}`;
    }else if (gameChoice === 'Dice'){
        let botThrow = diceThrower();
        let userThrow = diceThrower();
        let winner = '';
        if (botThrow > userThrow){
            winner = 'the bot!';
        }else if (userThrow > botThrow){
            winner = 'you!';
        }else if (userThrow === botThrow){
            winner = `no one. It's a tie!`;
        }
    resultSpace.innerText = `The bot throw is ${botThrow} and the player throw is ${userThrow}. The winner is... ${winner}`;
    }else if (gameChoice === 'Roulette'){
        let userBet = (prompt('Do you want to bet on a number or even/odd?'));
        if (userBet !== 'even/odd' && userBet !== 'number'){
            alert('Invalid bet');
            userBet = prompt('Do you want to bet on a number or even/odd?');
        }else if (userBet === 'number'){
            userBet = prompt('Which number?');
        }else if ( userBet === 'even/odd'){
            userBet = prompt('Even or Odd?');
        }
        let betResult = rouletteThrower();
        let betWinner = '';
        if (betResult % 2 === 0 && userBet === 'Even' || userBet === 'even'){
            betWinner = 'You won!';
        }else if (betResult === userBet){
            betWinner = 'You won!';
        }else if (betResult % 2 !== 0 && userBet === 'Odd' || userBet === 'odd'){
            betWinner = `You won!`;
        }else {
            betWinner = 'You lost!'
        }
    resultSpace.innerText = `You played ${userBet}, the result is ${betResult}. ${betWinner}`;}
});


// Exercise 9

let zooAnimals = ['monkey', 'elephant', 'giraffe', 'capybara', 'lion', 'leopard', 'cheetah', 'lynx', 'wolf', 'fox', 'red panda', 'tiger', 'meerkat', 'kangaroo', 'koala', 'alpaca', 'dolphin', 'parrot', 'seal', 'owl'];

function whichAnimalsAreThere (animal){
    let isThere = '';
    for (let i = 0; i < zooAnimals.length; i++){
        if (animal === zooAnimals[i]){
            isThere = 'You can find this animal here';
            break;
        }else {
            isThere = `Sorry, you can't find this animal here`;
        }
    } return isThere;
}

window.addEventListener('load', function(){
    let userAnimal = (prompt('Which animal do you want to see in the zoo?')).toLowerCase();
    let animalYesOrNo = whichAnimalsAreThere (userAnimal);
    let resultSpace = document.getElementById('exercise-9');
    resultSpace.innerText = `${animalYesOrNo}`;
});


// Exercise 10

function lowerToHigher (array){
    let i = 0, j;
        while (i < array.length){
            j = i + 1;
            while (j < array.length){
                if (array[j] < array[i]){
                    let number = array[i];
                    array[i] = array[j];
                    array[j] = number;
                }
                j++;
            }
            i++;
        } 
    return array;
}

window.addEventListener('load', function(){
    let numbersCount = Number(prompt('How many numbers do you want to pick?'));
    let numbersArray = [];
    for (let i = 0; i < numbersCount; i++){
        let pickedNumbers = Number(prompt(`Choose a number - number ${i + 1}`));
        numbersArray.push(pickedNumbers);
    }
    let orderedNumbersArray = lowerToHigher(numbersArray);
    let resultSpace = document.getElementById('exercise-10');
    resultSpace.innerText = `The numbers in ascending order are ${orderedNumbersArray}`;
});


// Exercise 11

function numberSorter (array, sortType) {
    if (sortType === 'Ascending'){
        let i = 0, j;
        while (i < array.length){
            j = i + 1;
            while (j < array.length){
                if (array[j] < array[i]){
                    let number = array[i];
                    array[i] = array[j];
                    array[j] = number;
                }
                j++;
            }
            i++;
        }
    }else if (sortType === 'Descending'){
        let n = 0, x;
        while (n < array.length){
            x = n + 1;
            while (x < array.length){
                if (array[n] < array[x]){
                    let number = array[x];
                    array[x] = array[n];
                    array[n] = number;
                }
                x++;
            }
            n++;
        }
    }
    return array;
}

window.addEventListener('load', function(){
    let howManyNumbers = Number(prompt('How many numbers do you want to pick?'));
    let userNumbersArray = [];
    for (let i = 0; i < howManyNumbers; i++){
        let numbersToSort = Number(prompt(`Choose a number - number ${i + 1}`));
        userNumbersArray.push(numbersToSort);
    }
    let howToSort = prompt('How would you like them sorted? Ascending or Descending?');
    let sortedNumbersArray = numberSorter(userNumbersArray, howToSort);
    let resultSpace = this.document.getElementById('exercise-11');
    resultSpace.innerText = `The numbers in ${howToSort} order are ${sortedNumbersArray}`;
});
