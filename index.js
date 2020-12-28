var readlineSync = require("readline-sync");
const chalk = require('chalk');


var userBirthday = readlineSync.question(chalk.red("What is your date of birth?\n(please fill it in DD-MM-YYYY format) "));

var userLuckyNum = readlineSync.question(chalk.bold.yellow("What is your lucky number? "));

var n = (userBirthday);

// To split date define this
var number = n.split('-')


// Join number with date
n = Number(number.join(''));


var a = 0;
var b = 0;
var sum = 0;

var array = [];

while (n>1) {
  a = n%10;
  array.push(a);
  b = n-a;
  n=b/10;

}

// array is greater if you want your answer right;

for (var i=0; i<array.length; i=i+1) {
  var d = array[i];
  sum = sum+ d;
}

// Check in every comment by using console.log(var);

if (sum%userLuckyNum == 0) {
  console.log("Your date of birth is a special lucky number!")
}
else {
  console.log("Your date of birth is not a special lucky number")
}
