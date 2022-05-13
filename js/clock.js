const clock = document.querySelectorAll("h5#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.forEach(x =>{
    x.innerText = `${hours}:${minutes}`
  });
    
}

getClock();
setInterval(getClock, 60000);