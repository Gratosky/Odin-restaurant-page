function menuTabLoad() {
    const contentDiv = document.getElementById('content')

    const h1 = document.createElement('h1')
    h1.textContent = `MENU`

    const h2 = document.createElement('h2')
    h2.textContent = `Beverages`

    const divPara = document.createElement('div')

    const divHead = document.createElement('h3')
    divHead.textContent = `Tea`
    divPara.appendChild(divHead)

    const para1 = document.createElement('p')
    para1.textContent = `Warm breakfast`
    divPara.appendChild(para1)

    contentDiv.appendChild(h1)
    contentDiv.appendChild(h2)
    contentDiv.appendChild(divPara)

}

export { menuTabLoad }