hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('is-active');
  sideBar.classList.toggle('sidebar__open');
  modal.classList.toggle('container__active');
  bar.classList.toggle('body__active');
});

window.addEventListener('click', function(event) {
  if (event.target.id === 'modal--space') {
    hamburger.classList.remove('is-active');
    sideBar.classList.remove('sidebar__open');
    modal.classList.remove('container__active');
    bar.classList.remove('body__active');
  }
});

test.addEventListener('click', () => {
  scrollIt(0, 300, 'easeOutQuad');
});
