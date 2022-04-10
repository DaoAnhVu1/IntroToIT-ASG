const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav .list-link');
const menuToggleIcon = document.getElementById('menu-toggle-icon');

console.log(nav)
// Header Scroll
window.addEventListener('scroll', () => {
    if(window.scrollY >= 500) {
        nav.classList.add('nav-black');
    } else {
        nav.classList.remove('nav-black');
    }
})

// toggle
const toggleMenu = () => {
    nav.classList.toggle('active');
    menuToggleIcon.classList.toggle('active');
}

menuToggleIcon.addEventListener('click', toggleMenu) 


// Nav-Link modification

navLinks.forEach(link => link.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggleIcon.classList.toggle('active');
    let current = document.getElementsByClassName('current');
    current[0].className = current[0].className.replace(' current', '');
    link.className += ' current';
}))