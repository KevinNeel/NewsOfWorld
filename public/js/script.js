const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
  
    // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
    if (currentScrollPos > 10) {
      // I am using 'display' instead of 'top':
    hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  }

  $(document).ready(function() {
    var windowHeight = $(window).innerHeight();
    $('body').css({'height':windowHeight});
});