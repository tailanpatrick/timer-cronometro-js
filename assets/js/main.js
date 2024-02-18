const relogio = document.querySelector('.stopwatch');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const stopwatch = {
    hour: 0,
    minutes: 0,
    seconds: 0
}

let loop = null;

start.addEventListener('click', ()=>{
    loop = setInterval(startTimer, 1000);
    start.disabled = true
    start.innerText = 'Iniciar'
    pause.disabled = false;
    reset.disabled = false;
    relogio.style.color = 'var(--primary-color)'
});

reset.addEventListener('click', () => {
    clearInterval(loop);
    resetTimer(stopwatch);
    start.innerText = 'Iniciar'
    start.disabled = false;
    pause.disabled = true;
    reset.disabled = true;
    relogio.style.color = 'var(--primary-color)'
});

pause.addEventListener('click', ()=> {
    clearInterval(loop);
    relogio.style.color = 'var(--gray-disabled)';
    start.innerText = 'Continuar'
    start.disabled = false;
    pause.disabled = true;
});


const is59 = (valor) => valor === 59;

function zeroLeft(value) {
    const result = Number(value);
    if (result < 10) return `0${result}`
    return result.toString();
}

function startTimer(){
    if(is59(stopwatch.seconds)) {
        if(is59(stopwatch.minutes)){
            stopwatch.minutes = 0;
            stopwatch.seconds = 0;
            stopwatch.hour ++;
        }
        else {
            stopwatch.seconds = 0;
            stopwatch.minutes++;
        }
        
    } else {
        stopwatch.seconds++;
    }
    updateTimer(stopwatch);
}

function resetTimer(timer) { 
    timer.hour = 0;
    timer.minutes = 0;
    timer.seconds = 0;
    updateTimer(stopwatch)
}

function updateTimer(timer){
    const hour = zeroLeft(timer.hour);
    const minutes = zeroLeft(timer.minutes);
    const seconds = zeroLeft(timer.seconds);

    relogio.innerHTML = `${hour}:${minutes}:${seconds}`;
}


