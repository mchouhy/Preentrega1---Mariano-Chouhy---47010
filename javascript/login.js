//ACCESO AL DOM DE LOGIN.HTML

let userInput = document.getElementById('userInput');

let passwordInput = document.getElementById('passwordInput');

let loginBtn = document.getElementById('loginBtn');

let loginForm = document.getElementById('login-form');

//FUNCIÓN PARA LOGIN CORRECTO

function loginSuccesfull() {
    return location.href = "../index.html";
}

//EVENTO SOBRE EL BOTON DE LOGIN Y FUNCIÓN QUE VALIDA SI EL USUARIO Y CONTRASEÑA ESTÁ ALMACENADO EL LOCAL STORAGE

loginBtn.onclick = validateUser = () => {

    userData = userInput.value;

    passwordData = passwordInput.value;

//PARSE DEL OBJETO GUARDADO EN LOCAL STORAGE PARA PODER SER LEÍDO DESDE LOCAL STORAGE

    checkUserInfo = JSON.parse(localStorage.getItem('userInfo'));

//CONDICIONAL PARA VALIDAR SI EL USUARIO Y CONTRASEÑA INGRESADO ESTÁ REGISTRADO

    if (userData === checkUserInfo.user && passwordData === checkUserInfo.password) {
        Toastify({
            text: "Login succesful",
            duration: 5000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #03c04a, #03ac13)",
            },
            onClick: function () {} // Callback after click
        }).showToast();

        setTimeout(() => {loginSuccesfull()
        }, 2000);
    } else if (userData === "" && passwordData === "") {
        Toastify({
            text: "Enter your username and password",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #f94f55, #f94f5b)",
            },
            onClick: function () { } // Callback after click
        }).showToast();

    } else if (userData === "") {
        Toastify({
            text: "Enter your username",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #f94f55, #f94f5b)",
            },
            onClick: function () { } // Callback after click
        }).showToast();

    } else if (passwordData === "") {
        Toastify({
            text: "Enter your password",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #f94f55, #f94f5b)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }
    else {
        Toastify({
            text: "Wrong user or password. Try again.",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #f94f55, #f94f5b)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }
}   
