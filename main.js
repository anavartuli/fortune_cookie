// variables
const openTheCookie = document.querySelector("#fortunecookie")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("#btnReset")

const fortune = [
    "A thing is not necessarily true because a man dies for it",
    "Believe nothing you hear, and only one half that you see",
    "With freedom, books, flowers, and the moon, who could not be happy?",
    "I am rooted, but I flow",
    "Happiness quite unshared can scarcely be called happiness; it has no taste",
]

let createFortune = document.querySelector('.fortune')


// events
openTheCookie.addEventListener('click', handleOpenCookie)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleEnter)

// opening the cookie
function handleOpenCookie() {
    toggleScreen()

    let selectFortune = Math.floor(Math.random()*(fortune.length))

    createFortune.innerText = fortune[selectFortune]

}

// get a new fortune
function handleResetClick(event){
    event.preventDefault()
    toggleScreen()
    
}

// screen changes
function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

// open cookie with enter key
function handleEnter(event){
    if(event.key == 'Enter' && screen2.classList.contains('hide')){
        handleResetClick(event)
    }
}