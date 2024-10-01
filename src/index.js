import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from './contact';
import RestaurantInterior from './assets/images/restaurant-interior.jpeg';
import './styles.css';


// Create main structure
const content = document.createElement('div');
content.id = 'content';

// Create nav
const nav = document.createElement('nav');
nav.classList.add('nav-tabs');

const homeBtn = document.createElement('button');
homeBtn.textContent = 'Home';
const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
const contactBtn = document.createElement('button');
contactBtn.textContent = 'Contact';

nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactBtn);

// Append elements to body in correct order
document.body.appendChild(nav);
document.body.appendChild(content);

// Tab switching logic
function clearContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function switchTab(createFunc) {
    clearContent();
    createFunc();
}

// Event listeners
homeBtn.addEventListener('click', () => switchTab(createHome));
menuBtn.addEventListener('click', () => switchTab(createMenu));
contactBtn.addEventListener('click', () => switchTab(createContact));

// Initial load
createHome();