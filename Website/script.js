const aboutNav = document.getElementById("aboutNav")
const teachingNav = document.getElementById("teachingNav")
const researchNav = document.getElementById("researchNav")
const publicationNav = document.getElementById("publicationNav")

const aboutSection = document.getElementById("about")
const teachingSection = document.getElementById("Teaching")
const researchSection = document.getElementById("Research")
const publicationsSection = document.getElementById("publications")

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navigationLinks = document.getElementsByClassName("navigation")[0]

let isOpen = false

aboutNav.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    if (isOpen) {
        isOpen = navigationLinks.classList.toggle('active')
    }
})

teachingNav.addEventListener("click", () => {
    teachingSection.scrollIntoView({behavior: 'smooth'})
    if (isOpen) {
        isOpen = navigationLinks.classList.toggle('active')
    }
})

researchNav.addEventListener("click", () => {
    researchSection.scrollIntoView({behavior: 'smooth'})
    if (isOpen) {
        isOpen = navigationLinks.classList.toggle('active')
    }
})

publicationNav.addEventListener("click", () => {
    publicationsSection.scrollIntoView({behavior: 'smooth'})
    if (isOpen) {
        isOpen = navigationLinks.classList.toggle('active')
    }
})

toggleButton.addEventListener('click', () => {
    isOpen = navigationLinks.classList.toggle('active') 
})