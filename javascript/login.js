//ACCESO AL DOM DE LOGIN.HTML

let userInput = document.getElementById('userInput');

let passwordInput = document.getElementById('passwordInput');

let loginBtn = document.getElementById('loginBtn');

let loginForm = document.getElementById('login-form');

//FUNCION DE ERROR EN EL LOGIN

function changeAction() {
    return loginForm.action = "#header-logo";
}

function loginSuccesfull() {
    return loginForm.action = "../index.html";
}


//EVENTO SOBRE EL BOTON DE LOGIN Y FUNCIÓN QUE ALMACENA USUARIO Y CONTRASEÑA EN EL LOCAL STORAGE


loginBtn.onclick = validateUser = () => {
    userData = userInput.value;

    passwordData = passwordInput.value;

    checkUser = localStorage.getItem('userName');

    checkPassword = localStorage.getItem('userPassword');

    if (userData === checkUser && passwordData === checkPassword) {
        loginSuccesfull();
    } else if (userData === "" && passwordData === "") {
        Toastify({
            text: "You have to enter a username and a password",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #f94f55, #f94f5b)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
        changeAction();

    } else if (userData === "") {
        Toastify({
            text: "You have to enter a username",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #f94f55, #f94f5b)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
        changeAction();

    } else if (passwordData === "") {
        Toastify({
            text: "You have to enter a password",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #f94f55, #f94f5b)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
        changeAction();
    }
    else {
        Toastify({
            text: "Wrong user or password. Try again.",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #f94f55, #f94f5b)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
        changeAction();
    }
}   
