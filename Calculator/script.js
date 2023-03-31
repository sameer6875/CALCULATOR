// get the result input element
const result = document.getElementById('result');

// define the display function
function display(value) {
  result.value += value;
}

// define the clearScreen function
function clearScreen() {
  result.value = '';
}

// define the calculate function
function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

// define the Delet function
function Delet() {
  let value = result.value;
  result.value = value.substr(0, value.length - 1);
}
