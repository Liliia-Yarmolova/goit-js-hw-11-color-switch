import { colors } from "./colors.js"

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body')
}

let intervalId = null;
let isActive = false;

refs.startBtn.addEventListener('click', start);
refs.stopBtn.addEventListener('click', stop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



 function start(){
    if (isActive) {
      return;
    }

    isActive = true;

  intervalId = setInterval(() => {
      let index = randomIntegerFromInterval(0, 5)
      const currentColor = colors[index]
      refs.body.style.background = currentColor
    console.log(currentColor, index)
    }, 1000);
}
  
function stop() {
    clearInterval(intervalId);
    isActive = false;
    
}

