const navEl = document.querySelector('ol');
const homeEl = document.getElementById('home');
const projectsEl = document.getElementById('projects');
const contactEl = document.getElementById('contact');
const navHomeEl = document.getElementById('nav-home');
const navProjectsEl = document.getElementById('nav-projects');
const navContactEl = document.getElementById('nav-contact');

const pages = [homeEl, projectsEl, contactEl];
const navs = [navHomeEl, navProjectsEl, navContactEl];

function pageDeselect(item) {
    if (item.getAttribute('class') === 'show') {
        item.setAttribute('class', 'hide');
    }
}

function navDeselect(item){
    if (item.getAttribute('class') === 'selected'){
        item.setAttribute('class', '');
    }
}

function homeSelect(event) {
    event.preventDefault();

    pages.forEach(pageDeselect);
    navs.forEach(navDeselect);

    navHomeEl.setAttribute('class', 'selected');
    homeEl.setAttribute('class', 'show');
}

function projectSelect(event) {
    event.preventDefault();

    pages.forEach(pageDeselect);
    navs.forEach(navDeselect);
    
    navProjectsEl.setAttribute('class', 'selected');
    projectsEl.setAttribute('class', 'show');
}

function contactSelect(event) {
    event.preventDefault();

    pages.forEach(pageDeselect);
    navs.forEach(navDeselect);
    
    navContactEl.setAttribute('class', 'selected');
    contactEl.setAttribute('class', 'show');
}

navHomeEl.addEventListener('click', homeSelect);
navProjectsEl.addEventListener('click', projectSelect);
navContactEl.addEventListener('click', contactSelect);