const nav = document.querySelector(".nav");
const headerBtn = document.querySelector(".header__menu-btn");
let isNavOpened = false;

headerBtn.addEventListener("click", function () {
    if (isNavOpened) {
        nav.classList.remove("nav--open");
        isNavOpened = false;
    } else {
        nav.classList.add("nav--open");
        isNavOpened = true;
    }
});
