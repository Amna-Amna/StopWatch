let hour =  "0" + 0
let min =  "0" +0
let sec =  "0" +0
let msec = "0" + 0
let startTimer 


let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");
let resetBtn = document.querySelector(".reset-btn");

function msecUpdater(){
  msec++
 
  if (msec === 100){
    msec = 0
    sec ++    
  }
  if(sec === 60){
    sec = 0
    min++
  
  }
  if(min === 60){
    min = 0
    hour++
  }
  counting()
    console.log("start");
}
console.log(msec)

startBtn.addEventListener("click", function () {
  startTimer = setInterval(msecUpdater, 10);
 
});

clearInterval(startTimer)
stopBtn.addEventListener("click", function () {
  clearInterval(startTimer)
  console.log("stop");
});

resetBtn.addEventListener("click", function () {
  clearInterval(startTimer)
  hour = min = sec = msec ="0" +  0
  counting()
  console.log("reset");
});


function counting(){
document.querySelector(".millisecond").innerText = msec;
document.querySelector(".second").innerText = sec;
document.querySelector(".minute").innerText = min;
document.querySelector(".hour").innerText = hour;
}