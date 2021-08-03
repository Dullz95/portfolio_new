// navbar
function toggleNavbar() {
  document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
}
let navigation = document.getElementsByClassName('navbar-links')[0];
let items = document.getElementsByClassName('navbar-link');

for (let i = 0; i < items.length; i++) {
items[i].addEventListener('click', close);
}

function close(e){
if (e.target.classList.contains('navbar-link')){
if (navigation.classList.contains("active")){
navigation.classList.remove('active')
}
}
};



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
        margin:0,
        stagePadding:0,
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