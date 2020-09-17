let time = document.getElementById("time");
let green = document.getElementById("green");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
function trafficLights() {
  setTimeout(function () {
    green.style.opacity = 1;
    red.style.opacity = 0;
    yellow.style.opacity = 0;
    time.innerText = 15;
    time.style.color = "green";
  }, 0);

  setTimeout(function () {
    green.style.opacity = 0;
    red.style.opacity = 0;
    yellow.style.opacity = 1;
    time.innerText = 3;
    time.style.color = "yellow";
  }, 16000);
  setTimeout(function () {
    green.style.opacity = 0;
    red.style.opacity = 1;
    yellow.style.opacity = 0;
    time.innerText = 25;
    time.style.color = "red";
  }, 20000);
}
function countdown() {
  setInterval(function () {
    time.innerText -= 1;
  }, 1000);
}
countdown();
setInterval(function () {
  trafficLights();
}, 46000);
trafficLights();


//bài 3
let number = [1, 2, 3, 3, 5, 6, 2, 7, 9, 6];

function filterNumber(data) {
  return [...new Set(data)];
}
console.log(filterNumber(number));
