/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

    const copyBtn = document.getElementById("copyBtn");
    const questionText = document.getElementById("questionText");

    copyBtn.addEventListener("click", async () => {
    try {
    await navigator.clipboard.writeText(questionText.textContent.trim());
    copyBtn.classList.add("copied");
    copyBtn.setAttribute("title", "Copied!");
    setTimeout(() => {
    copyBtn.classList.remove("copied");
    copyBtn.setAttribute("title", "Copy to clipboard");
}, 1500);
} catch (err) {
    console.error("Failed to copy:", err);
}
});
