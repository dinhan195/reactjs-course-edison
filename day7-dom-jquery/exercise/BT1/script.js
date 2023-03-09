/** @format */

const btnCalculator = document.querySelector('#btn-calculator');
btnCalculator.addEventListener('click', calculator);
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');

function calculator(event) {
  event.preventDefault();
  let inputHeight = height.value;
  let inputWeight = weight.value;
  let bmi = inputWeight / (inputHeight * inputHeight);
  const gender = document.getElementsByName('gender');
  let message = '';
  if (gender[0].checked) {
    switch (gender[0].checked) {
      case bmi < 20.7:
        message += 'Gầy';
        break;
      case bmi <= 24.6:
        message += 'Bình thường';
        break;
      case bmi <= 27.8:
        message += 'Thừa cân nhẹ';
        break;
      case bmi <= 31.1:
        message += 'Trên lý tưởng';
        break;
      case bmi > 31.1:
        message += 'Béo phì';
        break;
      default:
        break;
    }
  } else if (gender[1].checked) {
    switch (gender[1].checked) {
      case bmi < 19.1:
        message += 'Gầy';
        break;
      case bmi <= 25.8:
        message += 'Bình thường';
        break;
      case bmi <= 27.3:
        message += 'Thừa cân nhẹ';
        break;
      case bmi <= 32.3:
        message += 'Trên lý tưởng';
        break;
      case bmi > 32.3:
        message += 'Béo phì';
        break;
      default:
        break;
    }
  } else {
    alert('Please choose gender');
  }

  renderResult(bmi, message);
}

function renderResult(bmi, message) {
  const ouput = document.querySelector('.output > h1');

  ouput.innerHTML = `<span>${bmi.toFixed(
    1
  )}</span><span>|</span><span>${message}</span>`;
}
