import RestaurantInterior from './assets/images/restaurant-interior.jpeg';

export function createHome() {
    const container = document.createElement('div');
    container.classList.add('home-content');

    const welcome = document.createElement('h1');
    welcome.textContent = "Welcome to La Bella Cucina";
    
    const restaurantInterior = document.createElement('img');
    restaurantInterior.src = RestaurantInterior;
    restaurantInterior.alt = 'La Bella Cucina Restaurant Interior';
    
    const para1 = document.createElement('p');
    para1.textContent = "Experience the essence of Italian cuisine at La Bella Cucina. Our charming restaurant brings the flavors of Italy to your neighborhood, offering a warm and inviting atmosphere perfect for romantic dinners, family gatherings, or a night out with friends.";
    
    const para2 = document.createElement('p');
    para2.textContent = "At La Bella Cucina, we pride ourselves on using only the freshest, highest-quality ingredients to create authentic Italian dishes that will transport your taste buds straight to the heart of Italy. From our hand-made pasta to our wood-fired pizzas, every dish is crafted with passion and expertise by our talented chefs.";
    
    const para3 = document.createElement('p');
    para3.textContent = "Join us for an unforgettable dining experience and discover why La Bella Cucina has become a beloved destination for Italian food lovers. Buon appetito!";
    
    container.appendChild(welcome);
    container.appendChild(restaurantInterior);
    container.appendChild(para1);
    container.appendChild(para2);
    container.appendChild(para3);
    
    const content = document.querySelector('#content');
    content.appendChild(container);
}