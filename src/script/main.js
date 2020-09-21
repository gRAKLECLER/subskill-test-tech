const nav = document.getElementById('nav');
const menu = document.getElementById('menuBurger');
const close = document.getElementById('close');

const $leftArrow = document.getElementById('leftArrow');
const $rightArrow = document.getElementById('rightArrow');


menu.addEventListener('click', () =>{
  nav.classList.add('nav__isActive')
})

close.addEventListener('click', () => {
  nav.classList.remove('nav__isActive')
})