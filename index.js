let displayValue = 0;
let valorA = 0;
let valorB = 0;
let temp = 0;
let diffLifepoints = 0;
let punisherAtk = 3500;
let newPunisherAtk = punisherAtk + diffLifepoints;
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
const KentreginaAtkResult = document.querySelector('.dinomorphia-result__kentre');
const buttonPunisherAtk = document.querySelector('.button-punisher-atk');
const punisherAtkresult = document.querySelector('.dinomorphia-result__punisher');
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
let lifePointsDino = document.querySelector('.lifepoints-dinoplayer');
let lifePointsOponent = document.querySelector('.lifepoints-oponent');

// funcion que calcula atk de kentregina
function calculateAtkKentregina() {

  let kentreginaAtk = 4000;
  let newKentreginaAtk = kentreginaAtk - lifePointsDino.value;
  if(newKentreginaAtk < 0) {
    newKentreginaAtk = 0;
  }
  KentreginaAtkResult.textContent = newKentreginaAtk;
}

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
  console.log(display.value);
});

// BOTONES OPERADORES POR PLAYER
      //dinomorphia
            //suma
buttonDinoAdd.addEventListener('click', () => {
let lifepoints = parseInt(lifePointsDino.value) + parseInt(temp);
lifePointsDino.value = lifepoints
display.value = "";
calculateAtkKentregina()
})

            //resta
buttonDinoRest.addEventListener('click', () => {
  let lifepoints = parseInt(lifePointsDino.value) - parseInt(temp);
  if(lifepoints <= 0) {
      lifepoints = 0;
      lifePointsDino.value = lifepoints
      display.value = "";
      alert('Ha perdido el Dinochato');
    } else {

      lifePointsDino.value = lifepoints
      display.value = "";
    }
    calculateAtkKentregina();
  })

  buttonDinoHalf.addEventListener('click', () => {
    let lifePoints = parseInt(lifePointsDino.value / 2);
    if(lifePoints === 0) {
      lifePoints = 1;
    }
    lifePointsDino.value = lifePoints;
    display.value = "";
    calculateAtkKentregina();
    });

  //oponent


      //suma
  buttonOpAdd.addEventListener('click', () => {
    let lifepoints = parseInt(lifePointsOponent.value) + parseInt(temp);
    lifePointsOponent.value = lifepoints
    display.value = "";
    })
    
                //resta
  buttonOpRest.addEventListener('click', () => {
    let lifepoints = parseInt(lifePointsOponent.value) - parseInt(temp);
    if(lifepoints <= 0) {
      lifepoints = 0;
      lifePointsOponent.value = lifepoints
      display.value = "";
      alert('Los DinoFornicadores ganaron');
    } else {
  
      lifePointsOponent.value = lifepoints
      display.value = "";
    }
    })
  
    //half
    buttonOpHalf.addEventListener('click', () => {
      let lifePoints = parseInt(lifePointsOponent.value / 2);
      if(lifePoints === 0) {
        lifePoints = 1;
      }
      lifePointsOponent.value = lifePoints;
      display.value = "";
      });

// botones clear y back

buttonClear.addEventListener('click', () => {
display.value = "";
temp = 0;
});

buttonPunisherAtk.addEventListener('click', () => {
  diffLifepoints = (lifePointsOponent.value - lifePointsDino.value);
if (diffLifepoints < 0) {
  diffLifepoints = Math.abs(diffLifepoints);
}
  newPunisherAtk += diffLifepoints;
  punisherAtkresult.textContent = newPunisherAtk;
});
