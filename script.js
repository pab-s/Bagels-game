//variables
var num1;
var num2;
var num3;
var win = 0;
var round = 0;
var bagles = 0;
var arrayNum = [];
var userArray = [];

// DOM
var feedback = document.getElementById('feedback');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var btn = document.getElementById('btn');

// random number
function randomNumber() {
  var num = Math.floor((Math.random() * 9) + 1);
  return num;
}

function createNumbers() {
  num1 = randomNumber();
  num2 = randomNumber();
  num3 = randomNumber();

  if (num2 === num1) {
      num2 = randomNumber();
  }
  if (num3 === num2 || num3 === num1) {
      num3 = randomNumber();
  }
  arrayNum.push(num1);
  arrayNum.push(num2);
  arrayNum.push(num3);
  // console.log("Computer numbers: " + arrayNum);
}


function checkNum(input, num) {

    for (var i = 0; i < arrayNum.length; i++) {
        // console.log("user number is " + input);
        // console.log("array number = " + arrayNum[i], "array index = " +  (i + 1), "position user number is " + num);
        if (arrayNum[i] == input && (i + 1) == num) {
          console.log("Fermi... digit correct and right position");
          win++;
          return;
        } else if (arrayNum[i] == input) {
          console.log("Pico... digit correct but wrong position");
        } else {
          bagles++;
          if (bagles == 9) {
            console.log("bagles... all wrong");
          }
        }
    }
}

createNumbers();

btn.addEventListener('click', function(e) {
  e.preventDefault();
  win = 0;
  bagles = 0;
  var userNum1 = input1.value;
  var userNum2 = input2.value;
  var userNum3 = input3.value;

  if(isNaN(userNum1) || isNaN(userNum2) || isNaN(userNum3) || (userNum1.length === 0 || userNum2.length === 0 || userNum3.length === 0)) {
    alert("is that your best shot?");
  } else {

  checkNum(userNum1, 1);
  checkNum(userNum2, 2);
  checkNum(userNum3, 3);

  round++;
  console.log("round # " + round);
      if (win == 3) {
        console.log("You win! The numbers are " + arrayNum);
        btn.style.display = 'none';
      }
      if (round == 10) {
        alert('Game Over... You lose!The numbers are ' + arrayNum);
        btn.style.display = 'none';
      }

    }
});
