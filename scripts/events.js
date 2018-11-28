hamburger.addEventListener('click', iconClick);
window.addEventListener('click', outsideClick);
test.addEventListener('click', scrollTop);
window.addEventListener('scroll', headTop);
window.addEventListener('scroll', btnTop);

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

// Scroll-to-top functionally
function scrollTop() {
  scrollIt(0, 300, 'easeOutQuad');
  window.removeEventListener('scroll', headTop);
  setTimeout(function() {
    window.addEventListener('scroll', headTop);
  }, 300);
}

// Change header opacity when scrolled away from top
// Change header opacity to 100% when not on top
// Change header opacity to 90% when on top
function headTop() {
  if (window.scrollY > 0) {
    head.style.opacity = '1';
  } else if (window.scrollY === 0) {
    head.style.opacity = '0.9';
  }
}

// Change which Y-position the top button is visible/invisible
function btnTop() {
  if (window.scrollY > 0) {
    test.style.right = '0';
  } else if (window.scrollY === 0) {
    test.style.right = '-100px';
  }
}
