let modes = {
  work: 25,
  shortBreak: 5,
  longBreak: 15,
}
let pauseState = false;

//Simply making a countdown, we'll introduce user interraction later.

function setTimer (mode){
  let duration = modes[mode] * 60; // Converting the interval to seconds...
  console.log(`Timer set for: ${duration} at ${mode}`); // Log for debugging
  let timerID = setInterval(() => { // We're setting the interval value to timerID so we can suspend and clear it
    if(duration >= 0){
      if(pauseState == false){
        duration--;
        writeTimer(duration);
        console.log(`Time left: ${duration} seconds.`);
      }
    }
    else{
      clearInterval(timerID); // If the timer has already finished, just clear the interval, freeing the worker.
    }
  }, 1000); // loop each second (this is in miliseconds)
}

function pauseTimer (){
  // pauseTimer == false ? pauseTimer = true : pauseTimer = false;
  // Considering we're not idiots, we can just flip the bool using !(bool)
  pauseState = !pauseState; // For the context this was not the first thing that came to mind.
  console.log("Attempting to pause timer.");
}

function writeTimer(timeLeft) {
  // The idea is to write over the ID of the button called "countdown"
  let ss =  Math.floor(timeLeft / 60)
  let mm = (timeLeft % 60) < 10 ? '0' + timeLeft % 60 : timeLeft % 60 
  let time = ss + ":" + mm;
  // Since we're calculating the moduo of timeLeft, it's more than likely that it ends up being a single digit instead of two.
  
  document.getElementById("countdown").innerHTML = `${time}`
}
