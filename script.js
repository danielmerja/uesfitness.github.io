document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('block');
    menu.classList.toggle('absolute');
    menu.classList.toggle('top-16');
    menu.classList.toggle('left-0');
    menu.classList.toggle('right-0');
    menu.classList.toggle('bg-black');
    menu.classList.toggle('p-4');
    menu.classList.toggle('space-y-4');
});

// Close mobile menu when clicking menu items
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            document.getElementById('menu').classList.add('hidden');
        }
    });
});

// Remove all carousel-related code
