window.onscroll = function() {
  myFunction();
};

var navbar = document.getElementById("detail-nav");
var mapbox = document.getElementById("map-box");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 400) {
    navbar.classList.add("sticky");
    // mapbox.classList.add("sticky");
    mapbox.classList.add("sticky-map");
  } else {
    navbar.classList.remove("sticky");
    // mapbox.classList.remove("sticky");
    mapbox.classList.remove("sticky-map");
  }
}
