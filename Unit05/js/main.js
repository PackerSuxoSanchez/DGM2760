// Create an array with 4 trees listed
const trees = ['oak', 'Pine', 'aspn', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// Display the list of tree inside the display
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
}

listTrees()

document.querySelector('#addRedwood').onclick = () => {
    trees.push('redwood')
    listTrees()
}

document.querySelector('#addPear').onclick = () => {
    trees.unshift('pear')
    listTrees()
}

document.querySelector('#removeTree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'Cannot remove first tree because there are no trees!'
    }
}