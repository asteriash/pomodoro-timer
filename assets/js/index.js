let timerActive = false; //Flag to simply check if there's a timer already running
// No point running two, right?
let modes = { //modes are defined in seconds here
  work: 25*60,
  shortBreak: 5*60,
  longBreak: 15*60
};s.


const changeMode = (mode) => {
  if(timerActive == true){
    console.error("There's a timer already running! Aborting!!");
    return;
  };
  if(!(mode in modes)){
    console.error(`Unable to find mode: ${mode}`);
    return;
  };
  console.log(`Currently set: ${mode}`);
  setTimer(modes[mode]);
}

const setTimer = (duration) => {
  console.log(`Duration has been set to: ${duration}`);
  let currentTime = Math.floor(Date.now() / 1000);
  console.log(`Setting the current time to ${currentTime}`);
  let expectedTime = currentTime + duration / 1000;
  console.log(`Expected time for this to end: ${expectedTime}`);
  let failsafeFunction = () => {
  if(currentTime < expectedTime){
    currentTime++;
    console.log(`Current time: ${currentTime}`);
  }
  else{
    console.log("The timer should have ended by now, stopping...");
    return;
  }
    setInterval(failsafeFunction, 1000);
  }
}// This is pretty much the failsafe, if at any point 
