//write an algorithm that takes an array of numbers as input and calculates the sum of those numbers.
//VERIFY THE INPUT/PROBLEMS
//MUST BE ARRAY AN ARRAY OF NUMBERS IF NOT THROW AN ERROR.
//LENGTH MUST BE GREATER THAN 0.

//THINK ABOUT THE PROBLEM + VERBAL SOLUTION
//CREATE IF CHECKS TO ENSURE THE INPUT REQUIREMENTS ARE MET
//INSTIATE A VARIABLE THAT STORES OUTPUT.
//LOOP THROUGH THE ARRAY
//STORE THE RESULT.
//WRITE DOWN THE FIRST VERSION
function sumArray(numbers){
    if (!Array.isArray(numbers)){
        return 'Error: Input must be an array';
    }
    if (numbers.length === 0){
        return 0;
    }
    let result = 0;
    for (let i = 0; i < numbers.length; i++){
        result += numbers[i]
    }
    return result;
}
console.log(sumArray([1,2,3,4,5,]))
console.log(sumArray([1,2,3,4,5,7,6,8,9,10]))
//VERIFY RESULTS
//CHECK THE RESULTS OF THE CONSOLE.LOG

//DERIVE THE TIME COMPLEXITY
//BEST CASE => ([1,2,3,4,5,]))
//WORST CASE => ([1,2,3,4,5,7,6,8,9,10]))
//This program is dependant of the input size i.e the length of the array, as the length of the array increases so does the time complexity. This is a linear time complexity O(n)

//EXPLORE ALTERNATIVES
//Let explore a method that can sum up an array and return a single value. The reduce method.
//check if it's an array, check the array and make sure the length is > 0.
function sumArray(numbers){
    if (!Array.isArray(numbers)){
        return 'Error: Input must be an array.'
    } 
    if (numbers.length === 0){
        return 0;
    }
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([0]))
//it will still have the same time complexity as the previous one, the algorithm just takes a few lines and dosen't make use of the traditional loop.