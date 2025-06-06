// js practice assignment 22 
// ____________________________________________________
// ques no 1 
// charAt() & otheChar practice 
//  AHMED
// HMEDA 
// MEDAH 
// EDAHM
// DAHME 
// AHMED  
// ANS 
// first step
//  var nam = 'AHMED';
//  var char1 = nam.charAt();
//  var otherChar = nam.slice(1);
//  var updatNam = otherChar + char1;
//  console.log(updatNam);
// // second step 
//  var nam = 'HMEDA';
//  var firstChar = nam.charAt();
// var otherChar = nam.slice(1);
// var updatNam  = otherChar + firstChar;
//  console.log(updatNam);
// // third step 
// var nam = 'MEDAH';
// var firstChar = nam.charAt();
// var otherChar = nam.slice(1);
// var updatNam = otherChar + firstChar;
//  console.log(updatNam); 
// // fourth step 
// var nam = 'EDAHM';
// var firstChar = nam.charAt();
// var otherChar = nam.slice(1);
// var updatNam = otherChar + firstChar;
//  console.log(updatNam);
// // fifth step 
// var nam = 'DAHME';
// var firstChar = nam.charAt();
// var otherChar = nam.slice(1);
// var updatNam = otherChar + firstChar;
//  console.log(updatNam);
//  ________________________________________________________________________________
//  ques no 2 
//  Area of a Circle
// Write a program that asks the user to enter the
//  radius of a circle and then calculates the area using the formula:
// Area = Math.PI * radius * radius
//  ============= ans ===============
// let radius = prompt('enter radius of circle');
// let area = Math.PI * radius * radius;
// area = Math.floor(area);
// console.log('the area of circle is ',area,'meter')
// ____________________________________________________________________________________________
// ques no 3 
// Write a program that takes the radius of a circle from the user
//  and calculates the circumference using the formula:
// Circumference = 2 * Math.PI * radius
// ------- ans ------------
// let radius = prompt('enter radius of circle');
// let circumference = 2 * Math.PI * radius;
// circumference = Math.floor(circumference)
// console.log(circumference);
// __________________________________________________________________________________
// ques no 4 
// Compare Two Circles
// Ask the user for the radius of two circles. Calculate the area of both 
// and print which circle has a larger area.
// ------- ans ------
// let enterRadiusCircle1 = prompt('enter radius of one circle');
// let areaOneCircle = Math.PI * enterRadiusCircle1 * enterRadiusCircle1;
//     areaOneCircle = Math.floor(areaOneCircle);
// console.log(areaOneCircle);
// let enterRadiusCircle2 = prompt('enter second circle radius');
// let areaSecondCircle = Math.PI * enterRadiusCircle2 * enterRadiusCircle2;
//     areaSecondCircle = Math.floor(areaSecondCircle);
//     console.log(areaSecondCircle);
//     if(areaOneCircle > areaSecondCircle){console.log('The first circle has large area')}
//     else if (areaSecondCircle > areaOneCircle){console.log('The second circle has larger area')}

//     else{console.log('The both circle has equal area')}
// _____________________________________________________________________________________________
// ques no 5 
// Half-Circle Area
// Write a program that asks the user for the radius of a half-circle
//  and calculates its area using:
// Half Area = (Math.PI * radius * radius) / 2
// -------------- ans --------------
// let radius = prompt('enter radius of half circle');
// let area = (Math.PI * radius * radius) /2;
//    area = Math.floor(area);
// console.log(area)
// __________________________________________________________________________
// ques no 6 
// Circle from Diameter
// Ask the user to enter the diameter of a circle and calculate its 
// area using:
// radius = diameter / 2
// Then use Math.PI to find the area.
// ----- ans --------
// let diameter = prompt('enter the diameter of circle');
// let radius = diameter /2;
// radius = Math.floor(radius);
// console.log(radius);
// let area = Math.PI * radius * radius;
//     area = Math.floor(area);
// console.log(area)
// _______________________________________________________________________________________
// ques no 7
//  Round a Single Number
// Write a program that takes the number 4.7 and prints the rounded value 
// using Math.round().
// ---- ans ----
// let number = 4.7;
//    number = Math.round(number)
// console.log(number);
// ________________________________________________________________________________
// ques no 8 
//  Round User Input
// Ask the user to enter a decimal number using prompt(), then round the 
// number using Math.round() and display the result using alert() or
//  console.log().
// -------- ans -----------
// let enterNumber = prompt('enter a decimal number');
// let roun = Math.round(enterNumber);
// console.log(roun);
// _____________________________________________________________________________
// ques no 9 
// Round Multiple Numbers
// Create an array of decimal numbers like [1.2, 2.5, 3.8, 4.4]. 
// Use a loop to round each number and print both the original and
//  the rounded values.
// --------- ans ------------------
// let array = [1.2,2.5,3.8,4.4];
// for(let i = 0; i < array.length ; i ++){
//     var original = array[i];
//     var roun = Math.round(original);
//     console.log('the origional values are: ' + original + ' and ther roudnde values is :' + roun);
 
