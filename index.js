let counter = 0

document.addEventListener("DOMContentLoaded", function(){

    makeBoard()
    let board = document.querySelector('#board')
    board.addEventListener('click', (event) => {
        let clickedElement = event.target

        if (clickedElement.className === 'hole') {
            clickedElement.innerText = ''
            clickedElement.className = `${whoseColor(counter)}`
            counter++
        }
    })
})

function makeBoard() {
    let board = document.querySelector('#board')

    for (let i=0; i<7; i++) {
        for (let j=0; j<7; j++) {
            let tile = document.createElement('div')
            tile.className = 'hole'
            tile.id = `r${i}c${j}`
            tile.innerText = 'place'
            board.appendChild(tile)
        }
    }
}

function whoseColor(counter) {
    let color
    if (counter % 2 === 0) {
        color = 'red'
    } else {
        color = 'black'
    }
    return color
}

function gravityCheck(clickedElement,counter) {
    let finalElement

    let row = element.id[1]
    let col = element.id[3]
    
    if (row == 7) {
        finalElement = clickedElement
    } else {
        //while the one under it is empty or while it's over 7
        //check next
        //then have that be the out one
    }

}