const input1 = document.getElementById("inputNumber1");
const input2 = document.getElementById("inputNumber2");
const resultado = document.getElementById("resultado");
const sumarButton = document.getElementById("sumar");

const enableButton = () => {
    if (
        input1.value.trim() !== "" &&
        input2.value.trim() !== "" &&
        !isNaN(input1.value) &&
        !isNaN(input2.value)
    ) {
        sumarButton.disabled = false;
    } else {
        resultado.innerHTML = 0;
        sumarButton.disabled = true;
    }
};

const suma = () => {
    resultado.innerHTML = parseInt(input1.value) + parseInt(input2.value);
};

const clearInput = (inputId) => {
    document.getElementById(inputId).value = "";
    enableButton();
};