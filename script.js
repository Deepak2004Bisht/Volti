'use strict';

/**
 * PRELOADING   
 */

const loadElement = document.querySelector('[data-preloader]');

window.addEventListener("load", function () {
    loadElement.classList.add("loaded");
})

/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const  toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNavbar);


/**
 * HEADER
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-go-top-btn]");

window.addEventListener("scroll", function () {
    if(this.window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
})



/**
 * SCROLL REVEAL
 */

const revealElement = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
    for(let i=0, x = revealElement.length; i < x; i++) {
        if(revealElement[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
            revealElement[i].classList.add("revealed");
        } else {
            revealElement[i].classList.remove("revealed");
        }
    }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);