function Clock() {
  const currentDate = new Date()
  const secondsMove = currentDate.getSeconds() / 60
  const minutesMove = (secondsMove + currentDate.getMinutes()) / 60
  const hoursMove = (minutesMove + currentDate.getHours()) / 12
  
  Rotation(secondHand, secondsMove)
  Rotation(minuteHand, minutesMove)
  Rotation(hourHand, hoursMove)
}


const hourHand = document.querySelector('.hour')
const minuteHand = document.querySelector('.minute')
const secondHand = document.querySelector('.second')

function Rotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setInterval(Clock, 1000)

Clock()