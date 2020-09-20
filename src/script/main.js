const nav = document.getElementById('nav');
const menu = document.getElementById('menuBurger');
const close = document.getElementById('close');

const $leftArrow = document.getElementById('leftArrow');
const $rightArrow = document.getElementById('rightArrow');

const $headContent = document.querySelectorAll('.head__content')
console.log($headContent)

console.log(window.screen.width)

$rightArrow.addEventListener('click', () => {
  $headContent.forEach(element => {
    return element.classList.add('up')
  });
})

$leftArrow.addEventListener('click', () => {
  $headContent.forEach(element => {
    return element.classList.remove('up')
  });
})

menu.addEventListener('click', () =>{
  nav.classList.add('nav__isActive')
})

close.addEventListener('click', () => {
  nav.classList.remove('nav__isActive')
})