var header = document.querySelector('header');
var sideBar = document.querySelector('aside');

header.addEventListener('click', function() {
  sideBar.classList.toggle('sidebar__isOpen');
});
