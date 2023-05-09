/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills-card"),
  skillsHeader = document.querySelectorAll(".skills__header");

function togglesSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-card skills__close";
  }
  if (itemClass === "skills-card skills__close") {
    this.parentNode.className = "skills-card skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", togglesSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");
    tab.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalCloses) => {
  modalCloses.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.remove("active-link");
//     }
//   });
// }
// window.addEventListener("scroll", scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/

// function scrollHeader() {
//   const nav = document.getElementById("header");
//   // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
//   if (this.scrollY >= 80) nav.classList.add("scroll-header");
//   else nav.classList.remove("scroll-header");
// }
// window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic

// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//     darkTheme
//   );
//   themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
//     iconTheme
//   );
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener("click", () => {
//   // Add or remove the dark / icon theme
//   document.body.classList.toggle(darkTheme);
//   themeButton.classList.toggle(iconTheme);
//   // We save the theme and the current icon that the user chose
//   localStorage.setItem("selected-theme", getCurrentTheme());
//   localStorage.setItem("selected-icon", getCurrentIcon());
// });

////////////////////////////tech stack section //////////////////////////

let tech_stacks = [
  {
    tech_name: "Java",
    img_link:
      "https://drive.google.com/uc?export=view&id=10aHD66mjf5805u4IG0sHjmUBoHSSrtrZ",
  },
  {
    tech_name: "Spring_Boot",
    img_link: "../../assets/img/spring-boot.png",
  },
  {
    tech_name: "JDBC",
    img_link:
      "https://drive.google.com/uc?export=view&id=10aHD66mjf5805u4IG0sHjmUBoHSSrtrZ",
  },
  {
    tech_name: "MySQL",
    img_link: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
  },
  {
    tech_name: "Hibernate",
    img_link:
      "https://cdn.freebiesupply.com/logos/large/2x/hibernate-logo-png-transparent.png",
  },
  {
    tech_name: "JavaScript",
    img_link:
      "https://drive.google.com/uc?export=view&id=1PAdZ31CeY83OFFT-MSACi9bOT6DUfFnY",
  },
  {
    tech_name: "CSS",
    img_link:
      "https://drive.google.com/uc?export=view&id=1csttg5pfFGGt7yE4A1YC2VxNpOPg43DG",
  },
  {
    tech_name: "HTML",
    img_link:
      "https://drive.google.com/uc?export=view&id=1OM8fgg4s361EblZU6k4i4DdUQ3sZxUDC",
  },
  {
    tech_name: "BootStrap",
    img_link: "https://avatars.githubusercontent.com/u/2918581?s=280&v=4",
  },
  {
    tech_name: "GitHub",
    img_link: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },

  {
    tech_name: "VS_Code",
    img_link:
      "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
  },

  {
    tech_name: "STS",
    img_link:
      "data:image/png;base64,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",
  },

  {
    tech_name: "Postman",
    img_link:
      "https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png",
  },

  {
    tech_name: "Apache_Server",
    img_link:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Apache_HTTP_Server_Logo_%282016%29.svg/1024px-Apache_HTTP_Server_Logo_%282016%29.svg.png",
  },

  {
    tech_name: "Git",
    img_link: "https://www.svgrepo.com/show/364550/gitlab-logo-fill.svg",
  },
];

let techStackDiv = document.getElementById("tech");

tech_stacks.forEach((tech) => {
  let comp = document.createElement("div");

  let img = document.createElement("img");
  img.src = tech.img_link;
  img.alt = tech.tech_name;
  let name = document.createElement("p");
  name.innerText = tech.tech_name;

  comp.append(img, name);

  techStackDiv.append(comp);
});

// testing js

let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode
// let darkmode = document.querySelector("#darkmode");

// darkmode.onclick = () => {
//   if (darkmode.classList.contains("bx-moon")) {
//     darkmode.classList.replace("bx-moon", "bx-sun");
//     document.body.classList.add("active");
//   } else {
//     darkmode.classList.replace("bx-sun", "bx-moon");
//     document.body.classList.remove("active");
//   }
// };
