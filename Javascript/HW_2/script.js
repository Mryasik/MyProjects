/*Теоретичні питання:
Які існують типи даних у Javascript?
1) Існують такі типи данних в Javascript
-Число (number)
-BigInt
-Рядок (string)
-Логічний тип (boolean)
-null
-undefined
-symbol
-object
У чому різниця між == і ===?
2) == використовується для порівняння двох змінних, але він ігнорує тип даних змінної, тоді як === використовується для порівняння двох змінних, але цей оператор також перевіряє тип даних і порівнює два значення.
Що таке оператор?
3) JS Має бінарні унарні та теранарні оператори.

У мові JavaScript існуе 8 класів операторів:
Арифметичні оператори JavaScript
Побітові оператори JavaScript
Логічні оператори JavaScript
Оператори порівняння JavaScript
Рядкові оператори JavaScript
Оператори присвоення JavaScript
Умовні оператори JavaScript
Додаткові оператори JavaScript

Кожний оператор має свій пріоритет.

*/


let userName = prompt("Your Name");
let userAge = +prompt("Your Age");


while(userName == null || userName == ""){
    userName = prompt("Your Name");
}
while(userAge == 0 || isNaN(userAge)){
    userAge = +prompt("Your Age");
}



if(userAge<18){
    alert("You are not allowed to visit this website");
}else if(userAge >= 18 && userAge <= 22){
    let typeConfirm = confirm("Are you sure you want to continue?");
    if(typeConfirm == true){
        alert("Welcome, " + userName);
    } else{
        alert("You are not allowed to visit this website");
    }
} else{
    alert("Welcome, " + userName);
}
