var sideBar = document.querySelector('.sidebar');
var hamburger = document.querySelector('.hamburger');
var modal = document.querySelector('.container');
var bar = document.querySelector('body');
var test = document.querySelector('.test');
var head = document.querySelector('header');

hamburger.addEventListener('click', iconClick);
window.addEventListener('click', outsideClick);

// Hamburger icon click functionally
function iconClick() {
  hamburger.classList.toggle('is-active');
  sideBar.classList.toggle('sidebar__open');
  modal.classList.toggle('container__active');
  bar.classList.toggle('body__active');
}

// Outside click functionally (in case of modal/sidebar outside clicks)
// Listen for outside clicks
function outsideClick(event) {
  if (event.target.id === 'modal--space') {
    hamburger.classList.remove('is-active');
    sideBar.classList.remove('sidebar__open');
    modal.classList.remove('container__active');
    bar.classList.remove('body__active');
  }
}
