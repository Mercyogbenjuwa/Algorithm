//Write a program that takes an array of numbers as input and return the minimum value in the array (i.e the smallest number).

function findMin(numbers) {
     if (!Array.isArray(numbers) || numbers.length === 0) { 
    return null; 
    }
     let min = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
     return null; 
     } 
    if (numbers[i] < min) {
    min = numbers[i]; 
      }
     } 
     return min; 
     } 


function findMin(numbers){
    return Math.min(...numbers)
    }
    console.log(findMin([1,2,3,4,5,]))
    