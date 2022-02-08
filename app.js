// Grabbing elements from the Dom

const numberSpace = document.querySelector('.number-space');
const digit = document.querySelector('.digit');
const userInput = document.querySelector('.user-input');

// game Variables 

const LEVEL = 1;
const SCORE = 0;
const SPEED = 1.2;

const showDigits = function(level) {
    const numberToShow = numberByComputer(level)
    console.log(numberToShow)
    numberToShow.forEach(dgt => {
        
    })

}

function numberByComputer(numberOfdigis) {
    const maxnumber = Math.pow(10 , numberOfdigis)
    return Array.from(String(Math.trunc(Math.random() * maxnumber))  , Number)
}


showDigits(3)