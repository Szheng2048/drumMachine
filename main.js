// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio("sounds/tock.mp3");
let count = 0
const countElement = document.createElement("p")
const countOnScreen = document.querySelector(".tip")
countOnScreen.appendChild(countElement)
// This function is called every 600ms
function update() {
    // Play the 'tick' sound
    count ++
    if(count % 4 === 0){
        tock.play()
        countElement.innerText = 4
    } else {
        tick.play()
        countElement.innerText = `${count%4}`
    }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
