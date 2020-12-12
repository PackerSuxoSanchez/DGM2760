async function getAgentInfo() {
    try {
        const response = await fetch('agents.json')
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}