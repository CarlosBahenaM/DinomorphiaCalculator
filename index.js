let temp = 0;
let diffLifepoints = 0;
let punisherAtk = 3500;
let newPunisherAtk = punisherAtk + diffLifepoints;
let historyLpDino = [];
let historyLpOponent = [];

const registerOperation = (operacion, valor) => ({operacion, valor});


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

const winMsg = document.querySelector('.win-msg');
const winMsgContent = document.querySelector('.win-msg_content');
const buttonResetForWin = document.querySelector('.reset-for-win');

const buttonKentreAtk = document.querySelector('.button-kentre-atk');
const KentreginaAtkResult = document.querySelector('.dinomorphia-result__kentre');
const buttonPunisherAtk = document.querySelector('.button-punisher-atk');
const punisherAtkresult = document.querySelector('.dinomorphia-result__punisher');
const buttonPunisherReset = document.querySelector('.button-punisher-reset');
const buttonKentreDmg = document.querySelector('.button-kentre-dmg');
const kentreRexAtkDmg = document.querySelector('.dinomorphia-result__dmgkentre');

const buttonBackDino = document.querySelector('.button-back-dino');
const buttonBackOponent = document.querySelector('.button-back-oponent');
const buttonReset = document.querySelector('.button-reset');



const buttonC = document.querySelector('.button-c');
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

function showMsgWin(player) {
  switch (player) {
    case 'dinomorphia':
      winMsgContent.textContent = 'Ha ganado el dinochato, mirenlo, es todo un fornicador'
      break;
    case 'oponent':
      winMsgContent.textContent = 'Le has ganado al dinochato, mirenlo, es todo un fornicador'
      break;
    }
  winMsg.classList.remove('inactive');
}

function resetParcial() {
    temp = 0;
    diffLifepoints = 0;
    punisherAtk = 3500;
    lifePointsDino.value = 8000;
    lifePointsOponent.value = 8000;
    newPunisherAtk = punisherAtk + diffLifepoints;
    historyLpDino = [];
    historyLpOponent = [];
    display.value = '';
    KentreginaAtkResult.textContent = '';
    punisherAtkresult.textContent = '';
};


// funcion que registra las operaciones en el array para hacer un back
function pushOperationDino() {
  if(historyLpDino.length === 0 || lifePointsDino.value !== historyLpDino[historyLpDino.length - 1]){
    historyLpDino.push(lifePointsDino.value);
    console.log(historyLpDino);
  }
}


function pushOperationOponent() {
  if(historyLpOponent.length === 0 || lifePointsOponent.value !== historyLpOponent[historyLpOponent.length - 1]){
    historyLpOponent.push(lifePointsOponent.value);
    console.log(historyLpOponent);  
  }
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
});

// BOTONES OPERADORES POR PLAYER


buttonDinoAdd.addEventListener('click', () => {
  let operador = 'suma';
  pushOperationDino();
  let lifepoints = parseInt(lifePointsDino.value) + parseInt(temp);
  lifePointsDino.value = lifepoints;
  calculateAtkKentregina();
display.value = "";
})

buttonDinoRest.addEventListener('click', () => {
  let gg = 'dinomorphia';
  pushOperationDino();
  let lifepoints = Number(parseInt(lifePointsDino.value) - parseInt(temp));
  if(lifepoints <= 0) {
      lifepoints = 0;
      lifePointsDino.value = lifepoints;
      display.value = "";
      showMsgWin(gg);
    } else {
    lifePointsDino.value = lifepoints

    display.value = "";
    }
    calculateAtkKentregina();
  })

buttonDinoHalf.addEventListener('click', () => {
    pushOperationDino();
    let lifePoints = parseInt(lifePointsDino.value / 2);
    if(lifePoints === 0) {
      lifePoints = 1;
      }
    lifePointsDino.value = lifePoints;
    display.value = "";
    temp = lifePoints;
    calculateAtkKentregina();
    });

  //oponent


      //suma
  buttonOpAdd.addEventListener('click', () => {
    let operador = 'suma';
    pushOperationOponent();
    let lifepoints = parseInt(lifePointsOponent.value) + parseInt(temp);
    lifePointsOponent.value = lifepoints
    display.value = "";
  })
    
                //resta
  buttonOpRest.addEventListener('click', () => {
    let gg = 'oponent';
    pushOperationOponent();
    let lifepoints = parseInt(lifePointsOponent.value) - parseInt(temp);
    if(lifepoints <= 0) {
      lifepoints = 0;
      lifePointsOponent.value = lifepoints
      display.value = "";
      showMsgWin(gg);
      } else {
      lifePointsOponent.value = lifepoints
      display.value = "";
      }
    });
  
    //half
  buttonOpHalf.addEventListener('click', () => {
    let operador = 'half';
    pushOperationOponent();
    let lifePoints = parseInt(lifePointsOponent.value / 2);
    if(lifePoints === 0) {
      lifePoints = 1;
    }
    lifePointsOponent.value = lifePoints;
    display.value = "";
    temp = lifePoints;
  });

// botones clear y C

buttonC.addEventListener('click', () => {
  let valueModify = display.value.split('');
  valueModify.pop();
  display.value = valueModify.join('');
  temp = display.value;
})

buttonClear.addEventListener('click', () => {
display.value = "";
temp = 0;
});


// BOTONES DE CALCULO DE DINOMORPHIA
buttonPunisherAtk.addEventListener('click', () => {
  diffLifepoints = (lifePointsOponent.value - lifePointsDino.value);
if (diffLifepoints < 0) {
  diffLifepoints = Math.abs(diffLifepoints);
}
  newPunisherAtk += diffLifepoints;
  punisherAtkresult.textContent = newPunisherAtk;
});

buttonPunisherReset.addEventListener('click', () => {
  newPunisherAtk = punisherAtk;
  punisherAtkresult.textContent = punisherAtk;
})

buttonKentreDmg.addEventListener('click', () => {
display.value = 0;
// console.log( KentreginaAtkResult.textContent - lifePointsDino.value);
    let DmgCalculate = KentreginaAtkResult.textContent - lifePointsDino.value;
    DmgCalculate < 0 ? ( (temp = 0), (display.value = 0))
                     : (display.value = DmgCalculate, temp = DmgCalculate);
    }
  )

  //BOTONES BACK Y RESET

buttonReset.addEventListener('click', resetParcial);

buttonBackDino.addEventListener('click', () => {
})

buttonBackDino.addEventListener('click', () => {
  let reverse = historyLpDino.pop();
  if(reverse !== undefined){
    lifePointsDino.value = Number(reverse);
  }
  calculateAtkKentregina();
})

    

buttonBackOponent.addEventListener('click', () => {
  let reverse = historyLpOponent.pop();
  if(reverse !== undefined) {
    lifePointsOponent.value = Number(reverse);
  }
})



//boton despues de victoria

buttonResetForWin.addEventListener('click', () => {
  resetParcial();
  winMsg.classList.add('inactive');
})