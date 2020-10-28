// Create an array with 4 trees listed
const trees = ['oak', 'Pine', 'aspen', 'Bald Cypress']
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
        errorElement.textContent = 'Cannot remove first tree because there are no more trees!'
    }
}

document.querySelector('#removeTree2').onclick = () => {
    if (trees.length > 1) {
        trees.splice(1, 1)
        listTrees()
    } else {
        errorElement.textContent = 'There is no second tree to remove!'
    }
    
}

document.querySelector('#removeTreeLast').onclick = () => {
    if (trees.length > 0) {
        trees.pop()
        listTrees()
    } else {
        errorElement.textContent = 'Cannot remove last tree because there are no more trees!'
    }
}

document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees()
}

/* document.querySelector('#sortTrees').onclick = () => {
    trees.sort((a,b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase())
    })
    listTrees()
} */

document.querySelector('#lowerTrees').onclick = () => {
    trees.forEach((tree, index, array) => {
        array[index] = tree.toLowerCase()
    })
    listTrees()
}

document.querySelector('#showName3').onclick = () => {
    if (trees.length > 2) {
        const treeThree = trees[2]
        errorElement.textContent = `The third tree is a(n) ${treeThree} tree!`
    } else {
        error.textContent = 'Sorry, there are less than three trees!'
    }
}

document.querySelector('#showName4').onclick = () => {
    if (trees.length > 3) {
        const treeFour = trees[3]
        errorElement.textContent = `The fourth tree is a(n) ${treeFour} tree!`
    } else {
        errorElement.textContent = 'Sorry, there are less than four trees!'
    }
}