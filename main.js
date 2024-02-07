// Setup 'tick' sound


//sounds
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio("sounds/tock.mp3");
const snare = new Audio('sounds/snare-drum.mp3')
const kick = new Audio("sounds/kick-drum.mp3")
const hiHat = new Audio("sounds/hi-hat.mp3")


//count variable
let count = 0
const countElement = document.createElement("p")
const countOnScreen = document.querySelector(".tip")
countOnScreen.appendChild(countElement)

//checkboxes
const differentDrums = document.querySelectorAll(".drum")

//slider
let speed = 600
let slider = document.querySelector(".slider")

slider.addEventListener("change",()=>{
   document.querySelector(".bpm").innerHTML = slider.value
   document.querySelector(".arm").style.animation = `
   tick ${1200 / slider.value}ms ease-in-out infinite`
   clearInterval(update)
   setInterval(() => {
   update() 
   }, 600 * slider.value);
})

//which interval does the sound play
//selection process for the time to play the sound
const timing = document.querySelectorAll(".when")
let timingObj = {}
for(let i = 0;i < timing.length;i++){
        timing[i].addEventListener("change",()=>{
            timingObj[timing[i].id] = timing[i].value
        })
}
// This function is called every 600ms
function update() {
    countElement.innerText = `${count%4+1}`
    count++
    for(let item in timingObj){
        console.log(timingObj[item] == count%4)
        if(timingObj[item]== (count-1)%4+1 &&
             document.querySelector(`#${item.slice(0,-5)}`).checked){
                console.log("hello")
          eval(`${item.slice(0,-5)}.play()`)
        }
    }
    if(document.querySelector("#metronome").checked){
        if(count%4 === 0){
            tock.play()
        } else {
            tick.play()
        }
    }
    // for(let selection of differentDrums){
    //     if(selection.checked){
    //         if(selection.value === "tick"){
    //             if(count % 4 === 0){
    //                tock.play()
    //             } else {
    //                tick.play()
    //             }
    //         } else {
    //             eval(`${selection.value}.play()`)
    //         }
    //     }
    // }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 1000);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
