
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const btnStart = document.querySelector('[data-start]')
  const btnStop = document.querySelector('[data-stop]')
  
  let timerId = null;
   
  
  btnStart.addEventListener("click", () => {
    timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor()
        
       
         }, 1000,);
  });
   if (timerId !== null) {
            btnStart.setAttribute('disabled', true)       
        }
  
  btnStop.addEventListener('click', function onBtnClick() {
      clearInterval(timerId)
       if(btnStart.hasAttribute('disabled', true)) {
            btnStart.removeAttribute('disabled', true)       
        }
  })