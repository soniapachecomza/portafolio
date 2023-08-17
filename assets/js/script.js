/*============ MENU SHOW  Y HIDDEN ============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*============ MENU SHOW ============*/
/*Validacion de las constantes existentes*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/*============ MENU HIDDEN ============*/
/*Validacion de las constantes existentes*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*============ REMOVE MENU MOBILE ============*/
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*============ ACCORDION SKILLS ============*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*============ SERVICES MODAL ============*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*============ SCROLL SECTIONS ACTIVE LINK ============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sections = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sections + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sections + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*============ CHANGE BACKGROUND HEADER ============*/
function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*============ SHOW SCROLL UP ============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//*============ DARK LIGHT THEME ============*//
const body = document.querySelector("body");
const text = document.querySelector(".body-text");
const titulo = document.querySelector(".section__title")
const titulos = document.querySelector(".titulo")
const yo = document.querySelector(".home__title")
const prof = document.querySelector(".home__subtitle")
const scroll = document.querySelector(".home__scroll-name")
const sobre = document.querySelector(".section__subtitle")
const mi = document.querySelector(".about__description")
const anio = document.querySelector(".about__info")
const number = document.querySelector(".about__info-title")
const number1 = document.querySelector(".about__info-title1")
const number2 = document.querySelector(".about__info-title2")
const skill = document.querySelector(".habilidad")
const skills1 = document.querySelector(".service")
const skills = document.querySelector(".skills__subtitle")
const habilname = document.querySelector(".skills__list")
const habilname1 = document.querySelector(".skills__list1")
const habilname2 = document.querySelector(".skills__list2")
const habilname3 = document.querySelector(".skills__list3")

const habil = document.querySelector(".habil")
const habil1 = document.querySelector(".habil1")
const habil2 = document.querySelector(".habil2")
const habil3 = document.querySelector(".habil3")
const portfolio = document.querySelector(".titulo")
const contact = document.querySelector(".contact")
const para = document.querySelector("p");
const btnToggleLight = document.querySelector(".light-theme");
const btnToggleDark = document.querySelector(".dark-theme");
const icon = document.querySelector(".icons");
const about = document.querySelector('.section__title')
icon.style.backgroundColor = "white";
icon.style.padding = "5px";

function darkTheme() {
  body.style.backgroundColor = "black";
  yo.style.color = "white";
  scroll.style.color = "white";
  prof.style.color = "white";
  sobre.style.color = "white";
  mi.style.color = "white";
  number.style.color = "white";
  number1.style.color = "white";
  number2.style.color = "white";
  anio.style.color = "white";
  skill.style.color = "white";
  skills.style.color = "white" ;
  skills1.style.color = "white";
  habil.style.color = "white";
  habil1.style.color = "white";
  habil2.style.color = "white";
  habil3.style.color = "white";
  habilname.style.color = "white";
  habilname1.style.color = "white";
  habilname2.style.color = "white";
  habilname3.style.color = "white";
  text.style.color = "white";
  para.style.color = "white";
  titulo.style.color = "white";
  titulos.style.color = "white";
  portfolio.style.color= 'white'
  contact.style.color= 'white'
  btnToggleDark.style.display = "none";
  btnToggleLight.style.display = "block";
  titulo.style.color = "white";
}

function lightTheme() {
  body.style.backgroundColor = "rgb(243, 246, 255)";
  text.style.color = "black";
  yo.style.color = "black";
  prof.style.color = "black";
  sobre.style.color = "black";
  mi.style.color = "black";
  number.style.color = "black";
  number1.style.color = "black";
  number2.style.color = "black";
  anio.style.color = "black";
  scroll.style.color = "black";
  skill.style.color = "black";
  skills.style.color = "black";
  para.style.color = "black";
  habilname.style.color = "black";
  habilname1.style.color = "black";
  habilname2.style.color = "black";
  habilname3.style.color = "black";
  titulo.style.color = "black";
  habil.style.color = "black";
  habil1.style.color = "black";
  habil2.style.color = "black";
  habil3.style.color = "black";
  titulo.style.color = "black";
  titulos.style.color = "black";
  portfolio.style.color= 'black'
  contact.style.color= 'black'
  btnToggleLight.style.display = "none";
  btnToggleDark.style.display = "block";
}
