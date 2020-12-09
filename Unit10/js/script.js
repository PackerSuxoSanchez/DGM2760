async function getHotelData() {
    try {
        const response = await fetch('hotel.json')
        return await response.json() // returns JSON object
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}

getHotelData().then(data => hotelData = data)