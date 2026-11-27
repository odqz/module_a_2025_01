// Script which handles showing and hiding the navbar elements when on mobile
const hamburger = document.querySelector('#hamburger');
const closeNav = document.querySelector('#close-nav');
const sections = document.querySelectorAll('.container');
const mobileNavContainer = document.querySelector('#mobile-nav-container');
const mobileNavLinks = document.querySelectorAll('.mobile-nav>a')

hamburger.addEventListener('click', showMobileNav)

// Hides all sections and displays the mobile nav
function showMobileNav() {
  sections.forEach(section => {
    section.style.display = 'none'
  });

  mobileNavContainer.style.display = 'flex'
  hamburger.style.display = 'none'
  closeNav.style.display = 'block'
}

closeNav.addEventListener('click', hideMobileNav)

// Hides the mobile nav and displays all the section
function hideMobileNav() {
  sections.forEach(section => {
    section.style.display = 'block'
  });

  mobileNavContainer.style.display = 'none'
  hamburger.style.display = 'block'
  closeNav.style.display = 'none'
}

mobileNavLinks.forEach(link => {
  link.addEventListener('click', hideMobileNav)
})