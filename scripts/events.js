// Inside click functionally (in case of modal/sidebar outside clicks)
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('is-active');
  sideBar.classList.toggle('sidebar__open');
  modal.classList.toggle('container__active');
  bar.classList.toggle('body__active');
});

// Outside click functionally (in case of modal/sidebar outside clicks)
window.addEventListener('click', function(event) {
  if (event.target.id === 'modal--space') {
    hamburger.classList.remove('is-active');
    sideBar.classList.remove('sidebar__open');
    modal.classList.remove('container__active');
    bar.classList.remove('body__active');
  }
});

// Scroll-to-top functionally
test.addEventListener('click', () => {
  scrollIt(0, 300, 'easeOutQuad');
  window.removeEventListener('scroll', testing);
  setTimeout(function() {
    window.addEventListener('scroll', testing);
  }, 300);
});

// Change header opacity to 100% when not on top
// Change header opacity to 90% when on top
window.addEventListener('scroll', testing);

function testing() {
  if (window.scrollY > 0) {
    head.style.opacity = '1';
    test.style.right = '0';
  } else if (window.scrollY === 0) {
    head.style.opacity = '0.9';
    test.style.right = '-100px';
  }
}
