let blinkerOn = false;
let blinkerInterval = setInterval(() => {
    if (blinkerOn) {
        console.log("Blinker off");
        blinkerOn = false;
    } else {
        console.log("Blinked on");
        blinkerOn = true;
    }
}, 500);
setTimeout(() => {
    clearInterval(blinkerInterval);
    console.log("STOP!!!")
}, 2500);