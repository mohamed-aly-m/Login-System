
var webSiteNameInput = document.getElementById('enterYourNameR');
var webSiteEmailInput = document.getElementById('enterYourMailR');
var webSitePasswordInput = document.getElementById('passR');
var chkMail = document.getElementById('enterYourMail');
var chkPassword = document.getElementById('pass');
var msgError = document.getElementById('msgError');
var allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];


function addNewUser() {
    var Users = {
        name: webSiteNameInput.value,
        email: webSiteEmailInput.value,
        password: webSitePasswordInput.value,
    };

    
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() === Users.email.toLowerCase()) {
            msgError.innerHTML = '<p class="text-danger-emphasis fw-bold">Email already in use, please use a different email.</p>';
            return;
        }
    }

    allUsers.push(Users);
    localStorage.setItem('allUsers', JSON.stringify(allUsers));
    console.log(allUsers);
    alert('Registration successful!');
    clrSignUp();
}


function clrSignUp() {
    webSiteNameInput.value = "";
    webSiteEmailInput.value = "";
    webSitePasswordInput.value = "";
}


function displayAllsers() {
    var cartoona = '';
    var loggedIn = false;

    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() === chkMail.value.toLowerCase() && allUsers[i].password.toLowerCase() === chkPassword.value.toLowerCase()) {
            window.location.href = 'home.html';
            cartoona = cartoona + `
                <p class="text-white-50">Welcome ${allUsers[i].name}</p>
            `;
            document.getElementById('homeWelcome').innerHTML = cartoona;
            localStorage.setItem('loggedInUser', allUsers[i].name);
            loggedIn = true;
            break;
        }
    }

    if (!loggedIn) {
        msgError.innerHTML = '<p class="text-danger-emphasis fw-bold">Incorrect email or password.</p>';
    }
}


const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addNewUser();
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        displayAllsers();
    });
}
