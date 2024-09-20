(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', function () {

        // Fixed Navbar
        window.addEventListener('scroll', function () {
            var fixedTop = document.querySelector('.fixed-top');
            if (fixedTop) {  // Verifica si el elemento existe
                if (window.innerWidth < 992) {
                    if (window.scrollY > 55) {
                        fixedTop.classList.add('shadow');
                    } else {
                        fixedTop.classList.remove('shadow');
                    }
                } else {
                    if (window.scrollY > 55) {
                        fixedTop.classList.add('shadow');
                        fixedTop.style.top = '-55px';
                    } else {
                        fixedTop.classList.remove('shadow');
                        fixedTop.style.top = '0';
                    }
                }
            }
        });

        // Back to top button
        var backToTopButton = document.querySelector('.back-to-top');
        if (backToTopButton) {  // Verifica si el botón existe
            window.addEventListener('scroll', function () {
                if (window.scrollY > 300) {
                    backToTopButton.style.display = 'block';
                    backToTopButton.style.opacity = '1';
                } else {
                    backToTopButton.style.opacity = '0';
                    setTimeout(function () {
                        backToTopButton.style.display = 'none';
                    }, 600);
                }
            });

            backToTopButton.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

    });

})();

