// Dom Selectors
const menuBtn = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
const menuBranding = document.querySelector(".menu-branding")
const menuNav = document.querySelector(".menu-nav")
const navItems = document.querySelectorAll(".nav-item")
const workBtn = document.querySelector(".view-btn")

//Pages
const contactPage = document.getElementById("contact")
const aboutPage = document.getElementById("about")
const workPage = document.getElementById("work")
const homePage = document.getElementById("home")

//Link Array, Page Array
const pageLinks = document.querySelectorAll(".link")
const pagesArray = [contactPage, aboutPage, workPage, homePage]

//Listeners
let showMenu = false
// window.addEventListener("scroll", activeMenu)
menuBtn.addEventListener("click", toggleMenu)
navItems.forEach(item => item.addEventListener("click", toggleMenu))
navItems.forEach(item => item.addEventListener("click", menuMove))
pageLinks.forEach(item => item.addEventListener("click", menuMove))
workBtn.addEventListener("click", menuMove)

function menuMove(e) {
  console.log(e.target)
  pagesArray.forEach(page => {
    if (page.classList.contains("it")) {
      page.classList.remove("it")
    }
  })
  pageLinks.forEach(link => {
    if (link.firstChild.classList.contains("active")) {
      link.firstChild.classList.remove("active")
    }
  })
  if (e.target.classList.contains("home")) {
    homePage.classList.add("it")
    pageLinks[0].firstChild.classList.add("active")
  }
  if (e.target.classList.contains("about")) {
    aboutPage.classList.add("it")
    pageLinks[1].firstChild.classList.add("active")
  }
  if (e.target.classList.contains("work")) {
    workPage.classList.add("it")
    pageLinks[2].firstChild.classList.add("active")
  }
  if (e.target.classList.contains("con")) {
    contactPage.classList.add("it")
    pageLinks[3].firstChild.classList.add("active")
  }
}

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close")
    menu.classList.add("show")
    menuNav.classList.add("show")
    menuBranding.classList.add("show")
    navItems.forEach(item => item.classList.add("show"))
    showMenu = true
  } else {
    menuBtn.classList.remove("close")
    menu.classList.remove("show")
    menuNav.classList.remove("show")
    menuBranding.classList.remove("show")
    navItems.forEach(item => item.classList.remove("show"))
    showMenu = false
  }
}
// function activeMenu() {
//   const home = document.getElementById("home")
//   const about = document.getElementById("about")
//   const work = document.getElementById("work")
//   const homeLink = document.querySelector(".home")
//   const aboutLink = document.querySelector(".about")
//   const workLink = document.querySelector(".work")
//   const contactLink = document.querySelector(".con")
//   const links = document.querySelectorAll("a")

//   if (window.scrollY < 400) {
//     links.forEach(link => {
//       if (link.classList.contains("active")) {
//         link.classList.remove("active")
//         homeLink.classList.add("active")
//       }
//     })
//   }
//   if (
//     window.scrollY > home.offsetTop + home.offsetHeight &&
//     window.scrollY < about.offsetTop + about.offsetHeight
//   ) {
//     links.forEach(link => {
//       if (link.classList.contains("active")) {
//         link.classList.remove("active")
//         aboutLink.classList.add("active")
//       }
//     })
//   }
//   if (
//     window.scrollY > about.offsetTop + about.offsetHeight &&
//     window.scrollY < work.offsetTop + work.offsetHeight
//   ) {
//     links.forEach(link => {
//       if (link.classList.contains("active")) {
//         link.classList.remove("active")
//         workLink.classList.add("active")
//       }
//     })
//   }
//   if (window.scrollY > work.offsetTop + work.offsetHeight) {
//     links.forEach(link => {
//       if (link.classList.contains("active")) {
//         link.classList.remove("active")
//         contactLink.classList.add("active")
//       }
//     })
//   }
// }
