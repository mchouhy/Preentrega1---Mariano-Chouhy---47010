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


loginBtn.onclick = validateUser = () =>{
    userData = userInput.value;
    
    passwordData = passwordInput.value;

    checkUser = localStorage.getItem('userName');
    
    checkPassword = localStorage.getItem('userPassword');

if(userData === checkUser && passwordData === checkPassword) {
        loginSuccesfull();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to enter a valid user and password. Try again',
        });
        changeAction();
    }
}