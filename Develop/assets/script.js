var generateBtn = document.querySelector("#generate");

function generatePassword() {
// PROMPT USER FOR PASSWORD CRITERIA
//  Password length betwee 8-128
    var promptLength = window.prompt('Please select Password length between 8 - 128 characters.');
  
//  Include upper/lowercase, numbers, special characters
    var upperCase = window.confirm('Do you want to use Uppercase letters?')
    var lowerCase = window.confirm('Do you want to use Lowercase letters?')
    var num = window.confirm('Do you want to use Numbers?')
    var special = window.confirm('Do you want to use Special Characters?')

    var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

    var tempArray = [];
    var passwordArray = [];

//  Validate the input (character length is correct and at least one type of character type is chosen)
    if (upperCase) {
      tempArray = tempArray.concat(upperArray);
    }
    if (lowerCase) {
      tempArray = tempArray.concat(lowerArray);
    }
    if (num) {
      tempArray = tempArray.concat(numArray);      
    }
    if (special) {
      tempArray = tempArray.concat(specialArray);
    }
    // Array and String starts with an index 0 and end with the number of length-1 
    //eg: an array/string with length 10 will have indexes 0-9 
    //to get a specific element from the array we do : array[0] -> this pulls out the element at  0th index 
    //console.log(tempArray[0]);
    console.log(promptLength);

    //varic  random passwd
     //for (var i = 0 ; i < promptLength  ; i++){
       //passwordArray.push(tempArray[Math.floor(Math.random() * tempArray.length)]);
     //}
    for (var i = 0; i < 10; i++) {
        passwordArray.push(i);
        i = i*10;
    }
    //passwordArray.push(1);
    //passwordArray.push(2);
     console.log(passwordArray);
     //console.log(passwordArray.length);
     
//  }
  


  
  return passwordArray;
}







// Generate password
// Display the password to the page


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




















/*
// Assignment code here


var lower = "qwertyuiopasdfghjklzxcvbnm";
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
var num = "1234567890";
var spec = "!@#$%^&*()";

var pwlength = 8;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function Password() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/

// Assignment code here


// Get references to the #generate element