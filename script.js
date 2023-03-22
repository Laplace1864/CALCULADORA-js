window.addEventListener('load', () => {

    const keyButtons = document.getElementsByClassName('keypad-button');
    const display = document.querySelector('.calculator-display');

    //Investigar sobre los get elements//

    const keyButtonsArray = Array.from(keyButtons);

    //Array generico = HTML Colection//

    keyButtonsArray.forEach((button)=>{
        button.addEventListener('click', ()=> {
            //console.log(button)
            calculadora(display, button)
        });
    });
    //Consultar que es un Arrow Function//
});

function calculadora(display, button){
    switch (button.innerHTML){
        case 'C':
            borrar(display);
        break;
        case '=':
            calcular(display);
        break;
        default:
            actualizar(display, button)
        break;  
    }
}

function calcular (display){
    display.innerHTML = eval(display.innerHTML)
}

function actualizar (display, button){
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar (display){
    if (display.innerHTML != 0){
        display.innerHTML = 0;
    }
}