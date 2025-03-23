document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const existingUserButton = document.getElementById('existing');

    // Display existing user login button if credentials are saved
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        existingUserButton.style.display = 'block';
    }

    // Form submission event
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;

        alert(`Logged in as ${username}`);

        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
    });

    // Existing user login button event
    existingUserButton.addEventListener('click', function () {
        const savedUsername = localStorage.getItem('username');
        alert(`Logged in as ${savedUsername}`);
    });
});