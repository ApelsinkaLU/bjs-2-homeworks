/*jshint esversion: 7 */
"use strict";



function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-(4*a*c);

  if (d < 0) {
    return arr;
  } else if (d == 0) {
    arr[0] = (-b/2*a);
  } else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
  }

  return arr; // array
}

solveEquation();




// function calculateTotalMortgage(percent, contribution, amount, date) {
//   let totalAmount;

//   // код для задачи №2 писать здесь

//   return totalAmount;
// }
