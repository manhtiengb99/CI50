let time = document.getElementById("time");
var green = document.getElementsByClassName("green")[0];
var red = document.getElementsByClassName("red")[0];
var yellow = document.getElementsByClassName("yellow")[0];
function trafficLights() {
  setTimeout(function () {
    green.style.opacity = 1;
    red.style.opacity = 0.2;
    yellow.style.opacity = 0.2;
    time.innerText = 10;
    time.style.color = "green";
  }, 0);

  setTimeout(function () {
    green.style.opacity = 0.2;
    red.style.opacity = 0.2;
    yellow.style.opacity = 1;
    time.innerText = 2;
    time.style.color = "yellow";
  }, 11000);
  setTimeout(function () {
    green.style.opacity = 0.2;
    red.style.opacity = 1;
    yellow.style.opacity = 0.2;
    time.innerText = 20;
    time.style.color = "red";
  }, 14000);
}
function countdown() {
  setInterval(function () {
    time.innerText -= 1;
  }, 1000);
}
countdown();
setInterval(function () {
  trafficLights();
}, 35000);
trafficLights();
