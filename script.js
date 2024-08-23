let is24HourFormat = true
let isShowingDate = false
let isDarkMode = false

function updateClock() {

    if (isShowingDate){
        updateDate()
        return
    }

	const now = new Date()

	let hours = now.getHours()
	const minutes = now.getMinutes()
	const seconds = now.getSeconds()
	const milliseconds = now.getMilliseconds()

	let period = "";
	if (!is24HourFormat) {
		period = hours >= 12 ? "PM" : "AM"
		hours = hours % 12 || 12;
	}

	const formattedHours = hours.toString().padStart(2, "0")
	const formattedMinutes = minutes.toString().padStart(2, "0")
	const formattedSeconds = seconds.toString().padStart(2, "0")
	//const formattedMilliseconds = Math.floor(milliseconds / 10).toString().padStart(2, '0')

	const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${period}`; //:${formattedMilliseconds}

	document.getElementById("clock").innerText = timeString;
}

function updateDate() {

    const now = new Date()

    const day = now.getDay()
    const month = now.getMonth() + 1
    const year = now.getFullYear()

    const dateString = `${day.toString().padStart(2, "0")}/${month}/${year}`
    document.getElementById('clock').innerText = dateString
}

function toggleFormat() {
	is24HourFormat = !is24HourFormat;

	const button = document.getElementById("toggleFormat");
	button.innerText = is24HourFormat ? "Cambiar a 12h" : "Cambiar a 24h";
}

function toggleDisplay(){
    isShowingDate = !isShowingDate

    const button = document.getElementById("toggleDisplay")
    button.innerText = isShowingDate ? "Mostrar Reloj" : "Mostrar Fecha"

    if (isShowingDate){
        updateDate()
    } else  {
        updateClock()
    }
}

function toggleTheme(){
    isDarkMode = !isDarkMode

    const button = document.getElementById("toggleTheme")
    button.innerText = isDarkMode ? "🌞" : "🌛"

    const stylesheet = document.getElementById("themeStylesheet")
    stylesheet.href = isDarkMode ? "style-dark.css" : "style-light.css"
}

document.getElementById("toggleFormat").addEventListener("click", toggleFormat)
document.getElementById("toggleDisplay").addEventListener("click", toggleDisplay)
document.getElementById("toggleTheme").addEventListener("click", toggleTheme)

setInterval(updateClock, 1000);