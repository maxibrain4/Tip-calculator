'use strict';
const billInput = document.querySelector('.bill-input');
const customInput = document.querySelector('#btninput');
const NumberInput = document.querySelector('.Number-input');
const allBtn = document.querySelectorAll('.btn');
const restBtn = document.querySelector('.last-btn');
const tipDigit = document.querySelector('.tipdigit');
const totalDigit = document.querySelector('.totaldigit');
const dataBtn = document.querySelector('.dataBtn');
// let selectTip;

const lastbtncolor = function () {
  if (NumberInput.value === '' || billInput.value === '') {
    restBtn.style.opacity = '0.2';
  } else {
    restBtn.style.opacity = '';
  }
};
lastbtncolor();
const btnControl = function () {
  if (NumberInput.value === '' || billInput.value === '') {
    tipDigit.textContent = '$0.00';
    totalDigit.textContent = '$0.00';
  }
};

//error message
const inputerror = function () {
  if (NumberInput.value === '' || NumberInput.value === 0) {
    document.querySelector('.error').textContent = `can't be zero`;
    NumberInput.style.border = '1px solid red';
  } else {
    document.querySelector('.error').textContent = '';
    NumberInput.style.border = '';
  }
};

//button functionality
allBtn.forEach(function (el) {
  el.addEventListener('click', function (e) {
    const id = this.getAttribute('data-num');
    let selectTip = id;
    btnClicked(selectTip);
    inputerror();
    btnControl();
    lastbtncolor();

    // const alreadyClicked = e.target;
    // if (e === alreadyClicked) {
    //   e.classList.add('addcolor');
    // }
    // console.log(selectTip);
    // let newId = el.getAttribute('id');
  });
});

//the math
const btnClicked = function (selectTip) {
  const tip = +billInput.value * selectTip;
  const tipAmount = tip / +NumberInput.value;
  const totalPerPerson =
    (Number(billInput.value) + Number(tip)) / NumberInput.value;
  console.log(tipAmount);
  console.log(totalPerPerson);
  tipDigit.textContent = `$${tipAmount.toFixed(2)}`;
  totalDigit.textContent = `$${totalPerPerson.toFixed(2)}`;
};

//select tip input
customInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const getPecentage = +customInput.value / 100;
    const tip = +billInput.value * getPecentage;
    const tipAmount = tip / +NumberInput.value;
    const totalPerPerson =
      (Number(billInput.value) + Number(tip)) / NumberInput.value;
    console.log(tipAmount);
    console.log(totalPerPerson);
    tipDigit.textContent = `$${tipAmount.toFixed(2)}`;
    totalDigit.textContent = `$${totalPerPerson.toFixed(2)}`;
    lastbtncolor();
  }
});

//attached the error message to the custom input
customInput.addEventListener('mouseenter', inputerror);

//reset button
restBtn.addEventListener('click', function () {
  location.reload();
});
