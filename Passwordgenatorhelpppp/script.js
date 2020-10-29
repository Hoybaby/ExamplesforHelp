//Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
}

// Arrays of code

var userInput;

// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// var character = ["!", "@", "#", "$", "%", "^", "&", "*", "()"]

// var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    // var numbers = "123456789"
    // var lowerCase = "abcdefghijklmnopqrstuvwxyz"
    // var upperCase = "ACBDEFGHIJKLMNOQRSTUVWXYZ"
    // var characters = "!@#$%^&*()"

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var confirmCharacter;

var confirmNumber;

var confirmLowerCase;

var confirmUpperCase;

// variable answers is made so I can concatcatate later

// var answers= ''
// var password = '';
// var length = userInput


//     if (confirNumbers) {
//     answers.concat(numbers)
//         }

//     if (confirmCharacter) {
    
//     answers.concat(character)
//     };

//     if (confirmLower) {
//     answers.concat(lowerCase)
// };
//     if (confirmUpperCase) {
//     answers.concat(upperCase)
//     }

// for (var i = 0; i <= generateBtn; i++); {
//   password = password + valuesString.charAt(Math.floor(Math.random() * Math.floor(value.length)))
// }

function generatePassword() {

    var numbers = "123456789"
    var lowerCase = "abcdefghijklmnopqrstuvwxyz"
    var upperCase = "ACBDEFGHIJKLMNOQRSTUVWXYZ"
    var characters = "!@#$%^&*()"

    var userInput = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 and 128"));

    while (userInput < 8 || userInput >= 129) {
        alert("Password needs a valid length. Please try again!");
        userInput = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 and 128"));
    };

    // this will occur if user selects cancel on the choice
    if (!userInput) {
        alert("This needs a value");
    } else {
        confirmCharacter = confirm("Would you like Special Characters your password?");
        confirmNumber = confirm("Would you like Numbers in your Password?");
        confirmLowerCase = confirm("would you like Lower Case Letters in your Password?")
        confirmUpperCase = confirm("Would you like Upper case letters in your Password?")
    }

    while (confirmCharacter === false && confirmNumber === false && confirmUpperCase === false && confirmLowerCase === false) {
        alert("You must choose at least one!")
        confirmCharacter = confirm("Would you like Special Characters your password?");
        confirmNumber = confirm("Would you like Numbers in your Password?");
        confirmLowerCase = confirm("would you like Lower Case Letters in your Password?")
        confirmUpperCase = confirm("Would you like Upper case letters in your Password?")
                // must place the confirmupper cases above or it will not change the result
    }

    var answers = '';
    var password = '';

    if (confirmNumber) {
        answers += numbers;
            }
    
        if (confirmCharacter) {
        
        answers += characters;
        };
    
        if (confirmLowerCase) {
        answers += lowerCase;
    };
        if (confirmUpperCase) {
        answers += upperCase;
        }
    
    
    
    for (i = 0; i < userInput; i++) {
        var randomPass = answers[Math.floor(Math.random() * answers.length)];
        answers += answers.charAt(randomPass);
    }
    return password;

}
    
// for ( var i = 0; i < userInput; i++ ) {
//     var random = math.floor(Math.random() * password.length);
//     password += allowed[random];
// }   return password;
    

     
    //     // for 4 options not selected. Previously i had it as 4 positive but the nrealized it would never cascade down.
    // if (confirmCharacter === !true && confirmNumber === !true && confirmUpperCase === !true && confirmLowerCase === !true) {
    //     alert("You must choose at least one!")
       
    //         // 4 options selected
    // } else if(confirmCharacter === true && confirmNumber === true && confirmUpperCase === true && confirmLowerCase === true) {
    //     answers = confirmCharacter.concat(confirmNumber, confirmUpperCase, confirmLowerCase); 

    //     // for three options
    // } else if (confirmCharacter === true && confirmNumber === true && confirmUpperCase === true && confirmLowerCase === false) {
    //     answers = confirmCharacter.concat(confirmNumber, confirmUpperCase);
    
    // } else if (confirmCharacter === true && confirmNumber === true && confirmUpperCase === false && confirmLowerCase === true) {
    //     answers = confirmCharacter.concat(confirmNumber, confirmLowerCase);
    
    // } else if (confirmCharacter === true && confirmNumber === false && confirmUpperCase === true && confirmLowerCase === true) {
    //     answers = confirmCharacter.concat(confirmLowerCase, confirmUpperCase);

    // } else if (confirmCharacter === false && confirmNumber === true && confirmUpperCase === true && confirmLowerCase === true) {
    //     answers = confirmNumber.concat(confirmUpperCase, confirmLowerCase);
    //     // all three options are covered so coding for double options now
    // } else if (confirmCharacter === true && confirmNumber === true && confirmUpperCase === false && confirmLowerCase === false) {
    //     answers = confirmCharacter.concat(confirmNumber);

    // } else if (confirmconfirmCharacter === false && confirmNumber === false && confirmUpperCase === true && confirmLowerCase === true) {
    //     answers = confirmLowerCase.concat(UpperCase);
    // } else if (confirmCharacter === true && confirmNumber === false && confirmUpperCase === true && confirmLowerCase === false) {
    //     answers = confirmCharacter.concat(confirmUpperCase);
    // } else if (confirmCharacter === false && confirmNumber === true && confirmUpperCase === false && confirmLowerCase === true) {
    //     answers = confirmNumber.concat(confirmLowerCase);
    // } else if (confirmCharacter === true && confirmNumber === false && confirmUpperCase === false && confirmLowerCase === true) {
    //     answers = confirmCharacter.concat(confirmLowerCase);
    // } else if (confirmCharacter === false && confirmNumber === true && confirmUpperCase === true && confirmLowerCase === false) {
    //     answers = confirmNumber.concat(confirmUpperCase);

    //         // finished with double PushSubscriptionOptions, now i will code the single below
    // } else if (confirmCharacter === true && confirmNumber === false && confirmUpperCase === false && confirmLowerCase === false) {
    //     answers = confirmCharacter;
    // } else if (confirmCharacter === false && confirmNumber === true && confirmUpperCase === false && confirmLowerCase === false) {
    //     answers = confirmNumber;
    // } else if (confirmCharacter === false && confirmNumber === false && confirmUpperCase === true && confirmLowerCase === false) {
    //     answers = confirmUpperCase;
    // } else if (confirmCharacter === false && confirmNumber === false && confirmUpperCase === false && confirmLowerCase === true) {
    //     answers = confirmLowerCase;
    // }


 

 

    // }

    // var userSelections = {
    //     length: start,
    //     special: confirmCharacter,
    //     numbers: confirmNumber,
    //     lowerCase: confirmLowerCase,
    //     upperCase: confirmUpperCase
    // }

    // var possibleChars = [];
    // var guaranteedChars = [];

    // if (userSelections.special) {
    //     console.log("The user wants special chars!")
    //     // Add these chars to possibleChars array
    // }

    // if (userSelections.numbers) {
    //     console.log("The user wants numbers chars!")
    //     // Add these chars to possibleChars array
    // }

    // if (userSelections.lowerCase) {
    //     console.log("The user wants lower chars!")
    //     // Add these chars to possibleChars array
    // }

    // if (userSelections.upperCase) {
    //     console.log("The user wants upper chars!")
        // Add these chars to possibleChars array
    

    // for(var i = 0; i < userSelections.length; i++){
    // pull randomly from possible chars and push it into guaranteed
    //}

    //return the password array