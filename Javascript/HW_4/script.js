/*Описати своїми словами навіщо потрібні функції у програмуванні.
1) Функції потрібні для структурування коду, наприклад ми можем написати функцію і перевикористовувати її декілька разів не пишучи її поновому, що береже наш час.

Описати своїми словами, навіщо у функцію передавати аргумент.
2)У функції ми використовуємо аргументи для передачі даних або значень у функцію, щоб вона могла виконувати певні операції на цих даних.
Також ми можемо передавати різні аргументи, і отримувати різні вихідні данні.
Тож аргументи використовуються для роботи функції.

Що таке оператор return та як він працює всередині функції?
3)За допомогою оператору return ми повертаємо результат виклику функції,
без return ми отримуємо undefined.
Також після return ми зупиняємо функцію та ігноруємо все що написано далі.

Завдання
*/

function calcul (){
    let firstNumber = +prompt("FirstNumber");
    let secondNumber = +prompt("SecondNumber");
    let typeOfOperation = prompt("typeOfOperation");

    while(isNaN(firstNumber)){
        firstNumber = +prompt("FirstNumber");
    
    }
    while(isNaN(secondNumber)){
        secondNumber = +prompt("SecondNumber");
    
    }
    while(typeOfOperation != "+" && typeOfOperation != "-" && typeOfOperation != "*" && typeOfOperation != "/"){
        typeOfOperation = prompt("typeOfOperation");
    }


    console.log("Над числами " + firstNumber + " і "  + secondNumber + " була проведена операція " + typeOfOperation );
    let result 
    switch (typeOfOperation) {
        case "+":
            result = firstNumber + secondNumber;
            console.log(result);
            break;
        case "-":
            result = firstNumber - secondNumber;
            console.log(result);
            break;
        case "*":
            result = firstNumber * secondNumber;
            console.log(result);
            break;
        case "/":
            result = firstNumber / secondNumber;
            console.log(result);
            break;  
    }
}
calcul()