// Задание 1
/*jshint esversion: 7 */
'use strict'
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {

    sum += arr[i];

    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  avg = +(sum / arr.length).toFixed(2);

  return { min:min, max:max, avg:avg };
}


// Задание 2
function worker(arr) {
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for (let i = 1; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
      if (sum > max) {
        max = sum;
      }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      
      if (arr[i] < min) {
        min = arr[i];
      }
  }

  return Math.abs(min - max);
}

