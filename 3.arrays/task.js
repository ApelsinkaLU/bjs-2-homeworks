/*jshint esversion: 7 */

// Задача 1
function compareArrays(arr1, arr2) {
  let result;

  if (arr1.length === arr2.length) {
    result = arr1.every((num, i) => num === arr2[i]);
  } else result = false;

  return result; // boolean
}


// Задача 2
function advancedFilter(arr) {
  let resultArr = arr.filter((number) => number > 0 && number % 3 === 0).map((number) => number * 10);

  return resultArr; // array
}
