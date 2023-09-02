/*
Теоретичні питання
Описати своїми словами у кілька рядків, навіщо у програмуванні потрібні цикли.
1)Цикли в програмуванні використовуються для повторення певних дій або виконання блоку коду декілька разів. 
Тобто ми задаемо умови и поки умова не буде виконана true то вона буде повторюватися.
Опишіть у яких ситуаціях ви використовували той чи інший цикл в JS.
2)Найлегший приклад вивсети в консоль цифри від 1-10. це for
Також більш реальна умова, коли треба перевірити коректність введення данних це while.
Що таке явне та неявне приведення (перетворення) типів даних у JS?
3) Явне приведення типів відбувається за допомогою вбудованих функцій або операторів, які вказують явно на зміну типу даних.
включають:

parseInt(): Приводить рядок до цілого числа.
parseFloat(): Приводить рядок до числа з плаваючою точкою.
Number(): Приводить значення до числового типу.
String(): Приводить значення до рядкового типу.
Boolean(): Приводить значення до булевого типу.

Неявне приведення типів відбувається автоматично JavaScript під час виконання операторів або виразів. 
Наприклад:
переведення в String
let num = 25;
typeof(""+num);
`${num}`;

Переведення в Number
let str = "123"
+str


*/

// Завдання


let userNum = +prompt("Your Number");

while(!Number.isInteger(userNum)){
    userNum = +prompt("Your Number")
}
for(let i = 0; i <=userNum ; i++ ){
    if(i % 5 != 0){
        continue
    } else if(userNum<5){
        console.log("Sorry, no numbers");
    } else{
        console.log(i);
    }
}

//Додаткове завдання Рішення без інтернету

// let m = +prompt("Your M Number");
// let n = +prompt("Your N Number");

// while(m >= n){
//     alert("M must be less then N")
//     m = +prompt("Your M Number");
//     n = +prompt("Your N Number");
// }

// if(n == 2){
//     console.log(2);
// } else if(n == 3){
//     console.log(2);
//     console.log(3);
// } else if(n == 4){
//         if(m <= 2){
//             console.log(2);
//             console.log(3);
//         } else if(m == 3){
//             console.log(3);
//         }
// } else if (n == 5){
//     if(m == 2){
//         console.log(2);
//         console.log(3);
//         console.log(5);
//     }else if (m == 3){
//         console.log(3);
//         console.log(5);
//     } else if (m == 4){
//         console.log(5);
//     }
// }else if (n > 5){
//     console.log(2);
//     console.log(3);
//     console.log(5);
//     for (let i = m; i <= n; i++) {
//             if(i==1 || i % 2 == 0 || i % 3 == 0 || i % 5 == 0){
//                 continue
//             }else{
//                 console.log(i);
//             }
//         }
// }

//Додаткове завдання Рішення з допомогою інтернету

// function isPrime(num) {
//     if (num < 2) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   function getPrimesInRange() {
//     while (true) {
//       const m = parseInt(prompt("Введіть число m:"));
//       const n = parseInt(prompt("Введіть число n:"));
  
//       if (isNaN(m) || isNaN(n)) {
//         console.log("Помилка: Введені значення повинні бути числами. Спробуйте знову.");
//         continue;
//       }
  
//       if (m >= n) {
//         console.log("Помилка: m повинно бути менше n. Спробуйте знову.");
//         continue;
//       }
  
//       console.log(`Прості числа в діапазоні від ${m} до ${n}:`);
//       for (let num = m; num <= n; num++) {
//         if (isPrime(num)) {
//           console.log(num);
//         }
//       }
//       break;
//     }
//   }
  
//   getPrimesInRange();