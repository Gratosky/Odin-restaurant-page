//helper function to create menu items
function createMenuItem(name, description) {
    const itemDiv = document.createElement('div')
    itemDiv.classList.add('menu-item-container')

    const nameEl = document.createElement('h3')
    nameEl.textContent = name
    nameEl.classList.add('menu-item-name')

    const descEl = document.createElement('p')
    descEl.textContent = description
    descEl.classList.add('menu-item-description')

    itemDiv.appendChild(nameEl)
    itemDiv.appendChild(descEl)

    return itemDiv
}

function menuTabLoad() {
    const contentDiv = document.getElementById('content')
    contentDiv.classList.add('content-div')

    const h1 = document.createElement('h1')
    h1.textContent = `MENU`
    h1.classList.add('menu-title')

    const h2Beverages = document.createElement('h2')
    h2Beverages.textContent = `Beverages`
    h2Beverages.classList.add('menu-section-header')

   const h2Food = document.createElement('h2')
   h2Food.textContent = `Food`
   h2Food.classList.add('menu-section-header')

   //Create individual menu items using helper
   const teaItem = createMenuItem('Tea', 'Warm breakfast blend')
   const coffeeItem = createMenuItem('Coffee', 'Freshly brewed artisan coffee')
   const sandwichItem = createMenuItem('Sandwich', 'Ham, cheese, lettuce and tomato or sourdough.')
   const saladItem = createMenuItem('Salad', 'Mixed greens with vinaigrette dressing')

    contentDiv.appendChild(h1)
    contentDiv.appendChild(h2Beverages)
    contentDiv.appendChild(teaItem)
    contentDiv.appendChild(coffeeItem)
    contentDiv.appendChild(h2Food)
    contentDiv.appendChild(sandwichItem)
    contentDiv.appendChild(saladItem)

}

export { menuTabLoad }