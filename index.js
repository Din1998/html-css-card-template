console.log('hellow')

const hamBargerMenu = document.querySelector('.ham__menu');

hamBargerMenu.onclick = function() {
  navBar = document.querySelector('.nav_item');
  navBar.classList.toggle('active')
}