let aboutNav = document.getElementById("aboutNav")
let teachingNav = document.getElementById("teachingNav")
let publicationNav = document.getElementById("publicationNav")

let aboutSection = document.getElementById("about")
let teachingSection = document.getElementById("Teaching")
let publicationsSection = document.getElementById("publications")


aboutNav.addEventListener("click", () => {
    aboutSection.scrollIntoView({behavior: 'smooth'})
})

teachingNav.addEventListener("click", () => {
    teachingSection.scrollIntoView({behavior: 'smooth'})
})

publicationNav.addEventListener("click", () => {
    publicationsSection.scrollIntoView({behavior: 'smooth'})
})