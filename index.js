// Import stylesheets
import './style.css';

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// zobrazit fotky affiliate produktů
// zmenšit text a upravit v affiliate sekci
// přidat blog
//zjisti co s vat