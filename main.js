// // Setup 'tick' sound


// //sounds
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio("sounds/tock.mp3");
const snare = new Audio('sounds/snare-drum.mp3')
const kick = new Audio("sounds/kick-drum.mp3")
const hiHat = new Audio("sounds/hi-hat.mp3")


// //count variable
// let count = 0
// const countElement = document.createElement("p")
// const countOnScreen = document.querySelector(".tip")
// countOnScreen.appendChild(countElement)

// //checkboxes
// const differentDrums = document.querySelectorAll(".drum")

// //slider
// // let speed = 600
// // let slider = document.querySelector(".slider")

// // slider.addEventListener("change",()=>{
// //    document.querySelector(".bpm").innerHTML = slider.value
// //    document.querySelector(".arm").style.animation = `
// //    tick ${1200 / slider.value}ms ease-in-out infinite`
// //    clearInterval(update)
// //    setInterval(() => {
// //    update() 
// //    }, 600 * slider.value);
// // })

// //which interval does the sound play
// //selection process for the time to play the sound
// const timing = document.querySelectorAll(".when")
// let timingObj = {}
// for(let i = 0;i < timing.length;i++){
//         timing[i].addEventListener("change",()=>{
//             timingObj[timing[i].id] = timing[i].value
//         })
// }
// // This function is called every 600ms
// function update() {
//     // countElement.innerText = `${count%4+1}`
//     // count++
//     // for(let item in timingObj){
//     //     console.log(timingObj[item] == count%4)
//     //     if(timingObj[item]== (count-1)%4+1 &&
//     //          document.querySelector(`#${item.slice(0,-5)}`).checked){
//     //             console.log("hello")
//     //       eval(`${item.slice(0,-5)}.play()`)
//     //     }
//     // }
//     // if(document.querySelector("#metronome").checked){
//     //     if(count%4 === 0){
//     //         tock.play()
//     //     } else {
//     //         tick.play()
//     //     }
//     // }
//     for(let selection of differentDrums){
//         if(selection.checked){
//             if(selection.value === "tick"){
//                 if(count % 4 === 0){
//                    tock.play()
//                 } else {
//                    tick.play()
//                 }
//             } else {
//                 eval(`${selection.value}.play()`)
//             }
//         }
//     }
// }

// // This function sets up update() to be called every 600ms
// function setupUpdate() {
    //     setInterval(update, 1000);
    // }
    
    // // Call setupUpdate() once after 300ms
    // setTimeout(setupUpdate, 300);
let count = 0
let timer = 0
let yokai
let bpm = 60




const noteButtonsContainer = document.querySelectorAll(".buttons")
const addNoteButtons = document.querySelector("#addButton")
const deleteNoteButtons = document.querySelector("#deleteButton")
const startButton = document.querySelector("#startButton")
const stopButton = document.getElementById("stopButton")
const slider = document.getElementById("slider")
const sliderValue = document.querySelector(".sliderRange")
slider.addEventListener("change",()=>{
    bpm = slider.value
    sliderValue.innerText = `${bpm} bpm(beats per minute)`
})
// const counter = document.querySelector("#countstep")

addNoteButtons.addEventListener("click",(event)=>{
    event.preventDefault()
    count++
    // let newCountElement = document.createElement("p")
    // newCountElement.innerHTML = count.toString()
    // counter.appendChild(newCountElement)
    for(let newItem of noteButtonsContainer){
        let newElement = document.createElement("input")
        // newElement.innerHTML = '<input type="checkbox">'
        newElement.type = "checkbox"
        newItem.appendChild(newElement)
    }
})
//delete button is functional
deleteNoteButtons.addEventListener("click",(event)=>{
    event.preventDefault()
    if(count > 0){
        count--
    for(let soundCheckBoxesContainer of noteButtonsContainer){
        const arr = soundCheckBoxesContainer.children
        arr[arr.length-1]
        soundCheckBoxesContainer.removeChild(arr[arr.length-1])
    }
}
})
//need some way of checking for how many buttons are checked
//playing the sounds
startButton.addEventListener("click",(event)=>{
    event.preventDefault()
    if(count > 0){
    yokai = setInterval(run, 60/bpm*1000);
    yokai
    }
})
function run (){
    for(let buttons of noteButtonsContainer){
        const arr = buttons.children
            if(arr[timer].checked){
                eval(`${buttons.id.slice(0,-7)}.play()`)
            }
    }
    timer ++
    if(timer >= count){
        timer = 0
    }
}

stopButton.addEventListener("click",(event)=>{
    event.preventDefault()
    clearInterval(yokai)
})