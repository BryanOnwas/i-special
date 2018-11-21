var header = document.querySelector('header');
var sideBar = document.querySelector('aside');

  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });

header.addEventListener('click', function() {
  sideBar.classList.toggle('sidebar__open');
});
