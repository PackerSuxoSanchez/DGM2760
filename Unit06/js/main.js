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

    const myStory = `Once upon a time there were four ${adj[0]} ${noun[0]}s named Flopsy, Mopsy, Cotton-tail, and Peter. They lived with their mother underneath a ${noun[1]} near a ${adj[1]} ${noun[2]}. Now, my dears, said ${adj[0]} Mrs. Rabbit, you may go over the ${noun[3]} or around the ${noun[4]}, but do not go into Mr. McGregor\'s ${noun[5]}, your father had an accident there and he was put in a ${noun[6]} by Mrs. McGregor. Now ${verb[0]} along, and don't get into mischief. I am going ${verb[1]}ing.`

    // Change story

    document.querySelector('#story').innerText = myStory
}