function initialPageload() {
    const contentDiv = document.getElementById('content');
    contentDiv.classList.add('content-div')

    
    const h1Welcome = document.createElement('h1')
    h1Welcome.textContent = `TEBBY'S PARADISE`
    h1Welcome.classList.add('h1-welcome')
    contentDiv.appendChild(h1Welcome)

    const paraWelcome = document.createElement('p')
    paraWelcome.textContent = `Welcome to Tebb'y Restaurant...the best place in town!`
    paraWelcome.classList.add('p-welcome')
    contentDiv.appendChild(paraWelcome)

    
}

export { initialPageload }