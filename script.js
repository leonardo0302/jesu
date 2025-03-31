const loginContainer = document.getElementById('login-container');
const mainMenu = document.getElementById('main-menu');
const loginBtn = document.getElementById('login-btn');
const loginSound = document.getElementById('login-sound');
const menuSound = document.getElementById('menu-sound');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

function playLoginSound() {
    if (loginSound) {
        loginSound.play().catch(error => {
            console.error('Error al reproducir el sonido de inicio de sesión:', error);
        });
    }
}

function playMenuSound() {
    if (menuSound) {
        menuSound.play().catch(error => {
            console.error('Error al reproducir el sonido del menú:', error);
        });
    }
}

loginBtn.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'BarneyEPANO' && password === 'bbNataly230305') {
        loginContainer.style.display = 'none';
        mainMenu.style.display = 'block';
        document.body.classList.remove('login-page');
        document.body.classList.add('main-menu-page');
        if (loginSound) {
            loginSound.pause();
            loginSound.currentTime = 0;
        }
        playMenuSound();
    } else {
        alert('Credenciales incorrectas');
    }
});

document.addEventListener('click', (event) => {
    if (document.body.classList.contains('login-page')) {
        playLoginSound();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('login-page');
});

window.addEventListener('load', () => {
    if (document.body.classList.contains('main-menu-page')) {
        playMenuSound();
    }
});