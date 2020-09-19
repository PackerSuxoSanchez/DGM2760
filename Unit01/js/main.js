//document.getElementById('company').innerHTML = "Joe's Bed and Breakfast"
// ^^^This is the same as below
document.querySelector('#company').innerHTML = "Joe's Bed and Breakfast"

document.querySelector('header > h2').innerHTML = "Best B&B in the Rockies"

let userName = prompt("What is your name?")

//let message = "Hello " + userName + ", welcome to the best lodging in the Rocky Mountains!"
// ^^^Same as below

let message = `Hello, ${userName}, welcome to the best lodging in the Rocky Mountains!`

document.querySelector('#greeting').innerText = message