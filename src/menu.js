export function createMenu() {
    const container = document.createElement('div');
    container.classList.add('menu-content');

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Our Menu";
    
    const menuItems = [
        {category: "Antipasti", items: [
            {name: "Bruschetta", price: "$8", description: "Grilled bread rubbed with garlic and topped with tomatoes and olive oil"},
            {name: "Caprese", price: "$10", description: "Fresh mozzarella, tomatoes, and sweet basil"}
        ]},
        {category: "Pasta", items: [
            {name: "Spaghetti Carbonara", price: "$16", description: "Spaghetti with eggs, cheese, pancetta, and black pepper"},
            {name: "Fettuccine Alfredo", price: "$15", description: "Fettuccine tossed with butter and parmesan cheese"}
        ]},
        {category: "Main Courses", items: [
            {name: "Osso Buco", price: "$28", description: "Veal shanks braised with vegetables, white wine and broth"},
            {name: "Bistecca alla Fiorentina", price: "$35", description: "Grilled T-bone steak with rosemary and arugula"}
        ]}
    ];
    
    container.appendChild(menuTitle);
    
    menuItems.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.classList.add('menu-category');
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.category;
        categorySection.appendChild(categoryTitle);
        
        category.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');
            
            const itemHeader = document.createElement('div');
            itemHeader.classList.add('menu-item-header');
            
            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            
            const itemPrice = document.createElement('span');
            itemPrice.classList.add('menu-item-price');
            itemPrice.textContent = item.price;
            
            itemHeader.appendChild(itemName);
            itemHeader.appendChild(itemPrice);
            
            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            
            itemDiv.appendChild(itemHeader);
            itemDiv.appendChild(itemDescription);
            categorySection.appendChild(itemDiv);
        });
        
        container.appendChild(categorySection);
    });
    
    const content = document.querySelector('#content');
    content.appendChild(container);
}