<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculator by Ahmed</title>
<style>
* {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  text-align: center;
  margin: 0;
  padding: 0;
}

div {
  width: 300px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

#screen {
  width: 90%;
  height: 50px;
  font-size: 2.2em;
  margin-bottom: 10px;
  padding: 5px;
  text-align: right;
  border: 1px solid #ccc;
}

button {
  width: 60px;
  height: 60px;
  font-size: 22px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f0f0f0;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #e0e0e0;
}

button:active {
  background-color: #b3b3b3;
  box-shadow: 0 3px #707070;
  transform: translateY(3px);
}
button > img {
  background-color: transparent;
}
.colors {
  background-color: #f98b6b;
  width: 135px;
}
.colors:hover {
  background-color: #ee704a;
}

</style>
  </head>
  <body>
    <div>
      <input type="text" id="screen" placeholder="0" disabled />
      <br />
      <button onclick="addToDisplay('7')">7</button>
      <button onclick="addToDisplay('8')">8</button>
      <button onclick="addToDisplay('9')">9</button>
      <button onclick="addToDisplay('+')">+</button>
      <br />
      <button onclick="addToDisplay('4')">4</button>
      <button onclick="addToDisplay('5')">5</button>
      <button onclick="addToDisplay('6')">6</button>
      <button onclick="addToDisplay('-')">-</button>
      <br />
      <button onclick="addToDisplay('1')">1</button>
      <button onclick="addToDisplay('2')">2</button>
      <button onclick="addToDisplay('3')">3</button>
      <button onclick="addToDisplay('*')">*</button>
      <br />
      <button onclick="addToDisplay('0')">0</button>
      <button onclick="addToDisplay('00')">00</button>
      <button onclick="addToDisplay('.')">.</button>
      <button onclick="addToDisplay('/')">/</button>
      <br />
      <button onclick="clearScreen()">C</button>
      <button onclick="singleDelete()">
        <i class="fa-solid fa-delete-left" style="color: #000; background-color: transparent;"></i>
      </button>
      <button class="colors" onclick="calculate()">=</button>
    </div>
    <script
      src="https://kit.fontawesome.com/78a022c79b.js"
      crossorigin="anonymous"
    ></script>
    <script>
var screen = document.getElementById("screen");

function addToDisplay(value) {
  var calculatorValue = screen.value;
  var operatorSign = ["+", "-", "%", "/", "*"];
  var last = calculatorValue[calculatorValue.length - 1];
  var newInput = value;

  if (
    operatorSign.indexOf(last) !== -1 &&
    operatorSign.indexOf(newInput) !== -1
  ) {
    calculatorValue = calculatorValue.slice(0, -1) + newInput;
  } else {
    calculatorValue += newInput;
  }

  screen.value = calculatorValue;
}

function clearScreen() {
  document.getElementById("screen").value = "";
}
function singleDelete() {
  var inputElement = document.getElementById("screen");
  var inputValue = inputElement.value;
  if (inputValue.length > 0) {
    var updatedValue = inputValue.slice(0, -1);
    inputElement.value = updatedValue;
  }
}

function calculate() {
  if (screen.value !== "") {
    var result = eval(document.getElementById("screen").value);
    document.getElementById("screen").value = result;
  }
}

</script>
  </body>
</html>
