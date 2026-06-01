'use strict';

// Fields
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

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
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

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
  btnNew.classList.remove('emphasize');
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
  dice.classList.add('hidden');
};

const switchWhoIsActiveAfterClickingHoldOrRollingOne = function () {
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
};

const rollDice = function () {
  dice.classList.remove('hidden');
  const randomNum = Math.trunc(Math.random() * 6) + 1;
  const updateCurrentValue = function () {
    if (player0.classList.contains('player--active')) {
      current0Value += randomNum;
      current0.textContent = current0Value;
    } else {
      current1Value += randomNum;
      current1.textContent = current1Value;
    }

    console.log(
      `Dice rolls a ${randomNum}; it is added to the active player's current value.`,
    );
  };
  if (randomNum === 1) {
    console.log('Dice rolls a 1! How unlucky :(');
    dice.src = 'dice-1.png';
    rollOne();
  } else {
    dice.src = `dice-${randomNum}.png`;
    updateCurrentValue();
  }
};

const hold = function () {
  console.log('Player clicked "Hold", current value is added to their score.');
  if (player0.classList.contains('player--active')) {
    score0Value += current0Value;
    score0.textContent = score0Value;
    current0Value = 0;
    current0.textContent = current0Value;
  } else {
    score1Value += current1Value;
    score1.textContent = score1Value;
    current1Value = 0;
    current1.textContent = current1Value;
  }
  checkForWinner();
  switchWhoIsActiveAfterClickingHoldOrRollingOne();
};

const rollOne = function () {
  if (player0.classList.contains('player--active')) {
    current0Value = 0;
    current0.textContent = current0Value;
  } else {
    current1Value = 0;
    current1.textContent = current1Value;
  }
  switchWhoIsActiveAfterClickingHoldOrRollingOne();
};

const checkForWinner = function () {
  if (score0Value >= 100) {
    document.querySelector('body').style.backgroundColor = 'green;';
    console.log('Player 1 Won!');
    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');
    btnNew.classList.add('emphasize');
    dice.classList.add('hidden');
  } else if (score1Value >= 100) {
    document.querySelector('body').style.backgroundColor = 'green;';
    console.log('Player 2 Won!');
    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');
    btnNew.classList.add('emphasize');
    dice.classList.add('hidden');
  }
};

// Event Handlers
btnNew.addEventListener('click', newGame);
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);
