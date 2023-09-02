//ARCHIVO JS UTILIZADO PARA LA PRE-ENTREGA 1 y 2. ACTUALMENTE NO APLICA. PARA PRE-ENTREGA 3 VER calculator.js y login.js//

// VARIABLES GLOBALES //

let user = [];

let password = [];

let conversionUnit;

let conversionResult = 0;

const conversions = [
    { type: "px to rem", factor: 1/16 },
    { type: "rem to px", factor: 16 },
    { type: "px to cm", factor: 1/37.7952755906 },
    { type: "cm to px", factor: 37.7952755906 },
]

// FUNCIONES //

function userRegistration() {
    user = prompt("Register a user name");
    while (user.trim() === "") {
        errorAlert('user');
        user = prompt("Register a user name");
    }
    if (user !== "") {
        console.log(`Hello ${user}!`);
        alert(`Hello ${user}!`);
    }
}

function errorAlert(param1) {
    alert(`Error: You have to register a valid ${param1}.`);
}

function passwordRegistration() {
    password = prompt("Register a password");
    while (password.trim() === "") {
        errorAlert('password');
        password = prompt("Register a password");
    }
    if (password !== "") {
        console.log(`Congratulations! You are now registered. Remember that your password is: ${password}.`);
        alert(`Congratulations! You are now registered. Remember that your password is: ${password}. Now click acept and start converting!`);
    }
}

function getUnit() {
    conversionUnit = prompt("Choose what CSS length units you want to convert. Type:\npx to rem\nrem to px\npx to cm\ncm to px");
    while (conversionUnit.trim() === "") {
        errorAlert2('units');
        conversionUnit = prompt("Choose what CSS length units you want to convert. Type:\npx to rem\nrem to px\npx to cm\ncm to px");
    }

    const conversion = conversions.find(conversions => conversions.type === conversionUnit);
    if (conversion) {
        conversionNumber = parseFloat(prompt("Enter the number you want to convert")); 
        while (isNaN(conversionNumber)) {
            errorAlert2('number');
            conversionNumber = parseFloat(prompt("Enter the number you want to convert"));
        }
    }
}

function errorAlert2(param2) {
    alert(`Error: ${user} you have to enter the lenght ${param2} you want to convert as indicated. Try again.`);
}

function conversionCalculator() {
    const conversion = conversions.find(conv => conv.type === conversionUnit);
    if (conversion) {
        conversionResult = conversionNumber * conversion.factor;
        console.log(`${conversionNumber} ${conversion.type.split(" ")[0]} = ${conversionResult} ${conversion.type.split(" ")[2]}.`);
        alert(`${conversionNumber} ${conversion.type.split(" ")[0]} = ${conversionResult} ${conversion.type.split(" ")[2]}.`);
    } else {
        alert(`Error: ${user} you have to enter the length units you want to convert as indicated. Try again.`);
        getUnit();
        conversionCalculator();
    }   
}

//MENSAJE DE BIENVENIDA//

alert("Welcome to Pixel Converter. Your CSS length unit calculator. Disclaimer: for the moment we only work with Pixels, REMs and centimeters.");

//REGISTRO DE USUARIO//

userRegistration();

//REGISTRO DE CONTRASEÑA//

passwordRegistration();

//SOLICITAR DE MEDIDA DE CSS Y VALOR A CONVERTIR//

getUnit();

//CÁLCULO DEL RESULTADO//

conversionResult = 0;

conversionCalculator();

alert(`Thank you ${user} for choosing Pixel Converter. See you next time!`);
