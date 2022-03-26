// Global Constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern;
var buttonCt = 4;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes = 0;
var mistakeLimit = 3;
var time = 0;
var tInterval;

function startGame(){
  //initialize game variables
  timeReset();
  clueHoldTime = 1000;
  generatePattern();
  progress = 0;
  mistakes = 0;
  mistakeLimit = document.getElementById("mistakeCt").value;
  document.getElementById('mistakeCt').setAttribute("disabled", true);
  document.getElementById('buttonCt').setAttribute("disabled", true);
  document.getElementById('patternLen').setAttribute("disabled", true);
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById('mistakes').textContent = 0;
  console.log(pattern);

  playClueSequence();
}
function stopGame(){
  //initialize game variables
  gamePlaying = false;
  timeReset();
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById('mistakes').textContent = 0;
  document.getElementById('mistakeCt').removeAttribute("disabled");
  document.getElementById('buttonCt').removeAttribute("disabled");
  document.getElementById('patternLen').removeAttribute("disabled");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function generatePattern(){
  var len = document.getElementById('patternLen').value;
  pattern = new Array();
  console.log(len);
  while(pattern.length < len){
    var temp = Math.floor(Math.random() * (buttonCt)) + 1;
    pattern.push(temp);
    console.log("added temp");
  }
  console.log(pattern);
}

function guess(btn){
  document.getElementById('button' + btn).blur();
  //console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] != btn){
    mistakes++;
    document.getElementById('mistakes').textContent = mistakes;
    
    if(mistakes < mistakeLimit){
      timeReset();
      playClueSequence();
    }
    else{
      loseGame();
    }
  }
  else if(guessCounter < progress){
    guessCounter++;
  }
  else if(progress < pattern.length-1){
    progress++;
    clueHoldTime *= 0.65;
    timeReset();
    playClueSequence();
  }
  else{
    winGame();
  }
}

function changeButtonCt(){
  buttonCt = document.getElementById("buttonCt").value;
  
  if(buttonCt == 4){
      document.getElementById("button5").classList.add("hidden");
      document.getElementById("button6").classList.add("hidden");
    }
    else if(buttonCt == 5){
      document.getElementById("button5").classList.remove("hidden");
      document.getElementById("button6").classList.add("hidden");
    }
    else{
      document.getElementById("button5").classList.remove("hidden");
      document.getElementById("button6").classList.remove("hidden");
    }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  console.log("start at " + (delay-333));
  setTimeout(function(){
    tInterval = setInterval(timeUpdate, 100);
  }, (delay-333));
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
  document.getElementById("img"+btn).classList.remove("hidden");
  playAudio(btn);
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
  document.getElementById("img"+btn).classList.add("hidden");
}

function timeReset(){
  time = 8;
  document.getElementById("timer").textContent = "Time remaining: ";
  clearInterval(tInterval);
}
function timeUpdate(){
  time-= 0.1;
  document.getElementById("timer").textContent = "Time remaining: " + time.toFixed(1);
  if(time <= 0){
    document.getElementById("timer").textContent = "Time remaining: 0 Out of Time!";
    loseGame();
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 146.4,
  2: 196,
  3: 220,
  4: 329.6,
  5: 440,
  6: 523
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone(btn)
  },len)
}
function playAudio(btn){
  document.getElementById("audio" + btn).currentTime = 0;
  document.getElementById("audio" + btn).play();
  document.getElementById("img"+btn).classList.remove("hidden");
}
function stopAudio(btn){
  document.getElementById("audio" + btn).pause();
  document.getElementById("audio" + btn).currentTime = 0;
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
    document.getElementById("img"+btn).classList.remove("hidden");
  }
}
function stopTone(btn){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
  document.getElementById("img"+btn).classList.add("hidden");
  console.log("stopping");
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)