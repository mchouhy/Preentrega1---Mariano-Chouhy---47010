//ACCESO AL DOM DE REGISTRATION.HTML

let userInput = document.getElementById('userInput');

let passwordInput = document.getElementById('passwordInput');

let loginBtn = document.getElementById('loginBtn');

//EVENTO SOBRE EL BOTON DE REGISTER Y FUNCIÓN QUE ALMACENA USUARIO Y CONTRASEÑA EN EL LOCAL STORAGE

loginBtn.onclick = newUser = () =>{
    user = userInput.value;
    
    password = passwordInput.value;

    localStorage.setItem('userName', user);
    
    localStorage.setItem('userPassword', password);
}



