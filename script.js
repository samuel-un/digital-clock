function updateClock(){

    const now = new Date()

    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const milliseconds = now.getMilliseconds()

    const formattedMilliseconds = Math.floor(milliseconds / 10).toString().padStart(2, '0')

    const formattedHours = hours.toString().padStart(2, '0')
    const formattedMinutes = minutes.toString().padStart(2, '0')
    const formattedSeconds = seconds.toString().padStart(2, '0')

    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`
    
    document.getElementById('clock').innerText = timeString
}

setInterval(updateClock, 10)