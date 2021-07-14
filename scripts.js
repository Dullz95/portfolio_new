// navbar
function toggleNavbar() {
  document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
}


// full page
// new fullpage("#fullpage", {
//   anchors: ["home", "about", "resume", "projects", "testimonial", "contact"],
//   navigation: true,
//   navigationPosition: "right",
//   navigationTooltips: [
//     "home",
//     "about",
//     "resume",
//     "projects",
//     "testimonial",
//     "contact",
//   ],
//   center: true,
// });
// owl
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        // nav:true
      },
      1000: {
        items: 3,
        // nav:false
      },
      // 1000:{
      // items:5,
      // nav:true,
      // loop:false
      // }
    },
  });
});

function switchTab(tabID) {
  let tabs = document.getElementsByClassName("resume-container");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  document.getElementById(tabID).classList.add("active");
}

function close(e){
    navigation.classList.remove("active")
};