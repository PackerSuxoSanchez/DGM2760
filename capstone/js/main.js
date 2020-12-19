async function getAgentData() {
    try {
        const response = await fetch('agents.json')
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

let agentData = {}

getAgentData().then(data => agentData = data)

let agentLinks = document.querySelectorAll('a').forEach((agentLink) => {
    agentLink.addEventListener('click', agentInfo)
})

function agentInfo(event) {
    let agentChoice = agentData.agents.find(agent => {
        return event.target.id === agent.name.toLowerCase()
    })
    console.log(agentChoice)
    document.querySelector('#agentName').textContent = `${agentChoice.name}`
    document.querySelector('#title').textContent = `${agentChoice.title}`
    document.querySelector('#schedule').textContent = `${agentChoice.schedule}`
    document.querySelector('#experience').textContent = `${agentChoice.experience}`
    document.querySelector('#focus').textContent = `${agentChoice.focus}`
}