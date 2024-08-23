// Raccolta dati dal DOM
const container = document.getElementById('grid-container')

// Al click del pulsante play genero 100 caselle
function play() {
    if (container.querySelectorAll('.grid').length >= 100) {
        return
    }

    for (let i = 1; i <= 100; i++) {
        const grid = document.createElement('div')
        grid.classList.add('grid', 'grid-100')
        grid.innerText = i
        container.appendChild(grid)
    }    
}

