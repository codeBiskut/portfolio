const navEl = document.querySelector('ol');
const homeEl = document.getElementById('home');
const projectsEl = document.getElementById('projects');
const contactEl = document.getElementById('contact');

const pages = [homeEl, projectsEl, contactEl];

function pageDeselect(item) {
    if (item.getAttribute('class') === 'page selected') {
        item.setAttribute('class', 'page');
        item.setAttribute('style', 'display: none');
    }
}

function pageSelect(event) {
    event.preventDefault();

    const newLocation = event.target.textContent.toLowerCase();

    if (newLocation != 'home' && newLocation != 'projects' && newLocation != 'contact') {
        return;
    }
    else{
        pages.forEach(pageDeselect);
    }

    if (newLocation === 'home') {
        homeEl.setAttribute('class', 'page selected');
        homeEl.setAttribute('style', 'display: block');
    }
    else if (newLocation === 'projects') {
        projectsEl.setAttribute('class', 'page selected');
        projectsEl.setAttribute('style', 'display: block');
    }
    else if (newLocation === 'contact') {
        contactEl.setAttribute('class', 'page selected');
        contactEl.setAttribute('style', 'display: block');
    }
    else {
        return console.log('all of them')
    }
}

navEl.addEventListener('click', pageSelect)