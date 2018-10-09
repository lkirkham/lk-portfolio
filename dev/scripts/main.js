import Typed from "typed.js";
import AOS from "aos";

// // Start midnight
// $(document).ready(function () {
//   // Change this to the correct selector for your nav.
//   $(".hamburger label").midnight();
// });


//typed JS
var introHeading = new Typed("#introHeading", {
  strings: [
    "a front-end developer.",
    "a web designer.",
    "a digital product manager.",
  ],
  typeSpeed: 50,
  backSpeed: 40,
  smartBackspace: true,
  loop: true
});


//animate on scroll library
AOS.init();

// // You can also pass an optional settings object
// // below listed default settings
// AOS.init({
//   // Global settings
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll

//   // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
// });



//nav
(function () {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function (e) {
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function (e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function (e) { hamburger.doToggle(e); });

}());

