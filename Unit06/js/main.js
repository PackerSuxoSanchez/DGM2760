function tellStory() {
    const nounArray = document.querySelector('#noun')
    const adjArray = document.querySelector('#adj')
    const verbArray = document.querySelector('#verb')

    const noun = nounArray.value.split(/\s+/).map(function (noun) {
        return noun.toLowerCase()
    })

    const adj = adjArray.value.split(/\s+/).map(function (adj) {
        return adj.toLowerCase();
    })

    const verb = verbArray.value.split(/\s+/).map(function (verb) {
        return verb.toLowerCase();
    })

    const myStory = `Once upon a time there was a <span>${adj[0]} ${noun[0]}</span> named Bo. He lived with his mother underneath a <span>${noun[1]}</span> near a <span>${adj[1]} ${noun[2]}</span>. One day she said to <span>${adj[0]}</span> Bo: You may go over the <span>${noun[3]}</span> or around the <span>${noun[4]}</span>, but do not go into the neighbor\'s <span>${noun[5]}</span>; your father had an accident there and he was put in a <span>${noun[6]}</span> by the neighbor. Now <span>${verb[0]}</span> along, and don't get into mischief. I need to go <span>${verb[1]}ing</span>.`

    document.querySelector('#story').innerHTML = myStory
}