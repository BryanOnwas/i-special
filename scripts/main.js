var sideBar = document.querySelector('.sidebar');
var hamburger = document.querySelector('.hamburger');
var modal = document.querySelector('.container');
var scroll = document.querySelector('body');
var btn = document.querySelector('.btn');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('is-active');
  sideBar.classList.toggle('sidebar__open');
  modal.classList.toggle('container__active');
  scroll.classList.toggle('body__active');
});

window.addEventListener('click', function(event) {
  if (event.target.id === 'modal--space') {
    hamburger.classList.remove('is-active');
    sideBar.classList.remove('sidebar__open');
    modal.classList.remove('container__active');
    scroll.classList.remove('body__active');
  }
});
