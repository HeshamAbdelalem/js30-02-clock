let secondsHand = document.querySelector('.second-hand');
let minutesHand = document.querySelector('.minute-hand');
let hourHand = document.querySelector('.hour-hand');

function updateTime() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  secondsHand.style.transform = `rotate(${(seconds / 60) * 360 + 90}deg)`;
  minutesHand.style.transform = `rotate(${(minutes / 60) * 360 + 90}deg)`;
  hourHand.style.transform = `rotate(${(hour / 12) * 360 + 90}deg)`;
  console.log(hour, minutes, seconds);
}

setInterval(updateTime, 1000);
