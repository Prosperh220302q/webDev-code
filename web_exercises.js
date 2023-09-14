//create a new date object
let currentDate = new Date();

// Get the current date
let date = currentDate.toDateString();

// Get the current time
let time = currentDate.toLocaleTimeString();

// Display the current date and time
console.log("Today is: " + date);
console.log("Time is: " + time);

function celcToFahr() {

  let tempC = parseInt(document.getElementById('temp').value);
  let tempF = ((tempC * 9/5) + 32);

  document.getElementById('TemperatureResult').innerHTML = `Temperature in Fahrenheit: ${tempF}`;
}

function multiply() {
  // Get the values entered by the user
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);

  // Perform multiplication and division
  let multiplication = num1 * num2;


  // Display the results
  document.getElementById('multiplicationResult').innerHTML = `Multiplication: ${multiplication}`;
  
}
function divide(){
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);

  let division = num1 / num2;

  document.getElementById('divisionResult').innerHTML = `Division: ${division}`;
}


let array = [10, 2, 5, 12, 7];
let temp = array[0];
array[0] = array[array.length - 1];
array[array.length - 1] = temp;
console.log("Array after swapping:", array);

function removeDuplicates(str) {
    var uniqueChars = new Set();
    
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (!uniqueChars.has(char)) {
        uniqueChars.add(char);
      }
    }
    
    return Array.from(uniqueChars).join('');
  }
  
  var inputString = "Web_Development";
  var result = removeDuplicates(inputString);
  console.log(result);


  for (var x = 0; x <= 15; x++) {
    if (x === 0) {
      console.log(x + " is even");
    } else if (x % 2 === 0) {
      console.log(x + " is even");
    } else {
      console.log(x + " is odd");
    }
  }
  
  function replaceHeading() {
    var userInput = document.getElementById("textInput").value;
    document.getElementById("heading").textContent = userInput;
  }