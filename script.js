let formArea = document.getElementById('wrapper');

// form
let loginDiv = document.getElementById('login-form');
let signupDiv = document.getElementById('signup-form');

// from switch
let swetchEffect = document.querySelectorAll('.switch-animation a');



swetchEffect[0].addEventListener('click', () => {
    loginDiv.style.transform = 'translateX(-100%)';
    signupDiv.style.transform = 'translateX(0)';
});

swetchEffect[1].addEventListener('click', () => {
    loginDiv.style.transform = 'translateX(0)';
    signupDiv.style.transform = 'translateX(100%)';
});