// Dark mode toggle script
function darkmodeFunction() {
    const toggleButton = document.querySelector('#dark-mode-btn');
    const html = document.querySelector('html');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const footer = document.querySelector('footer');
    const socialLinks = document.querySelectorAll('.fa-brands');
    const usefulLinks = document.querySelectorAll('.useful-links a');

    const icons = ["moon.png", "sun.png"];
    let currentIconIndex = 0;

    toggleButton.addEventListener('click', function() {
        const icon = toggleButton.querySelector('img');
        currentIconIndex = (currentIconIndex + 1) % icons.length;
        icon.src = "img/" + icons[currentIconIndex];

        if (html.dataset.bsTheme === "dark") { // light theme modifications
            html.dataset.bsTheme = "light";
            navbar.classList.remove('navbar-dark', 'bg-dark');
            navbar.classList.add('navbar-light', 'bg-light');
            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-dark');
            });
            footer.classList.remove('bg-dark', 'text-white');
            footer.classList.add('bg-light', 'text-dark');
            socialLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-dark');
            });
            usefulLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-dark');
            });
            const connectedText = document.querySelector('.me-5 span');
            connectedText.classList.remove('text-white');
            connectedText.classList.add('text-dark');
        } else { // dark theme modifications
            html.dataset.bsTheme = "dark";
            navbar.classList.remove('navbar-light', 'bg-light');
            navbar.classList.add('navbar-dark', 'bg-dark');
            navLinks.forEach(link => {
                link.classList.remove('text-dark');
                link.classList.add('text-white');
            });
            footer.classList.remove('bg-light', 'text-dark');
            footer.classList.add('bg-dark', 'text-white');
            socialLinks.forEach(link => {
                link.classList.remove('text-dark');
                link.classList.add('text-white');
            });
            usefulLinks.forEach(link => {
                link.classList.remove('text-dark');
                link.classList.add('text-white');
            });
            const connectedText = document.querySelector('.me-5 span');
            connectedText.classList.remove('text-dark');
            connectedText.classList.add('text-white');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    darkmodeFunction();
});
