const container = document.getElementById('grid-container')

for (let i = 1; i <= 81; i++) {


    const grid = document.createElement('div')
    grid.classList.add('grid')
    grid.innerText = i
    container.appendChild(grid)
}


