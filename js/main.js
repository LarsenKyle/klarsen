// Dom Selectors
const menuBtn = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
const menuBranding = document.querySelector(".menu-branding")
const menuNav = document.querySelector(".menu-nav")
const navItems = document.querySelectorAll(".nav-item")

let showMenu = false
window.addEventListener("scroll", activeMenu)
menuBtn.addEventListener("click", toggleMenu)
navItems.forEach(item => item.addEventListener("click", toggleMenu))

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
function activeMenu() {
  const home = document.getElementById("home")
  const about = document.getElementById("about")
  const work = document.getElementById("work")
  const homeLink = document.querySelector(".home")
  const aboutLink = document.querySelector(".about")
  const workLink = document.querySelector(".work")
  const contactLink = document.querySelector(".con")
  const links = document.querySelectorAll("a")

  if (window.scrollY < 400) {
    links.forEach(link => {
      if (link.classList.contains("active")) {
        link.classList.remove("active")
        homeLink.classList.add("active")
      }
    })
  }
  if (
    window.scrollY > home.offsetTop + home.offsetHeight &&
    window.scrollY < about.offsetTop + about.offsetHeight
  ) {
    links.forEach(link => {
      if (link.classList.contains("active")) {
        link.classList.remove("active")
        aboutLink.classList.add("active")
      }
    })
  }
  if (
    window.scrollY > about.offsetTop + about.offsetHeight &&
    window.scrollY < work.offsetTop + work.offsetHeight
  ) {
    links.forEach(link => {
      if (link.classList.contains("active")) {
        link.classList.remove("active")
        workLink.classList.add("active")
      }
    })
  }
  if (window.scrollY > work.offsetTop + work.offsetHeight) {
    links.forEach(link => {
      if (link.classList.contains("active")) {
        link.classList.remove("active")
        contactLink.classList.add("active")
      }
    })
  }
}
// function changeFont() {
//   const fontInput = document.getElementById("font").value
//   const googleFont = document.getElementById("googleFont").value
//   const head = document.head
//   const body = document.body
//   let link = document.createElement("link")

//   link.type = "text/css"
//   link.rel = "stylesheet"
//   link.href = googleFont
//   head.appendChild(link)

//   body.style.fontFamily = fontInput
// }
