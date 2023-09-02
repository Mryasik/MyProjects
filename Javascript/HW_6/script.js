/*Теоретичні питання

1. Опишіть своїми словами, що таке екранування, і навіщо воно потрібне в мовах програмування

  Екранування – це заміна в тексті спеціальних символів на відповідні текстові підстановки тоді, 
  коли необхідно використовувати такий символ як «звичайний символ мови».
  Екрануючий символ (\) повідомляє інтерпретатору, що символ, 
  що слідує за ним, повинен сприйматися як звичайний символ.

2. Які засоби оголошення функцій ви знаєте?

   function declaration, function expression, стрелочные функции. 

3. Що таке hoisting, як він працює для змінних та функцій?

  Hoisting –  це можливість отримувати доступ до функцій та переміних до того, 
  як вони були створені. Це механізм відноситься лише до оголошення функцій та переміних.*/

// Завдання

function createNewUser(firstName = prompt("firstName"), lastName= prompt("lastName"), birthday = prompt("Enter your date of birth, `dd.mm.yyyy`")) {

    let [day, month, year] = birthday.split(".");
    let userBirthday = new Date(`${year}-${month}-${day}`);

    while (userBirthday >= new Date()) {
        birthday = prompt("Enter your date of birth, `dd.mm.yyyy`");
        let [day, month, year] = birthday.split(".");
        userBirthday = new Date(`${year}-${month}-${day}`);
    }
    return {
        firstName,
        lastName,
        birthday,
        getLogin(){
            let login = this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
            return login;
        },
        getAge(){ 
            let age = new Date().getFullYear() - birthday.slice(6);
            return age;
        },
        getPassword(){
            let password = this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase() + this.birthday.slice(6);
            return password;
        }
    }
}
const newuser = createNewUser();
console.log(newuser)
console.log(newuser.getLogin());
console.log(newuser.getAge());
console.log(newuser.getPassword());



// Решение № 2
// function createNewUser(firstName = prompt("firstName"), lastName= prompt("lastName"), birthday = prompt("Enter your date of birth, `dd.mm.yyyy`")) {

//     return {
//         firstName,
//         lastName,
//         birthday,
//         getLogin(){
//             let login = this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
//             return login;
//         },
//         getAge(){ 
//             let age = new Date().getFullYear() - birthday.slice(6);
//             if (age<0){
//                 return `До Вашого народження залишилось років ${-age}`;
//             } else{
//             return age;
//             }
//         },
//         getPassword(){
//             let password = this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase() + this.birthday.slice(6);
//             return password;
//         }
//     }
// }

// const newuser = createNewUser();
// console.log(newuser)
// console.log(newuser.getLogin());
// console.log(newuser.getAge());
// console.log(newuser.getPassword());

