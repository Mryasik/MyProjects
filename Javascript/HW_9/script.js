/*Теоретичні питання
1) Опишіть, як можна створити новий HTML тег на сторінці.

- document.createElement() - створення елементів
- element.insertAdjacentHTML(position, text) - Це коли існує елемент в ХТМЛ і ми можемо вставити новий відносно нього. Куди (beforebegin/afterbegin/beforeend/afterend)та що вставляємо наприклад '<p>новий абзац</p>'
2) Опишіть, що означає перший параметр функції insertAdjacentHTML і опишіть можливі варіанти цього параметра.
 
- element.insertAdjacentHTML(position, text) - Куди (beforebegin/afterbegin/beforeend/afterend)та що вставляємо наприклад '<p>новий абзац</p>'

element - елемент DOM, на якому ви хочете вставити HTML-код.
position - рядок, що вказує позицію, де потрібно вставити HTML-код. Існує чотири можливі значення:
'beforebegin': Вставити HTML перед елементом element.
'afterbegin': Вставити HTML як дочірній елемент, першим в списку дочірніх елементів element.
'beforeend': Вставити HTML як дочірній елемент, останнім в списку дочірніх елементів element.
'afterend': Вставити HTML після елемента element.
text - рядок, який містить HTML-код, який необхідно вставити.

3) Як можна видалити елемент зі сторінки?

- Метод remove() - звертаємося до самого елемента
- Метод parentNode.removeChild(element) - звертаємося до батьківського

*/

  function createUlFromArray(arr, posiion = document.body) {
            const arrUl = document.createElement('ul');

            arr.forEach((elem) => {
                const arrUlItem = document.createElement('li');
                
                arrUlItem.textContent = elem;

                arrUl.appendChild(arrUlItem);
            });

            posiion.appendChild(arrUl);
        }

        const myArray = ['Огірок', 'капуста', 'помідор'];
        createUlFromArray(myArray); 

// Додаткове

// function createUlFromArray(arr, parent = document.body) {
//     const arrUl = document.createElement('ul');

//     arr.forEach((elem) => {
//         const arrUlItem = document.createElement('li');

//         if (Array.isArray(elem)) {
//             createUlFromArray(elem, arrUlItem);
//         } else {
//             arrUlItem.textContent = elem;
//         }

//         arrUl.appendChild(arrUlItem);
//     });

//     parent.appendChild(arrUl);
// }

// const myArray = [' Огірок', ['капуста', 'помідор'], 'Огірок', ['помідор', 'капуста']];

// createUlFromArray(myArray);