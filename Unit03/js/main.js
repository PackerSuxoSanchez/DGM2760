document.querySelector('header > h1').innerText = 'Let\'s play a game'
document.querySelector('header > h2').innerText = 'Not Too High, Not Too Low'

// Pick a random number from 1 to 15

let correctNumber = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

function evalGuess() {
    totalGuesses += 1 // totalGuesses = totalGuesses + 1
    gamerGuess = document.querySelector('#guess').value
    console.log(totalGuesses, gamerGuess)
    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
        console.log(`gamerGuess is equal to correctNumber`)
        feedback.innerText = 'YOU WIN!!!'
        giveAward()
    } else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'Too high! Try again!'
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Too low... try again...'
    } else {
        feedback.innerText = 'Please choose a number from 1 to 15 and try again!'
        totalGuesses -= 1
    }

    document.querySelector('#attempts').innerText = totalGuesses

}

function giveAward() {
    console.log('Congratulations!')
    let imagePath = '#'
    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'images/1st-place.svg'
            break;
        case 4:
        case 5:
        case 6:
            imagePath = 'images/2nd-place.svg'
            break;
            default:
            imagePath = 'images/3rd-place.svg'
    }

    const awardImage = document.createElement('img') // Creates an <img> element
    awardImage.setAttribute('src', imagePath)
    const ribbon = document.querySelector('#ribbon')

    ribbon.appendChild(awardImage)
    if (ribbon.hasChildNodes()) {
        console.log('This node hasChildNodes')
        return;
    }
}