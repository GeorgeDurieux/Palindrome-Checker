const checkButton = document.getElementById('check-button');
const resultText = document.getElementById('result');
const clearButton = document.getElementById('clear-button');
const textBox = document.getElementById('text-box');
const filter = /[^\p{L}\d]/gu;


function checkPalindrome() { 
  const string = textBox.value;
  const filteredString = string.toLowerCase().replace(filter, '');
  const reversedString = filteredString.split('').reverse().join('');
  if (reversedString === filteredString) {
    resultText.innerText = `"${string}" is a palindrome`;
  } else {
    resultText.innerText = `"${string}" is not a palindrome`;
  }
}

function clearResult() {
  resultText.innerText = ``;
  document.getElementById('text-box').value = ``;
}

checkButton.addEventListener('click', checkPalindrome); 
clearButton.addEventListener('click', clearResult);

document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkPalindrome();
  }
})

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {    
    clearResult();
  }
})