const nav = document.getElementById('nav');
const menu = document.getElementById('menuBurger');
const close = document.getElementById('close');

console.log(menu)
console.log(nav)

menu.addEventListener('click', () =>{
  nav.classList.add('nav__isActive')
  console.log('open')
})

close.addEventListener('click', () => {
  nav.classList.remove('nav__isActive')
})