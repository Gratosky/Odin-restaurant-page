console.log("Hello, world!");


import { initialPageload } from "./initialPageload";
import { menuTabLoad } from "./menuTab";
import { contactTab } from "./contactsTab";
import "./styles.css";

initialPageload()


function clearTab() {
    const divContent = document.getElementById('content')

    divContent.textContent = ''
}

/*function tabSwitchButtons() {
    const home = document.getElementById('home')
    const menu = document.getElementById('menu')
    const contact = document.getElementById('contact')

    home.addEventListener('click', function() {
        clearTab()
        initialPageload()
    })
    menu.addEventListener('click', function() {
        clearTab()
        menuTabLoad()
    })
    contact.addEventListener('click', function() {
        clearTab()
        contactTab()
    })
}*/

const tabs = [
    {id: 'home', loadFunction: initialPageload},
    { id: 'menu', loadFunction: menuTabLoad},
    { id: 'contact', loadFunction: contactTab}
];

function tabSwitchButtons() {
   tabs.forEach(tab => {
    const button = document.getElementById(tab.id)

    if(button) {
        button.addEventListener('click', () => {
            clearTab(),
            tab.loadFunction()
        })
    } else {
            // Optional: Log a warning if a button with the specified ID is not found
            console.warn(`Button with ID '${tab.id}' not found in the DOM.`);
        }
   })
}

tabSwitchButtons()
console.log('Welcome to the restaurant page!')