//     }
    //  ____________________________________________________________________________________
    // ques no 10 
    // Math.floor()
    // ========= ans ===========
    // let number = 4.9;
    // number = Math.floor(number);
    // console.log(number);
    // ___________________________________________________________________________
// ques no 11 
// Math.floor()
// ----- ans ---- 
// let number = 5.99;
// number = Math.floor(number);
// console.log(number);
// number = 3.01;
// number = Math.floor(number);
// console.log(number);
// number = 9.5;
// number = Math.floor(number);
// console.log(number);
// ___________________________________________________________________________________
// ques no 12 
// Math.floor();
// let number = prompt('enter a decimal number');
// console.log(number);
// number = Math.floor(number);
// console.log(number);
// ____________________________________________________________________________________
// ques no  13 
// Math.ceil();
//  ans 
// let number = 4.7;
// number = Math.ceil(number);
// console.log(number)
// ____________________________________________________________________________________
// ques no 14 
// Math.ceil();
// ques no  13 
// Math.ceil();
//  ans 
//  let number = 4.1;
//  number = Math.ceil(number);
//  console.log(number)
// _____________________________________________________________________
// ques no 15 
// Math.sqrt();
// --- ans ---------
// let number = 16;
// number = Math.sqrt(number);
// console.log(number);
// _____________________________________________________________________
// ques no 16 
// Math.sqrt();
// --- ans ---------
// let number = 0;
// number = Math.sqrt(number);
// console.log(number);
// _____________________________________________________________________
// ques no 17 
// Math.sqrt();
// --- ans ---------
// let number = -9;
// number = Math.sqrt(number);
// console.log(number)
// _____________________________________________________________________
// ques no 18 
// Math.sqrt();
// --- ans ---------
// let number = prompt('enter a number');
// number = Math.sqrt(number);
// console.log(number);
// _____________________________________________________________________
// ques no 19 
// Math.abs();
// --- ans ---------
// let number = -10;
// number = Math.abs(number);
// console.log(number)
// _____________________________________________________________________
// ques no 20 
// Math.random();
// --- ans ---------
// let number = Math.random()*3;
// number = Math.floor(number);
// number = number + 1;
// console.log(number);
// _____________________________________________________________________
// ques no 21 
// Math.random();
// --- ans ---------
// let rand = Math.random();
// console.log(rand);
// rand = rand * 100;
// rand = rand + 1;
// rand = Math.floor(rand);
// console.log(rand)
// _____________________________________________________________________
// ques no 22 
// Math.random();
// toss game 
// --- ans ---------
// let random = Math.random();
// random = random *10;
// random = Math.floor(random)
// console.log(random);
// if(random < 5){console.log('ali won the toss')}
// else{console.log('Hmza won toss')}
// _____________________________________________________________________
// ques no 23 
// Math.random();
// --- ans -------
// let options = ['rock','paper','scissors'];
// let randomChoice = options[Math.floor(Math.random() * options.length)];
// console.log('Computer chose : ' + randomChoice);
//  we can do it by another following methods
// let options = ['rock','paper','scissors'];
//  let randomChoice = Math.random();
//  console.log(randomChoice);
//  randomChoice = randomChoice * options.length;
//  console.log(randomChoice);
//  randomChoice = Math.floor(randomChoice);
//  console.log(randomChoice);
//  randomChoice = options[randomChoice]
//  console.log(randomChoice)
// _____________________________________________________________________
// ques no 24 
// Math.random();
// --- ans ----
// let students = ['ali','zohaib','zmir','anees'];
// let choice = Math.random();
// choice = choice* students.length;
// choice = Math.floor(choice);
// let target = students[choice];
// console.log(target)
// _____________________________________________________________________
// ques no 25 
// Math.min();
// --- ans ---------
// let num1 = prompt('enter first number');
// let num2 = prompt('enter second number');
// let num3 = prompt('enter third number');
// let result = Math.min(num1,num2,num3);
// console.log(result);
// _____________________________________________________________________
// ques no 26
// Math.random();
// game
// --- ans ---------
// let num = Math.random();
// num = num * 10;
// num =  num + 1;
// num = Math.floor(num);
// console.log(num)
// if(num === 5){console.log('you won')}
// else{console.log('you lost')}
// _____________________________________________________________________
// ques no 27 
// Math.random();
// game
// --- ans ---------
 let ranodm1 = Math.random();
 ranodm1 = ranodm1 * 10;
 ranodm1 = Math.floor(ranodm1);
 console.log(ranodm1);
 let ranodm2 = Math.random();
 ranodm2 = ranodm2 * 15;
 ranodm2 = Math.floor(ranodm2);
 console.log(ranodm2)
 let userAnswer = prompt(`what is random1 * random2?`);
 userAnswer = Number(userAnswer);
 if(userAnswer === ranodm1 * ranodm2){console.log('correct')}
 else{console.log('wrong')}
