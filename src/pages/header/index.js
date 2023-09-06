import './burger';

const inputCost = document.getElementById('tabcontent__input-slider-cost');
const inputDay = document.getElementById('tabcontent__input-slider-day');
const outputCost = document.querySelector('.input-cost');
const outputDay = document.querySelector('.input-day');
const result = document.querySelector('.result-calc');
const percent = document.querySelector('.percent-calc');

const inputCostSecond = document.getElementById('tabcontent__input-slider-cost-2');
const inputDaySecond = document.getElementById('tabcontent__input-slider-day-2');
const outputCostSecond = document.querySelector('.input-cost-2');
const outputDaySecond = document.querySelector('.input-day-2');
const resultSecond = document.querySelector('.result-calc-2');
const percentSecond = document.querySelector('.percent-calc-2');

inputCost.addEventListener('input', onInputHandlerCost);
inputDay.addEventListener('input', onInputHandlerDay);
inputCostSecond.addEventListener('input', onInputHandlerCostSecond);
inputDaySecond.addEventListener('input', onInputHandlerDaySecond);

let dayNumber = 20;

function onInputHandlerCost(e) {
  let number = Number(e.target.value);
  outputCost.innerHTML = `${number.toLocaleString()} <span>₽</span>`;
  resultOutput(number, dayNumber);
}

function onInputHandlerDay(e) {
  dayNumber = Number(e.target.value);
  outputDay.innerHTML = `${dayNumber} <span>дней</span>`;
  resultOutput(Number(inputCost.value), dayNumber);
}

function onInputHandlerCostSecond(e) {
  let number = Number(e.target.value);
  outputCostSecond.innerHTML = `${number.toLocaleString()} <span>₽</span>`;
  resultOutput(number, dayNumber);
}

function onInputHandlerDaySecond(e) {
  dayNumber = Number(e.target.value);
  outputDaySecond.innerHTML = `${dayNumber} <span>дней</span>`;
  resultOutput(Number(inputCostSecond.value), dayNumber);
}

function resultOutput(cost, days) {
  let yearlyPercent = (0.4 * 365) / 100;
  let sumPercent = (((cost * yearlyPercent * days) / 365) + cost).toFixed(0);
  result.innerHTML = `${sumPercent} <span>₽</span>`;
  resultSecond.innerHTML = `${sumPercent} <span>₽</span>`;
}

onInputHandlerCost({ target: inputCost });
onInputHandlerDay({ target: inputDay });
onInputHandlerCostSecond({ target: inputCostSecond });
onInputHandlerDaySecond({ target: inputDaySecond });
