let modes = {
  work: 25,
  shortBreak: 5,
  longBreak: 15,
}

//Simply making a countdown, we'll introduce user interraction later.

function setTimer (mode){
  let duration = modes[mode] * 60; // Converting the interval to seconds...
  console.log(`Timer set for: ${duration} at ${mode}`); // Log for debugging
  let timerID = setInterval(() => { // We're setting the interval value to timerID so we can suspend and clear it
    if(duration >= 0){
      duration--;
      console.log(`Time left: ${duration} seconds.`);
    }
    else{
      clearInterval(timerID); // If the timer has already finished, just clear the interval, freeing the worker.
    }
  }, 1000)
}
