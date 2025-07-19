function initialPageload() {
    const contentDiv = document.getElementById('content');

    
    const h1 = document.createElement('h1')
    h1.textContent = `TEBBY'S PARADISE`
    contentDiv.appendChild(h1)

    const para = document.createElement('p')
    para.textContent = `The best place in town!`
    contentDiv.appendChild(para)

}

export { initialPageload }