function contactTab() {
    const contentDiv = document.getElementById('content')

    const h1 = document.createElement('h1')
    h1.textContent = 'Contact Us'

    const div1 = document.createElement('div')
    const h3 = document.createElement('h3')

    h3.textContent = `Mama Bear`
    div1.appendChild(h3)

    const paraDiv = document.createElement('p')
    paraDiv.classList.add('my-text')
    paraDiv.textContent = 'Chef\n555-555-5554'
    div1.appendChild(paraDiv)

    contentDiv.appendChild(h1)
    contentDiv.appendChild(div1)

    const div2 = document.createElement('div')
    const h3D = document.createElement('h3')
    h3D.textContent = 'Papa Juna'
    div2.appendChild(h3D)

    const para2Div = document.createElement('p')
    para2Div.classList.add('my-text')
    para2Div.textContent = 'Chef Luni\n567-776-5433'
    div2.appendChild(para2Div)

    contentDiv.appendChild(div2)
}

export { contactTab }