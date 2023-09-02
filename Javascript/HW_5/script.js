

/*Теоретичні питання
Опишіть своїми словами, що таке метод об'єкту
1) Метод об'єкта це функція яка належить об'єкту і може бути викликана для виконання певної дії або обробки даних, пов'язаних з цим об'єктом. 
Методи дозволяють об'єктам виконувати операції, обробляти дані, змінювати свої властивості або повертати значення

Який тип даних може мати значення властивості об'єкта?
2) Може бути будь яким типом даним


Об'єкт це посилальний тип даних. Що означає це поняття?
3)це означає що коли ми створюємо обьект створюється коробка куди ми записуємо всі значення та методи.
Коли наприклда ми хочемо створити новий обєкт та присвоюємо йому == старий обєкт то ці два значення силаються на одну коробку.
І при зміні значень одного ми будемо змінювати значення других.

*/

/*Реалізувати функцію створення об'єкта "юзер". Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

Технічні вимоги:
Написати функцію createNewUser(), яка буде створювати та повертати об'єкт newUser.
При виклику функція повинна запитати ім'я та прізвище.
Використовуючи дані, введені юзером, створити об'єкт newUser з властивостями firstName та lastName.
Додати в об'єкт newUser метод getLogin(), який повертатиме першу літеру імені юзера, з'єднану з прізвищем, все в нижньому регістрі (наприклад, Ivan Kravchenko → ikravchenko).
Створити юзера за допомогою функції createNewUser(). Викликати у цього юзера функцію getLogin(). Вивести у консоль результат виконання функції.
Необов'язкове завдання підвищеної складності
Зробити так, щоб властивості firstName та lastName не можна було змінювати напряму. Створити функції-сеттери setFirstName() та setLastName(), які дозволять змінити дані властивості.*/




// function createNewUser(firstName = prompt("firstName"), lastName= prompt("lastName") ) {

//     return {
//         firstName,
//         lastName,
//         getLogin(){
//             let login = this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
//             console.log(login);
//             return login;
//         }
//     }
// }

// const newuser = createNewUser();
// console.log(newuser)
// newuser.getLogin();

// const newuser1 = createNewUser();
// console.log(newuser1)
// newuser1.getLogin();




function createNewUser() {

    return {
        _firstName: prompt("firstName"),
        _lastName: prompt("lastName"),
        getLogin(){
            return (this._firstName.charAt(0) + this._lastName).toLowerCase(); 
        },
        getFirstName(){
            return this._firstName;
        },
        getLastName(){
            return this._lastName;
        },
        setFirstName(value){
            this._firstName = value;
        },
        setLastName(value){
            this._lastName = value;
        },
        
    }
}

const newuser = createNewUser();
console.log(newuser);
console.log(newuser.getLogin());
newuser.setFirstName("Yarik");
console.log(newuser.getFirstName());
newuser._firstName = "hhhhhhh";
console.log(newuser);


// function createNewUser() {
//     const user = {};
//     Object.defineProperty(user,
//         "firstName", {
//             value: prompt("firstName"),
//             // writable: false,
//             configurable: false,
//             enumerable: true,
//         }
//     )
//     user.getFirstName = function (){
//         return this.firstName;
//     },
//     user.getLastName = function (){
//         return this.lastName;
//     },
//     user.setFirstName = function (value){
//         this.firstName = value;
//     },
//     user.setLastName = function (value){
//         this.lastName = value;
//     }
//     return user;
// }


// const newUser = createNewUser();
// newUser.firstName = "Kolya";
// newUser.setFirstName("Ysuadsdasd");
// console.log(newUser);
// console.log(newUser.getFirstName());

// console.log(newuser.getLogin());
// newuser.setFirstName("Yarik");
// console.log(newuser.getFirstName());





