const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const brand = document.querySelector('.navbar-brand');
const navbar = document.querySelector('.navbar');
const navlink = document.querySelectorAll('.nav-link');
const topNav1 = document.querySelector('.topnav1');
const topNav2 = document.querySelector('.topnav2');
const topNav3 = document.querySelector('.topnav3');
const topNav4 = document.querySelector('.topnav4');
const about = document.querySelector('#about');
const hamburger = document.querySelector('.hamburger');
const hamburger2 = document.querySelector('.hamburger2');
const hamburger3 = document.querySelector('.hamburger3');
let navIsOpen = 0;

//Nav toggle

function toggleNav() {
  nav.classList.toggle('nav-open');
  hamburger.classList.toggle('open');
  hamburger2.classList.toggle('open2');
  hamburger3.classList.toggle('open3');

  // Set colour of logo and hamburger to match the background

  if (window.scrollY >= about.offsetTop - 40 && window.scrollY <= contact.offsetTop - 40) {
    menu.classList.toggle('scrolled2');
    brand.classList.toggle('scrolled');
  }

  // Set transition for mobile nav background

  if (navIsOpen % 2 == 0) {
    nav.style.transition = 'transform 700ms ease-in-out, opacity 0s ease 700ms';
  } else {
    nav.style.transition = 'transform 700ms ease-in-out, opacity 0s ease 0s';
  }

  // Set transitions for logo and hamburger icon

  if (window.scrollY >= about.offsetTop - 40 && navIsOpen % 2 == 0) {
    brand.style.transitionDelay = '500ms';
    hamburger.style.transition = 'transform 300ms ease, background-color 300ms ease 500ms';
    hamburger2.style.transition = 'transform 300ms ease, background-color 300ms ease 500ms';
    hamburger3.style.transition = 'transform 300ms ease, background-color 300ms ease 500ms';
  } else {
    brand.style.transitionDelay = '100ms';
    hamburger.style.transition = 'transform 300ms ease, background-color 100ms 100ms';
    hamburger2.style.transition = 'transform 300ms ease, background-color 100ms 100ms';
    hamburger3.style.transition = 'transform 300ms ease, background-color 100ms 100ms';
  }

  navIsOpen++;
};

menu.addEventListener('click', toggleNav);

// Close nav when clicking on a link

function closeNav() {

  if (navIsOpen % 2 != 0) {

    nav.classList.remove('nav-open');
    hamburger.classList.remove('open');
    hamburger2.classList.remove('open2');
    hamburger3.classList.remove('open3');

    brand.style.transitionDelay = '500ms';
    hamburger.style.transition = 'transform 300ms ease, background-color 300ms ease 500ms';
    hamburger2.style.transition = 'transform 300ms ease, background-color 300ms ease 500ms';
    hamburger3.style.transition = 'transform 300ms ease, background-color 300ms ease 500ms';
    nav.style.transition = 'transform 700ms ease-in-out, opacity 0s ease 700ms';

    navIsOpen++;

    setTimeout(navTransition, 700);

    animateNav();

  }
};

// Reset transitions after nav has closed

function navTransition() {

  brand.style.transitionDelay = '100ms';
  hamburger.style.transition = 'transform 300ms ease, background-color 100ms 100ms';
  hamburger2.style.transition = 'transform 300ms ease, background-color 100ms 100ms';
  hamburger3.style.transition = 'transform 300ms ease, background-color 100ms 100ms';
  nav.style.transition = 'transform 700ms ease-in-out, opacity 0s ease 0s';

};

topNav1.addEventListener('click', closeNav);
topNav2.addEventListener('click', closeNav);
topNav3.addEventListener('click', closeNav);
topNav4.addEventListener('click', closeNav);
brand.addEventListener('click', closeNav);


// Change colour on scroll

const contact = document.querySelector('#contact');
const services = document.querySelector('#services');
const portfolio = document.querySelector('#portfolio');

