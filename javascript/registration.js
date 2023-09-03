//ACCESO AL DOM DE REGISTRATION.HTML

let userInput = document.getElementById('userInput');

let passwordInput = document.getElementById('passwordInput');

let loginBtn = document.getElementById('loginBtn');

let loginForm = document.getElementById('login-form');

//FUNCION PARA MENSAJE EVITAR REGISTRAR EN CASO DE STRINGS VACÍOS

function changeAction() {
    return loginForm.action = "#header-logo";
}

//EVENTO SOBRE EL BOTON DE REGISTER Y FUNCIÓN QUE ALMACENA USUARIO Y CONTRASEÑA EN EL LOCAL STORAGE

loginBtn.onclick = newUser = () =>{
    user = userInput.value;
    
    password = passwordInput.value;

    localStorage.setItem('userName', user);
    
    localStorage.setItem('userPassword', password);

// CONDICIONAL CON MENSAJE TOAST DE ERROR EN CASO DE NO REGISTRAR UN USUARIO Y/O CONTRASEÑA

    if (user === "" && password === "") {
        Toastify({
            text: "Register a username and password",
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
        changeAction();
        
    } else if (user === "") {
        Toastify({
            text: "Register a username",
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
        changeAction();

    } else if (password === "") {
        Toastify({
            text: "Register a password",
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
        changeAction();
    } else {
        newUser();
    }
}
