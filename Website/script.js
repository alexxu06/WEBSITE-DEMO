const aboutNav = document.getElementById("aboutNav")
const teachingNav = document.getElementById("teachingNav")
const researchNav = document.getElementById("researchNav")
const serviceNav = document.getElementById("serviceNav")
const awardNav = document.getElementById("AwardsNav")
const publicationNav = document.getElementById("publicationNav")

const aboutSection = document.getElementById("about")
const teachingSection = document.getElementById("Teaching")
const researchSection = document.getElementById("Research")
const serviceSection = document.getElementById("ProfessionalService")
const awardSection = document.getElementById("HonorsAndAwards")
const publicationsSection = document.getElementById("publications")

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navigationLinks = document.getElementsByClassName("navigation")[0]

let isOpen = false

// scroll the section

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

serviceNav.addEventListener('click', () => {
    serviceSection.scrollIntoView({behavior: 'smooth'})
    if (isOpen) {
        isOpen = navigationLinks.classList.toggle('active')
    }
})

awardNav.addEventListener("click", () => {
    awardSection.scrollIntoView({behavior: 'smooth'})
    if (isOpen) {
        isOpen = navigationLinks.classList.toggle('active')
    }
})

// toggle hamburger menu

toggleButton.addEventListener('click', () => {
    isOpen = navigationLinks.classList.toggle('active') 
})