// _____________________________________________________________________
// ques no 28
// Guess the Number Game (Basic)
// Generate a random number between 1 and 10. Ask the user (using prompt())
//  to guess it. Show "Correct!" or "Wrong! Try again."

// --- ans ---------
// let number = Math.random();
// number = number * 10;
// number = Math.floor(number);
// number = number + 1; 
// let guessNumber = +prompt('enter a guess number');
// if(guessNumber === number){console.log('correct')}
// else{console.log('wrong! try again')}
// _____________________________________________________________________
// ques no 29 
// . Lottery Number Generator
// Generate 5 random numbers between 1 and 50 and print them. 
// Example: 12 27 3 45 19
// --- ans ---------
// let number1 = Math.floor(Math.random()*50) + 1;
// console.log(number1)
// let number2 = Math.floor(Math.random()*50) + 1;
// console.log(number2)
// let number3 = Math.floor(Math.random()*50) + 1;
// console.log(number3)
// let number4 = Math.floor(Math.random()*50) + 1;
// console.log(number4)
// let number5 = Math.floor(Math.random()*50) + 1;
// console.log(number5);
// let array = [number1,number2,number3,number4,number5];
// console.log(array);
// let flag = false;
// for(let i = 0; i<array.length;i++){var lucky = array[i];
//     let guess = +prompt('enter a number guess');
//     if(guess === lucky){flag = true;
//         break;
//     }
// }
// if(flag){console.log('correct')}
// else{console.log('wrong')}
// _____________________________________________________________________
// ques no 30 
//  Random Password Generator (Easy)
// Generate a 4-character password using random numbers (0–9). 
// Example: 4839, 0275, etc.
// --- ans ---------

//    let number1 = Math.floor(Math.random()* 10);
//    number1 = number1.toString();
//    console.log(number1);
//    let number2 = Math.floor(Math.random()* 10);
//        number2 = number2.toString();
//    console.log(number2);
//    let number3 = Math.floor(Math.random()* 10);
//      number3 = number3.toString();
//    console.log(number3);
//    let number4 = Math.floor(Math.random()* 10);
//     number4 = number4.toString();
//    console.log(number4);
//    let number5 = Math.floor(Math.random()* 10);
//       number5 = number5.toString();
//    console.log(number5); 
//    let password = number1 + number2 + number3 + number4 + number5; 
//    console.log(password)
// _____________________________________________________________________
// ques no 31 
// Task 1: Find the largest of three numbers
// --- ans ---------
// let a = 10;
// let b = 25;
// let c = 15;
// let max = Math.max(a,b,c);
// console.log('The largest number is:',max)
// _____________________________________________________________________
// ques no 32 
// : Find the largest in an array
// let numbers = [3, 9, 1, 20, 6];
// --- ans ---------
// let numbers = [3,9,1,20,6];
//    let max = Math.max(...numbers);
//    console.log(max)
// _____________________________________________________________________
// ques no 33
// Take 5 numbers from user and find the largest
// --- ans ---------
// let number1 = prompt('enter number 1');
// let number2 = prompt('enter number 2');
// let number3 = prompt('enter number 3');
// let number4 = prompt('enter number 4');
// let number5 = prompt('enter number 5');
// let numbers = [number1,number2,number3,number4,number5];
// let max = Math.max(...numbers);
// console.log(max)

// _____________________________________________________________________
// ques no 34
//  Random number between 0 and 1
// --- ans ---------
// let num = Math.random();
// num = num * 2;
// num = Math.floor(num);
// console.log(num)

