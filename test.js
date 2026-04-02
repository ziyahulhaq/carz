const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const revealElements = document.querySelectorAll(".reveal");

function setMobileMenu(open) {
  document.body.classList.toggle("show-mobile-menu", open);
  menuOpenButton.setAttribute("aria-expanded", String(open));
}

menuOpenButton.addEventListener("click", () => {
  const isOpen = document.body.classList.contains("show-mobile-menu");
  setMobileMenu(!isOpen);
});

menuCloseButton.addEventListener("click", () => setMobileMenu(false));

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => setMobileMenu(false));
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
