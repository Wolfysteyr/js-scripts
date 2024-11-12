// 1. solis: izveido jaunu elementu
const newElement = document.createElement('div');

// 2. solis: iestata saturu vai atribūtus
newElement.textContent = 'Sveika, pasaule!';
newElement.className = 'new-class';

// 3. solis: pievieno DOM
document.body.appendChild(newElement);

// Ievieto HTML pirms elementa beigām
const parentElement = document.getElementById('container');
parentElement.insertAdjacentHTML('beforeend', 'Jauns Elements');