function myScrollFunc() {
  let y = window.scrollY;

  if (navIsOpen % 2 != 0) {
    menu.classList.remove('scrolled2');
  } else if (window.innerWidth >= 768 && y >= about.offsetTop - 40) {
    navbar.classList.add('navbar-show');
    navlink[0].classList.add('nav-link-show');
    navlink[1].classList.add('nav-link-show');
    navlink[2].classList.add('nav-link-show');
    brand.classList.add('scrolled');
  } else if (y >= about.offsetTop - 40 && y <= contact.offsetTop - 40) {
    menu.classList.add('menu-show', 'scrolled2');
    brand.classList.add('scrolled');
  } else {
    navbar.classList.remove('navbar-show');
    navlink[0].classList.remove('nav-link-show');
    navlink[1].classList.remove('nav-link-show');
    navlink[2].classList.remove('nav-link-show');
    menu.classList.remove('menu-show', 'scrolled2');
    brand.classList.remove('scrolled');
  }

  // Change focus state of links

  if (y >= about.offsetTop - 40 && y <= services.offsetTop - 40) {
    navlink[0].focus();
  } else if (y >= services.offsetTop - 40 && y <= portfolio.offsetTop - 40) {
    navlink[1].focus();
  } else if (y >= portfolio.offsetTop - 40 && y <= contact.offsetTop - 40) {
    navlink[2].focus();
  } else {
    navlink[0].blur();
    navlink[1].blur();
    navlink[2].blur();
  }
};

window.addEventListener("scroll", myScrollFunc);

// Smooth scroll to top when clicking logo

brand.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

//Animations

//Typewriter

const typewriter = function(txtElement, words, wait) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type Method

typewriter.prototype.type = function() {
  const current = this.wordIndex % this.words.length;
  const fullTxt = this.words[current];

  if (this.isDeleting == true) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  if (window.innerWidth <= 768) {
    this.txtElement.innerHTML = `<br><span>${this.txt}</span>`;
  } else {
    this.txtElement.innerHTML = `<span>${this.txt}</span>`;
  }

  let typeSpeed = 300;

  if (this.isDeleting == true) {
    typeSpeed /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    typeSpeed = this.wait;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.wordIndex++;
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
}


// Init DOM

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  new typewriter(txtElement, words, wait);
}

//Nav animations

function animateNav() {

  if (navIsOpen % 2 != 0) {
    topNav1.classList.add('animated', 'fadeIn', 'delay-650ms');
    topNav2.classList.add('animated', 'fadeIn', 'delay-700ms');
    topNav3.classList.add('animated', 'fadeIn', 'delay-750ms');
    topNav4.classList.add('animated', 'fadeIn', 'delay-800ms');
  } else {
    topNav1.classList.remove('animated', 'fadeIn', 'delay-650ms');
    topNav2.classList.remove('animated', 'fadeIn', 'delay-700ms');
    topNav3.classList.remove('animated', 'fadeIn', 'delay-750ms');
    topNav4.classList.remove('animated', 'fadeIn', 'delay-800ms');
  }
};

menu.addEventListener("click", animateNav);

//Body Animations

const infoImage = document.querySelector('.info-image');
const infoText = document.querySelector('.info-text');
const service = document.querySelectorAll('.service');

function animateBody() {

  if (window.innerWidth >= 768) {
    infoImage.classList.add('wow', 'fadeInLeft', 'delay-600ms');
    infoText.classList.add('wow', 'fadeIn', 'delay-1s');
    service[0].classList.add('wow', 'fadeInLeft', 'delay-500ms');
    service[1].classList.add('wow', 'fadeInUp', 'delay-500ms');
    service[2].classList.add('wow', 'fadeInRight', 'delay-500ms');
  }

  if (window.innerWidth <= 768) {
    infoImage.classList.add('wow', 'fadeInLeft', 'delay-200ms');
    infoText.classList.add('wow', 'fadeIn', 'delay-200ms');
  }
};

document.addEventListener("DOMContentLoaded", animateBody);

// Nav container

const navContainer = document.querySelector('.nav-container');

function navContainerSize() {
  if (window.innerWidth <= 768) {
    navContainer.classList.add('container-fluid');
    navContainer.classList.remove('container');
  } else {
    navContainer.classList.add('container');
    navContainer.classList.remove('container-fluid');
  }
}

document.addEventListener('DOMContentLoaded', navContainerSize);
window.addEventListener('resize', navContainerSize);
