var sideBar = document.querySelector('.sidebar');
var hamburger = document.querySelector('.hamburger');
var modal = document.querySelector('.container');
var scroll = document.querySelector('body');
var test = document.querySelector('.test');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('is-active');
  sideBar.classList.toggle('sidebar__open');
  modal.classList.toggle('container__active');
  scroll.classList.toggle('body__active');
});

window.addEventListener('click', function(event) {
  if (event.target.id === 'modal') {
    hamburger.classList.remove('is-active');
    sideBar.classList.remove('sidebar__open');
    modal.classList.remove('container__active');
    scroll.classList.remove('body__active');
  }
});

// ------------------------------------------------

// function scrollTo(element, to = 0, duration = 500) {
//   const start = element.scrollTop;
//   const change = to - start;
//   const increment = 20;
//   let currentTime = 0;

//   const animateScroll = () => {
//     currentTime += increment;

//     const val = Math.easeInOutQuad(currentTime, start, change, duration);

//     element.scrollTop = val;

//     if (currentTime < duration) {
//       setTimeout(animateScroll, increment);
//     }
//   };

//   animateScroll();
// }

// Math.easeInOutQuad = function(t, b, c, d) {
//   // t = current time
//   // b = start value
//   // c = change in value
//   // d = duration
//   t /= d / 2;
//   if (t < 1) return (c / 2) * t * t + b;
//   t--;
//   return (-c / 2) * (t * (t - 2) - 1) + b;
// };

// test.addEventListener('click', function() {
//   scrollTo(document.documentElement);
// });


'use strict';

function scrollTo(element) {
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

  var start = element.scrollTop;
  var change = to - start;
  var increment = 20;
  var currentTime = 0;

  var animateScroll = function animateScroll() {
    currentTime += increment;

    var val = Math.easeInOutQuad(currentTime, start, change, duration);

    element.scrollTop = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  // t = current time
  // b = start value
  // c = change in value
  // d = duration
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

test.addEventListener('click', function () {
  scrollTo(document.documentElement);
});

//--------------------

function detectBrowser(window) {
  const {navigator} = window;

  // Returned result object.
  const result = {browser: null, version: null};

  // Fail early if it's not a browser
  if (typeof window === 'undefined' || !window.navigator) {
    result.browser = 'Not a browser.';
    return result;
  }

  if (navigator.mozGetUserMedia) { // Firefox.
    result.browser = 'firefox';
    result.version = extractVersion(navigator.userAgent,
        /Firefox\/(\d+)\./, 1);
  } else if (navigator.webkitGetUserMedia) {
    // Chrome, Chromium, Webview, Opera.
    // Version matches Chrome/WebRTC version.
    result.browser = 'chrome';
    result.version = extractVersion(navigator.userAgent,
        /Chrom(e|ium)\/(\d+)\./, 2);
  } else if (navigator.mediaDevices &&
      navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) { // Edge.
    result.browser = 'edge';
    result.version = extractVersion(navigator.userAgent,
        /Edge\/(\d+).(\d+)$/, 2);
  } else if (window.RTCPeerConnection &&
      navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) { // Safari.
    result.browser = 'safari';
    result.version = extractVersion(navigator.userAgent,
        /AppleWebKit\/(\d+)\./, 1);
  } else { // Default fallthrough: not supported.
    result.browser = 'Not a supported browser.';
    return result;
  }
}