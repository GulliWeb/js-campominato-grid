// Raccolta dati dal DOM
const container = document.getElementById('grid-container')
// Al click del pulsante play genero 100 caselle
function play() {
    if (container.querySelectorAll('.grid').length >= 100) {
        // location.reload()
        return
    }

    for (let i = 1; i <= 100; i++) {
        const grid = document.createElement('div')
        grid.classList.add('grid', 'grid-100')
        grid.innerText = i
        container.appendChild(grid)

        grid.addEventListener('click' ,function() {
            cellClick(grid, i)
        })
    }    
    document.querySelector('footer').classList.add('d-visible')
}

// Al click di ogni cella stampiamo in console il numero di essa e coloriamola di azzurro
function cellClick(grid, index) {
    grid.classList.add('azure-click', 'click')   
    console.log(index) 
}