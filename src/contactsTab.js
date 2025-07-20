//helper function to create contact items
function createContactItem(name, number) {
    console.log('heyya')
    const contactDiv = document.createElement('div')
    contactDiv.classList.add('contact-item-container')

    const nameEl = document.createElement('h3')
    nameEl.textContent = name
    nameEl.classList.add('contact-item-name')

    const contactEl = document.createElement('p')
    contactEl.textContent = number
    contactEl.classList.add('contact-item-number')

    contactDiv.appendChild(nameEl)
    contactDiv.appendChild(contactEl)

    return contactDiv
}

createContactItem()

function contactTab() {
    const contentDiv = document.getElementById('content')
    contentDiv.classList.add('content-div')

    const h1Contact = document.createElement('h1')
    h1Contact.textContent = 'Contact Us'
    h1Contact.classList.add('contact-item-header')

   const contact1 = createContactItem('Mama', '555-555-5576')
   const contact2 = createContactItem('Papa Bear', '546-776-4456')

    contentDiv.appendChild(h1Contact)
    contentDiv.appendChild(contact1)
    contentDiv.appendChild(contact2)
}

export { contactTab }