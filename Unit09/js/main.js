function duplicateMenu() {
    // get all anchor elements from top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')
    // create new list items for the bottom of the page
    let newList = document.createElement('ul')
    topList.forEach(menuItem  => {
        let newListItem = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        // 'copy' the textContent from upper menu to new menu
        newLink.textContent = menuItem.textContent
        // append children to make them appear in the DOM
        newListItem.appendChild(newLink)
        newList.appendChild(newListItem)
        document.querySelector('nav#smallNavArea').appendChild(newList)
    })
}

duplicateMenu()