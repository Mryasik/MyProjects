/*Теоретичні питання
Опишіть своїми словами різницю між функціями setTimeout() і setInterval()`.
1) setTimeout() - робить 1 раз через інтервал, setInterval() - робить бескінчено раз через інтервал.
Що станеться, якщо в функцію setTimeout() передати нульову затримку? Чи спрацює вона миттєво і чому?
2) Якщо в setTimeout() передати нульову затримку, то вона не спрацює миттєво, бо спочатку считається весь код,а потім викликається стек викликів.
Чому важливо не забувати викликати функцію clearInterval(), коли раніше створений цикл запуску вам вже не потрібен?
3) Бо він зупиняє інтервал, який якщо його не зупинити може продовжуватись*/



const images = document.querySelectorAll('.image-to-show');

let currentIndex = 0;
let intervalId;

images.forEach((image, index) => {
  if (index === currentIndex) {
    image.style.display = 'block';
  } else {
    image.style.display = 'none';
  }
});

function changeImage() {
  images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = 'block';
}

function startCycle() {
  if (intervalId) return;
  intervalId = setInterval(changeImage, 3000);
}

function stopCycle() {
  clearInterval(intervalId);
  intervalId = null;
}

const startButton = document.createElement('button');
startButton.textContent = 'Відновити показ';
startButton.addEventListener('click', startCycle);

const stopButton = document.createElement('button');
stopButton.textContent = 'Припинити';
stopButton.addEventListener('click', stopCycle);

const divImg = document.querySelector('.images-wrapper');


divImg.after(stopButton);
divImg.after(startButton);


startCycle();
