/*Теоретичні питання
Опишіть своїми словами що таке Document Object Model (DOM)
1) DOM - об'єктна браузерна модель документа (Document Object Model).
DOM можна уявити як дерево, де кожен елемент сторінки представлений об'єктом з унікальним ідентифікатором, відомим як "вузол". Вузли утворюють ієрархію, що відображає структуру сторінки.
Ці об'єкти можна змінювати, додавати або видаляти, що дозволяє динамічно змінювати вміст сторінки 

Яка різниця між властивостями HTML-елементів innerHTML та innerText?
2) innerHTML - дозволяє вставляти теги и текст
innerText - дозволяє вставляти текст без тегів(теги будуть як текст)

Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?
3)
1.getElementById - id
2. getElementByClassName - class
3. getElementByTagName - tag
4. querySelector - id class tag повертає перший 
5. querySelectorAll - id class tag повертає всі 

Завдання
Код для завдань лежить в папці project.

Знайти всі параграфи на сторінці та встановити колір фону #ff0000

Знайти елемент із id="optionsList". Вивести у консоль. Знайти батьківський елемент та вивести в консоль. Знайти дочірні ноди, якщо вони є, і вивести в консоль назви та тип нод.

Встановіть в якості контента елемента з класом testParagraph наступний параграф - This is a paragraph

Отримати елементи, вкладені в елемент із класом main-header і вивести їх у консоль. Кожному з елементів присвоїти новий клас nav-item.

Знайти всі елементи із класом section-title. Видалити цей клас у цих елементів.*/ 


// Знайти всі параграфи на сторінці та встановити колір фону #ff0000

const allPa = document.getElementsByTagName("p");
for (const elem of allPa) {
    elem.style.background = "#ff0000";
}


// Знайти елемент із id="optionsList". Вивести у консоль. Знайти батьківський елемент та вивести в консоль. Знайти дочірні ноди, якщо вони є, і вивести в консоль назви та тип нод.

const optionListElement = document.getElementById("optionsList");

const parenNodes = optionListElement.parentNode;
console.log(parenNodes);

const childNodes = optionListElement.childNodes;
console.log(childNodes);
if (optionListElement.hasChildNodes){
    console.log(childNodes)
    for (const elem of childNodes) {
        console.log(elem.nodeName);
        console.log(elem.nodeType);
    }
}else{
    console.log("Немає дочірних нод")
}



// Встановіть в якості контента елемента з класом testParagraph наступний параграф - This is a paragraph

const paragraphContent = document.getElementById("testParagraph");

paragraphContent.innerText = "This is a paragraph";

console.log(paragraphContent.innerText );

// Або додаємо

// paragraphContent.innerText += "This is a paragraph";

// console.log(paragraphContent.innerText );


// Або додаємо p з контентом 

// paragraphContent.innerHTML = "<p> This is a paragraph <p/>";

// console.log(paragraphContent.innerText );



// Отримати елементи, вкладені в елемент із класом main-header і вивести їх у консоль. Кожному з елементів присвоїти новий клас nav-item.

// const headerElement = document.getElementsByClassName("main-header");
// let headerElementChildren = headerElement.children;
//     for (let elem of headerElementChildren) {
//         console.log(elem);
//     }

const headerElements = document.querySelectorAll(".main-header");

for (const headerElement of headerElements) {
  const headerElementChildren = headerElement.children;
  for (const elem of headerElementChildren) {
    console.log(elem);
    elem.classList.add("nav-item");
  }
}
    


// Знайти всі елементи із класом section-title. Видалити цей клас у цих елементів.*/ 

const sectionParafraph = document.querySelectorAll(".section-title");
console.log(sectionParafraph);
for (const elem of sectionParafraph) {
    elem.classList.remove("section-title");
  }
