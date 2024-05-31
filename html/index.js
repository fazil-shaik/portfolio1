// index.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
    const learnMoreButton = document.getElementById('learn-more-button');
    const aboutSection = document.getElementById('about');

    learnMoreButton.addEventListener('click', () => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});
