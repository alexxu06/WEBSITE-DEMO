let aboutNav = document.getElementById("aboutNav")
let teachingNav = document.getElementById("teachingNav")
let publicationNav = document.getElementById("publicationNav")

let aboutSection = document.getElementById("about")
let teachingSection = document.getElementById("Teaching")
let publicationsSection = document.getElementById("publications")

function jumpAbout() {
    aboutSection.scrollIntoView({behavior: 'smooth'})
}

function jumpTeach() {
    teachingSection.scrollIntoView({behavior: 'smooth'})
}

function jumpPublication() {
    publicationsSection.scrollIntoView({behavior: 'smooth'})
}

aboutNav.addEventListener("click", jumpAbout)
teachingNav.addEventListener("click", jumpTeach)
publicationNav.addEventListener("click", jumpPublication)