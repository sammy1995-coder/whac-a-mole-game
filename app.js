const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition 
let currentTime = 30;
    let TimerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    console.log(randomSquare);
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
    
}

randomSquare();

squares.forEach(square => {
    square.addEventListener('click', () => {
        if(square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})





function moveMole() {

    TimerId = setInterval(randomSquare, 700)
}

moveMole()

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(TimerId)
        alert('GAME OVER!! your current score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown,700)