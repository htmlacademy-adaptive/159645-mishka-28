// Для закрытия/открытия бургерного меню

const mainHeaderToggle = document.querySelector('.main-header__toggle');
const mainHeader = document.querySelector('.main-header');

mainHeader.classList.remove('no-js');

mainHeaderToggle.addEventListener('click', () => mainHeader.classList.toggle('is-open'));
