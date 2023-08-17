/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable consistent-return */

const inputCost = document.getElementById('tabcontent__input-slider-cost');
const inputDay = document.getElementById('tabcontent__input-slider-day');
const outputCost = document.querySelector('.input-cost');
const outputDay = document.querySelector('.input-day');

const result = document.querySelector('.result-calc');
const percent = document.querySelector('.percent-calc');

inputCost.addEventListener('input', onInputHandlerCost);
inputDay.addEventListener('input', onInputHandlerDay);

// 2 range ==========================================

const inputCostSecond = document.getElementById('tabcontent__input-slider-cost-2');
const inputDaySecond = document.getElementById('tabcontent__input-slider-day-2');
const outputCostSecond = document.querySelector('.input-cost-2');
const outputDaySecond = document.querySelector('.input-day-2');

const resultSecond = document.querySelector('.result-calc-2');
const percentSecond = document.querySelector('.percent-calc-2');

inputCostSecond.addEventListener('input', onInputHandlerCost);
inputDaySecond.addEventListener('input', onInputHandlerDay);

let dayNumber = 20;

function onInputHandlerCost(e) {
  let number = Number(e.target.value);
  outputCost.innerHTML = `${e.target.value} <span>₽</span>`;
  outputCostSecond.innerHTML = `${e.target.value} <span>₽</span>`;
  resultOutput(number);
  percentOutput();
}

function onInputHandlerDay(e) {
  dayNumber = Number(e.target.value);
  outputDay.innerHTML = `${e.target.value} <span>дней</span>`; outputDaySecond.innerHTML = `${e.target.value} <span>дней</span>`;
}

function resultOutput(num) {
  let yearlyPercent = (0.04 * 365) / 100;
  let sumPercent = ((num * yearlyPercent * dayNumber) / 365) + num;
  result.innerHTML = `${sumPercent.toFixed(0)} <span>₽</span></p>`;
  resultSecond.innerHTML = `${sumPercent.toFixed(0)} <span>₽</span></p>`;
}

function percentOutput() {
  percent.innerHTML = '0.4% <span>в день</span></p>';
  percentSecond.innerHTML = '0.4% <span>в день</span></p>';
}
