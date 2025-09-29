document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const navLink = document.querySelector('.nav-link');

    menuToggle.addEventListener('click', function () {
        navLink.classList.add('open');
        menuToggle.style.display = 'none';
        menuClose.classList.add('active');
    });

    menuClose.addEventListener('click', function () {
        navLink.classList.remove('open');
        menuToggle.style.display = 'inline-block';
        menuClose.classList.remove('active');
    });

    // Optional: Hide menu if window is resized to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 800) {
            navLink.classList.remove('open');
            menuToggle.style.display = 'none';
            menuClose.classList.remove('active');
        } else {
            menuToggle.style.display = 'inline-block';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const navLink = document.querySelector('.nav-link');
    const header = document.querySelector('header');

    menuToggle.addEventListener('click', function () {
        navLink.classList.add('open');
        menuToggle.style.display = 'none';
        menuClose.style.display = 'inline-block';
        header.classList.add('hide-header');
    });

    menuClose.addEventListener('click', function () {
        navLink.classList.remove('open');
        menuToggle.style.display = 'inline-block';
        menuClose.style.display = 'none';
        header.classList.remove('hide-header');
    });
});


const form = document.getElementById('registerForm');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Collect form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users') || "[]");
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to index.html after registration
    window.location.href = 'index.html';
});