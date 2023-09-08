const btnsAppend = document.querySelectorAll(".btn-append");
const btnClear = document.getElementById("btn-clear");
const btnCalculate = document.getElementById("btn-calculate");
const btnDelete = document.getElementById("btn-delete");

// let anchoPantalla = document.body.clientWidth;
// const divAncho = document.getElementById("width");
// divAncho.textContent=anchoPantalla;
let displayValue = '';

const clearDisplay = ()=> {
    displayValue = '';
    updateDisplay();
}

const deleteCaracter = ()=>{
    displayValue = displayValue.slice(0, -1); // Elimina el último carácter
    updateDisplay();

}

const appendToDisplay = (value) => {
    displayValue += value;
    updateDisplay();
}

const calculate = () => {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

const updateDisplay = () => {
    document.getElementById('display').value = displayValue;
}

btnsAppend.forEach(btn =>{
    btn.addEventListener("click",()=>{
        appendToDisplay(btn.textContent);
    })
})

btnDelete.addEventListener("click", deleteCaracter);

btnCalculate.addEventListener("click", calculate);

btnClear.addEventListener("click", clearDisplay);