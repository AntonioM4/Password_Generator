var selectChars = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");


var Passwordlength;

// Write password to the #password input
function writePassword() { 

  // confirm boxes after clicking generate 
  var passwordLength = prompt("How many characters would you like your password to be?");
    if(passwordLength <= 7 || passwordLength >= 129){
      alert("Must be between 8 and 128 characters");
      return;
    }else {
  }
  var uppercase = confirm ("Ok to add uppercase letters to your password");
  var lowercase = confirm ("Ok to add lowercase letters to your password");
  var numbers = confirm ("Ok to add numbers to your password");
  var symbol = confirm ("Ok to add symbols to your password");
  
  
 // Password generator  
  var password = generatePassword();
  function generatePassword(){
    var genCriteria = ["", "", "", ""]


    genCriteria[0] = uppercase;
    genCriteria[1] = lowercase;  
    genCriteria[2] = numbers; 
    genCriteria[3] = symbol; 

    console.log(genCriteria)
  
    if (genCriteria[0] == true){
      selectChars = "QWERTYUIOPLKJHGFDSAZXCVBNM";
    }
    if (genCriteria[1] == true){
      selectChars = selectChars.concat('qwertyuioplkjhgfdsazxcvbnm');
    }
    if (genCriteria[2] == true){
      selectChars = selectChars.concat("0123456789");
    }
    if (genCriteria[3] == true){
      selectChars = selectChars.concat("!@#$%^&*()-_+=~/|[]{},.`<>?");
    }
    Passwordlength = passwordLength
  
    var pw = ""; 

    for (var i = 0; i < Passwordlength; i++){
      pw = pw.concat(selectChars.charAt(Math.floor(Math.random() * selectChars.length)));
    }
      
    
      console.log(pw)
      return pw;
       
  }
    var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
