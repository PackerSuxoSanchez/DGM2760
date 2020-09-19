document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "Bounjour!"

function reDisplay() {
    let windowSizes = `Window size is ${window.innerWidth} px x ${window.innerHeight} px`
    let offset = `Window offset is ${window.screenX} from the left edge and ${window.window.screenY} pixels from the top of the display`
    let myURL = `This page\'s URL is ${document.URL}`
    let myWindow = document.querySelector('#myWindow').innerText = windowSizes + '\n' + offset + '\n' + myURL
}

reDisplay()

function myDocInfo() {
    let docTitle = 'This document\'s title is ' + document.title
    let lastModified = 'This page was last modified on ' + new Date(document.lastModified)
    let docInfo = document.querySelector('#myDocument').innerText = docTitle + '\n' + lastModified
}

myDocInfo()