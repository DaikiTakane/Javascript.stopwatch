'use strict';

  {
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    
    let startTime;
    let timeoutId;
    
    function countUp() {
        const d = new Date (Date.now() - startTime);
        const m = String(d.getMinutes()).padStart(2, '0');
        const s = String(d.getSeconds()).padStart(2, '0');
        const ms = String(d.getMilliseconds()).slice(0,-2);
        timer.textContent = `${m}:${s}.${ms}`;
        
        timeoutId = setTimeout(() => {
            countUp();
        }, 10);
    }
    
    start.addEventListener('mousedown', () => {
        startTime = Date.now();
        countUp();
    });
    
    stop.addEventListener('mousedown', () => {
        clearTimeout(timeoutId)
    });
    
    reset.addEventListener('mousedown', () => {
        timer.textContent = '00:00.0'
    });
  }