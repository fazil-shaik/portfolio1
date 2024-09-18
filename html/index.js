// index.js

// document.addEventListener('DOMContentLoaded', () => {
//     const toggleButton = document.getElementById('theme-toggle');
//     const body = document.body;

//     toggleButton.addEventListener('click', () => {
//         body.classList.toggle('dark-mode');
//     });

//     const learnMoreButton = document.getElementById('learn-more-button');
//     const aboutSection = document.getElementById('about');

//     learnMoreButton.addEventListener('click', () => {
//         aboutSection.scrollIntoView({ behavior: 'smooth' });
//     });

//     // Move toggleMenu function inside DOMContentLoaded event listener
//     window.toggleMenu = () => {
//         const menu = document.querySelector('.nav-menu');
//         menu.classList.toggle('show');
//     };
// });


function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    
    document.getElementById('stars').appendChild(star);
    
    const fallDuration = Math.random() * 5 + 5;
    star.style.animation = `fall ${fallDuration}s linear infinite`;
}

function generateStars(num) {
    for (let i = 0; i < num; i++) {
        createStar();
    }
}

generateStars(100);




