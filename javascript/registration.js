//ACCESO AL DOM DE REGISTRATION.HTML

let userInput = document.getElementById('userInput');

let passwordInput = document.getElementById('passwordInput');

let loginBtn = document.getElementById('loginBtn');

let registerForm = document.getElementById('register-form');

//EVENTO SOBRE EL BOTON DE SUBMIT Y FUNCIÓN QUE ALMACENA USUARIO Y CONTRASEÑA EN EL LOCAL STORAGE

loginBtn.onclick = newUser = () =>{

    let user = userInput.value;
    
    let password = passwordInput.value;

// CONDICIONAL CON MENSAJE TOAST DE ERROR EN CASO DE NO REGISTRAR UN USUARIO Y/O CONTRASEÑA. ALMACENAMIENTO EN LOCAL STORAGE SI SE INGRESA USUARIO Y CONTRASEÑA.

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

    } else {
        Toastify({
            text: "Registration succesful. Now click on Login.",
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
            onClick: function () { } // Callback after click
        }).showToast();
    
        localStorage.setItem('userName', user);
        
        localStorage.setItem('userPassword', password);
    }  
}
