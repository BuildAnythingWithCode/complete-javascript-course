'use strict';

// Fields
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

// Images
const dice = document.querySelector('img');

// Values
let score0Value = 0;
let score1Value = 0;
let current0Value = 0;
let current1Value = 0;
score0.textContent = score0Value;
score1.textContent = score1Value;
current0.textContent = current0Value;
current1.textContent = current1Value;

// Buttons
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

// Functions
const newGame = function () {
  console.log('You clicked New Game.');
  score0Value = 0;
  score1Value = 0;
  current0Value = 0;
  current1Value = 0;
  score0.textContent = score0Value;
  score1.textContent = score1Value;
  current0.textContent = current0Value;
  current1.textContent = current1Value;
  newGameBtn.classList.remove('emphasize');
  rollDiceBtn.classList.remove('hidden');
  holdBtn.classList.remove('hidden');
  dice.classList.add('hidden');
};

const rollDice = function () {
  dice.classList.remove('hidden');
  const randomNum = Math.trunc(Math.random() * 6) + 1;
  const updateCurrentValue = function () {
    current0Value = randomNum + current0Value;
    current0.textContent = current0Value;
    console.log(
      `Dice rolls a ${randomNum}; it is added to the active player's current value.`,
    );
  };
  if (randomNum === 1) {
    console.log('Dice rolls a 1! How unlucky :(');
    dice.src = 'dice-1.png';
    rollOne();
  } else {
    if (randomNum === 2) {
      dice.src = 'dice-2.png';
      updateCurrentValue();
    } else if (randomNum === 3) {
      dice.src = 'dice-3.png';
      updateCurrentValue();
    } else if (randomNum === 4) {
      dice.src = 'dice-4.png';
      updateCurrentValue();
    } else if (randomNum === 5) {
      dice.src = 'dice-5.png';
      updateCurrentValue();
    } else if (randomNum === 6) {
      dice.src = 'dice-6.png';
      updateCurrentValue();
    }
  }
};

const hold = function () {
  console.log(
    'You clicked Hold, current value is added to active player score.',
  );
  score0Value = score0Value + current0Value;
  score0.textContent = score0Value;
  current0Value = 0;
  current0.textContent = current0Value;
  checkForWinner();
  // switch active player css class to other player!
};

const rollOne = function () {
  current0Value = 0;
  current0.textContent = current0Value;
  // switch active player css class to other player!
};

const checkForWinner = function () {
  if (score0Value >= 100) {
    document.querySelector('body').style.backgroundColor = 'green;';
    console.log('Player 1 Won!');
    rollDiceBtn.classList.add('hidden');
    holdBtn.classList.add('hidden');
    newGameBtn.classList.add('emphasize');
    dice.classList.add('hidden');
  } else if (score1Value >= 100) {
    document.querySelector('body').style.backgroundColor = 'purple;';
    console.log('Player 2 Won!');
    rollDiceBtn.classList.add('hidden');
    holdBtn.classList.add('hidden');
    newGameBtn.classList.add('emphasize');
    dice.classList.add('hidden');
  }
};

// Event Handlers
newGameBtn.addEventListener('click', newGame);
rollDiceBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', hold);
