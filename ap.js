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
let diameter = prompt('enter the diameter of circle');
let radius = diameter /2;
radius = Math.floor(radius);
console.log(radius);
let area = Math.PI * radius * radius;
    area = Math.floor(area);
console.log(area)


