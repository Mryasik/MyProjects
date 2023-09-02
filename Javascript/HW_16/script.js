function findFibanachiNumber() {
    let checkInteger = true;
    let numberIndex;
    let firstNumber = 0;
    let secondNuber = 1;
    let result = 0;
   
        do {
        numberIndex = prompt('Number?');

    } while (numberIndex === null || isNaN(+numberIndex) || numberIndex === '' || numberIndex === ' ')


    if(numberIndex == 0) {
        alert(firstNumber);
        return;
    }

    if(numberIndex == 1 || +numberIndex == -1) {
        alert(secondNuber);
        return;
    }

    if(numberIndex > 0) {
        for (let i = +numberIndex - 1; i > 0; i-- ) {
            result = firstNumber + secondNuber;
            firstNumber = secondNuber;
            secondNuber = result;
        }
    } else {
        for (let i = +numberIndex + 1; i < 0; i++ ) {
            debugger
            result = firstNumber - secondNuber;
            firstNumber = secondNuber;
            secondNuber = result;
            debugger
        }
    }

    alert(result);

}
  
findFibanachiNumber();
