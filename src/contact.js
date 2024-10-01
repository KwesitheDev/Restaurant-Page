// contact.js
export function createContact() {
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = "Contact Us";
    
    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `
        <p><strong>Address:</strong> 123 Pasta Street, Foodville, FD 12345</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> info@labellacucina.com</p>
        <p><strong>Hours:</strong><br>
        Monday - Thursday: 11:00 AM - 9:00 PM<br>
        Friday - Saturday: 11:00 AM - 10:00 PM<br>
        Sunday: 12:00 PM - 8:00 PM</p>
    `;
    
    content.appendChild(contactTitle);
    content.appendChild(contactInfo);
}
