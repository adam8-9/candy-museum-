const toggleButton = document.querySelector(".toggle-button")
const navbarLinks = document.querySelector(".navbar-links")
const navbar = document.querySelector(".navbar")



toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})


window.addEventListener("scroll", () => {

    if (scrollY > 800) {
        navbar.classList.add("scroll")

    } else {
        navbar.classList.remove("scroll")
    }
})