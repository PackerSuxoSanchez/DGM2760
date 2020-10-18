function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

let month = getRandomIntInclusive(1, 12)
let fate = getRandomIntInclusive(1, 5)
let day = getRandomIntInclusive(1, 30)

function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = 'January'
            break;
        case 2:
            name = 'February'
            break;
        case 3:
            name = 'March'
            break;
        case 4:
            name = 'April'
            break;
        case 5:
            name = 'May'
            break;
        case 6:
            name = 'June'
            break;
        case 7:
            name = 'July'
            break;
        case 8:
            name = 'August'
            break;
        case 9:
            name = 'September'
            break;
        case 10:
            name = 'October'
            break;
        case 11:
            name = 'November'
            break;
        case 12:
            name = 'December'
            break;
        default:
            name = 'Not a month'
            break;
    }
    return name
}

function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message: 'be featured as the strongest superhero in the next Marvel movie!'
            break;
        case 2:
            message: 'win millions of dollars from a long lost uncle in Nigeria'
            break;
        default:
            message: 'Some sort of error occured'
            break;
    }
}

const monthName = getMonthName(month)

const fortuneRevealed = `On ${monthName} ${day}, you will ${fate}`

document.querySelector('#fortune').innerText = fortuneRevealed