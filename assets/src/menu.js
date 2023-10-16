//Menu responsive
const menuSlide = () => {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");
  const navLinksInner = document.querySelectorAll(".nav-links li");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("menu-active");

    navLinksInner.forEach((li, index) => {
      if (li.style.animation) {
        li.style.animation = "";
      } else {
        li.style.animation = `navLinkAnime 0.5s ease forwards ${index / 7 + 0.3
          }s`;
      }
    });

    menuIcon.classList.toggle("span-anime");
  });
};

menuSlide();

$('.inicio').hide();

$(window).scroll(function() {
  if ($(this).scrollTop() > 20) {
    $('.inicio').fadeIn();
  } else {
    $('.inicio').fadeOut();
  }
});

$('.inicio').click(function(event) {
  let target = $('html, body').offset().top;

  $('html, body').animate({
    scrollTop: target
  }, 100);
  event.preventDefault();
});