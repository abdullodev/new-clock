function showClock() {
  const secBox = document.getElementById("secund");
  const minBox = document.getElementById("min");
  const hourBox = document.getElementById("hour");

  let date = new Date();

  const secund = date.getSeconds();
  const min = date.getMinutes();
  const hour = date.getHours();

  secBox.style.transform = `rotate(${secund * 6}deg)`;
  minBox.style.transform = `rotate(${min * 6}deg)`;
  hourBox.style.transform = `rotate(${hour * 30 + min / 2}deg)`;
}

showClock();

setInterval(showClock, 1000);
