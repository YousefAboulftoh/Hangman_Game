let letters = "abcdefghijklmnopqrstuvwxyz"
let lettersContainer = document.querySelector(`.letters`)
let arrayFromLetters = Array.from(letters)

arrayFromLetters.forEach(letter => {
    let span = document.createElement(`span`)
    span.classList.add(`genrate-letter`)
    let spanLetter = document.createTextNode(letter.toUpperCase())
    span.appendChild(spanLetter)
    lettersContainer.appendChild(span)
});

let objectData = {
    programming_Language: ["PHP", "JavaScript", "Python", "Go", "Java", "Swift", "Kotlin"],
    movie: ["Fast And Furious", "Killers", "Adventures", "Trazan", "King Kong"],
    countries: ["Egypt", "Germany", "Palstine", "Yamen", "Qatar"],
    famous_Actors: ["VinDiesel", "Walker", "Ahmed Ezz", "Yousef Mohamed"]
}

let wordFrom = Object.keys(objectData)
let randomNumberProperty = Math.floor(Math.random() * wordFrom.length)
let wordChossen = wordFrom[randomNumberProperty]
let randomNumberValue = Math.floor(Math.random() * objectData[wordChossen].length)
let value = objectData[wordChossen][randomNumberValue]
let valueArray = Array.from(value)
let guess = document.querySelector(`.guess-letters`)

let wordChossenContainer = document.querySelector(`.word-chossen`)
wordChossenContainer.innerHTML = wordChossen
let valueArrayLower = Array.from(value.toLowerCase())
valueArrayLower.forEach((ele) => {
    let emptySpan = document.createElement(`span`)
    emptySpan.className = `empty`;
    if (ele === " ") {
        emptySpan.classList.add("space")
    }
    guess.appendChild(emptySpan)
})
let guessSpans = document.querySelectorAll(`.guess-letters span`)
let counter = 0;
let helper = 0;
document.addEventListener(`click`, e => {
    let wrong = false;
    if (e.target.className === `genrate-letter`) {
        e.target.classList.add(`clicked`)
        let clicked = e.target.innerHTML.toLowerCase()
        valueArrayLower.forEach((word, index) => {
            if (clicked === word) {
                wrong = true
                guessSpans.forEach((span, spanIndex) => {
                    if (index == spanIndex) {
                        span.innerHTML = word
                        helper++;
                    }
                })
            }
        })
        if (wrong !== true) {
            counter++;
            document.querySelector(`.hangman-draw`).classList.add(`wrong-${counter}`)
        }
        if (counter === 8) {
            endGame()
        } else if (helper === valueArrayLower.length && counter !== 8) {
            congratulation()
        }
    }
})
document.addEventListener(`click`, e => {
    if (e.target.className === "again") {

        document.location.reload()
    }
})

function endGame() {
    let newELement = document.createElement(`div`)
    newELement.classList.add(`overlay`)
    let popup = document.createElement(`div`)
    popup.classList.add(`popup`)
    let textNode = document.createTextNode(`Game Over The Word Is ${value}`)
    popup.appendChild(textNode)
    document.body.append(newELement)
    document.body.append(popup)
    let close = document.createElement(`span`)
    close.classList.add(`again`)
    let closeNode = document.createTextNode(`Play Agian`)
    close.append(closeNode)
    popup.append(close)
}
function congratulation() {
    let newELement = document.createElement(`div`)
    newELement.classList.add(`overlay`)
    let popup = document.createElement(`div`)
    popup.classList.add(`popup`)
    let textNode = document.createTextNode(`Congartulation`)
    popup.appendChild(textNode)
    document.body.append(newELement)
    document.body.append(popup)
    let close = document.createElement(`span`)
    close.classList.add(`again`)
    let closeNode = document.createTextNode(`Play Agian`)
    close.append(closeNode)
    popup.append(close)
}

