

let input = document.getElementById('screen');
let selectedAmal = "";
let seleectedAmalOriginal = "";
let numberOne = 0;

function addNumber( number) {
    console.log(number);

    if (input.value.indexOf('.') !==-1 && number === '.'){

    }
    else  {
        if (input.value === '0' && number != '.' || selectedAmal.length > 0){
            input.value = number;
            selectedAmal = "";
        }
        else {
            input.value += number;
        }
    }
}

function action(amal) {
    selectedAmal = amal;
    seleectedAmalOriginal = amal;
    numberOne = input.value;

}

function equal() {
    let numberTwo = input.value;

    let result = '';

    if (seleectedAmalOriginal === 'add'){
        result = parseFloat(numberOne ) + parseFloat(numberTwo);
    }
    else if (seleectedAmalOriginal === 'subtract'){
        result = numberOne - numberTwo;
    }
    else if (seleectedAmalOriginal === 'multiply'){
        result = numberOne * numberTwo;
    }
    else if (seleectedAmalOriginal === 'divide'){
        result = numberOne / numberTwo;
    }
    else if ( seleectedAmalOriginal === 'pow'){
       result = Math.pow(numberOne,numberTwo);
    }
    else if (seleectedAmalOriginal === 'sqrt'){
        result = Math.sqrt(numberOne);
    }


    input.value = result;

}



function clearScreen() {
    input.value = 0;
    numberOne = 0;
    selectedAmal = '';
    seleectedAmalOriginal = '';

}

document.addEventListener('keydown', function (event) {

    if (event.keyCode === 96){
        addNumber(0);
    }
    else if (event.keyCode === 97){
        addNumber(1);
    }
    else if (event.keyCode === 98){
        addNumber(2);
    }
    else if (event.keyCode === 99){
        addNumber(3);
    }
    else if (event.keyCode === 100){
        addNumber(4);
    }
    else if (event.keyCode === 101){
        addNumber(5);
    }
    else if (event.keyCode === 102){
        addNumber(6);
    }
    else if (event.keyCode === 103){
        addNumber(7);
    }
    else if (event.keyCode === 104){
        addNumber(8);
    }
    else if (event.keyCode === 105){
        addNumber(9);
    }
    else if (event.keyCode === 107){
        action('add');
    }
    else if (event.keyCode === 109){
        action('subtract');
    }
    else if (event.keyCode === 106){
        action('multiply');
    }
    else if (event.keyCode === 111){
        action('divide');
    }
    else if (event.keyCode === 13){
        equal();
    }
    else if (event.keyCode === 110){
        addNumber('.');
    }
    else if (event.keyCode === 27){
        clearScreen();
    }
    else if (event.keyCode === 8){
        action('delete');
    }

})