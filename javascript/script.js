// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

   //generate password function:
   function generatePassword() {

    //variable+empty array for selected characters:
    var selectedCharacters = [];

     //establish password length:
     var passwordLength = prompt("How many characters would you like in your password?")

     //set min and max password length + alerts to notify user:
     if(passwordLength < 8){
      return alert("8 characters minimum!");
     }
     if(passwordLength > 128){
      return alert("128 characters maximum!");
     }

     //establish lowercase if there will be lowercase:
    var lowerCase = confirm("Include lowercase letters?");
     if(lowerCase == true){
      //push function gets the characters up into the selectedCharacters array(if they are confirmed):
      selectedCharacters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
     console.log(selectedCharacters);
     }

    //establish lowercase if there will be uppercase (and etc. through line 49):
     var upperCase = confirm("Include uppercase letters?");
     if(upperCase == true){
      selectedCharacters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
      console.log(selectedCharacters);
     }
     var specialCharacters = confirm("Include special characters?");
     if(specialCharacters == true){
      selectedCharacters.push("~", "@", "#", "$", "%", "<", ">", "&", "*", "_", "-", "=", "+", "?");
      console.log(selectedCharacters);
     }
     var numbers = confirm("Include numbers?");
     if(numbers == true){
      selectedCharacters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
      console.log(selectedCharacters);
     }
     
     console.log(selectedCharacters[30]);

  //now that all selected characters are in the array, they are joined into a single string -- the ('') removes the commas, which otherwise will be fed into the password (which makes a password with a TON of commas in it):
var newList = selectedCharacters.join('');

//this empty string variable is where the random characters(password) will go:
var password = "";  
     console.log(newList);

     //this line 62 part is still difficult for me to understand what all is happening: what exactly is turning the random numbers into letters (and/or vice versa), and giving me the proper length? I can't quite pinpoint it, and I did a ton of playing with it just to see if I could figure out how it was functioning -- no luck, lol... Also, I had to spend a lot of time researching a lot of different "for" loops to put together this one that got what I needed. Before this, I was getting only a single letter output for the password return. Though, I also was able to identify an extra semi-colon and a curly bracket in the wrong place; once I cleaned that up, the following for loop worked like a charm...
     
for(var i=0; i <= passwordLength; i++){ 
  var randomNumber = Math.floor(Math.random() * newList.length);
  password += newList.substring(randomNumber, randomNumber +1);
}    
   return password;

  
     }
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);      