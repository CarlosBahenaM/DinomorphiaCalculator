let displayValue = 0;
let valorA = 0;
let valorB = 0;
let temp = 0;
const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const button3 = document.querySelector('.button-3');
const button4 = document.querySelector('.button-4');
const button5 = document.querySelector('.button-5');
const button6 = document.querySelector('.button-6');
const button7 = document.querySelector('.button-7');
const button8 = document.querySelector('.button-8');
const button9 = document.querySelector('.button-9');
const button0 = document.querySelector('.button-0');
const button00 = document.querySelector('.button-00');
const button000 = document.querySelector('.button-000');

const buttonKentreAtk = document.querySelector('.button-kentre-atk');
const buttonPunisherAtk = document.querySelector('.button-punisher-atk');
const buttonKentreDmg = document.querySelector('.button-kentre-dmg');

const buttonBack = document.querySelector('.button-back');
const buttonClear = document.querySelector('.button-clear');

const buttonDinoRest = document.querySelector('.button-dino-rest');
const buttonDinoAdd = document.querySelector('.button-dino-add');
const buttonDinoHalf = document.querySelector('.button-dino-half');

const buttonOpRest = document.querySelector('.button-op-rest');
const buttonOpAdd = document.querySelector('.button-op-add');
const buttonOpHalf = document.querySelector('.button-op-half');

const display =document.querySelector('#input-numbers');

// lifepoints
const lifePointsDino = document.querySelector('.lifepoints-dinoplayer');
const lifePointsOponent = document.querySelector('.lifepoints-oponent');


// BOTONES 1 AL 9

button1.addEventListener('click', () => {
  display.value += button1.textContent;
  temp = Number(display.value);
});
button2.addEventListener('click', () => {
  display.value += button2.textContent;
  temp = Number(display.value);
})
button3.addEventListener('click', () => {
  display.value += button3.textContent;
  temp = Number(display.value);
});
button4.addEventListener('click', () => {
  display.value += button4.textContent;
  temp = Number(display.value);
});
button5.addEventListener('click', () => {
  display.value += button5.textContent;
  temp = Number(display.value);
});
button6.addEventListener('click', () => {
  display.value += button6.textContent;
  temp = Number(display.value);
});
button7.addEventListener('click', () => {
  display.value += button7.textContent;
  temp = Number(display.value);
});
button8.addEventListener('click', () => {
  display.value += button8.textContent;
  temp = Number(display.value);
});
button9.addEventListener('click', () => {
  display.value += button9.textContent;
  temp = Number(display.value);
});
button0.addEventListener('click', () => {
  display.value += button0.textContent;
  temp = Number(display.value);
});
button00.addEventListener('click', () => {
  display.value += button00.textContent;
  temp = Number(display.value);
});
button000.addEventListener('click', () => {
  display.value += button000.textContent;
  temp = Number(display.value);
});

// BOTONES OPERADORES POR PLAYER

buttonDinoAdd.addEventListener('click', () => {
console.log(lifePointsDino.textContent)
})