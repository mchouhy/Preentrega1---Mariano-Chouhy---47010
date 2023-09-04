//FORMULAS DE CONVERSIÓN//

const conversions = [
    { type: "px to rem", factor: 1/16 },
    { type: "rem to px", factor: 16 },
    { type: "px to cm", factor: 1/37.7952755906 },
    { type: "cm to px", factor: 37.7952755906 },
    { type: "rem to cm", factor: 0.42333328},
    { type: "em to px", factor: 16},
    { type: "em to cm", factor: 0.42333328},
]

//ACCESO AL DOM DE INDEX.HTML//

let pxInput = document.getElementById('pxInput');

let remInput = document.getElementById('remInput');

let cmInput = document.querySelector('.cmInput');

let emInput = document.querySelector('.emInput');

let resetBtn = document.getElementById('resetBtn');

let convertBtn = document.getElementById('convertBtn');

//EVENTOS Y FUNCIONES DE LA CALCULADORA DE MEDIDAS//

    //FUNCIÓN QUE ACTIVA LOS CÁLCULOS AL HACER CLICK EN EL BOTÓN CONVERT

convertBtn.addEventListener('click', () => { 
    if(pxInput.value > 0) {
        remInput.value = pxInput.value * 1/16;

        cmInput.value = pxInput.value * 1/37.7952755906;

        emInput.value = pxInput.value * 1/16;

    } else if(remInput.value > 0) {
        pxInput.value = remInput.value * 16;

        cmInput.value = remInput.value * 0.42333328;

        emInput.value = remInput.value;

    } else if(cmInput.value > 0) {
        pxInput.value = cmInput.value * 37.7952755906;

        remInput.value = cmInput.value * 2.3622050220101;

        emInput.value = remInput.value;

    } else if(emInput.value > 0) {
        pxInput.value = emInput.value * 16;

        remInput.value = emInput.value;

        cmInput.value = emInput.value * 0.42333328;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to enter a valid lenght unit value!',
        })
    }
})

    //FUNCIÓN QUE RESETEA LOS INPUTS INGRESADOS AL MOMENTO PREVIO A LA CONVERSIÓN

resetBtn.onclick = resetValue = () => { 
    pxInput.value = "";
    remInput.value = "";
    cmInput.value = "";
    emInput.value = "";
}




















