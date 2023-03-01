//Write a function that takes one number as an input, and builds the result of all the sum leading to that number.

//THINK ABOUT THE PROBLEM + VERBAL SOLUTION.
//PROBLEM
//building the result of all the sum leading to that number.
//SOLUTION
//writing a program that will be able to add the sum from 1 to n inclusive.
//instiate a variable called result where we can store our output.
//loop through and add the ouput to result.
//VERIFY THE INPUTS/PROBLEM
//receive a single integer n, positive number, i want to throw an error is not an positive or whole number.
//WRITE DOWN THE FIRST VERSION 
function sumUp (n){
if(n < 1|| typeof n !=='number' || !Number.isInteger(n)){
    return "Error: Input must be a positive integer"
}
let result = 0;
for (let i = 0; i<= n; i++){
    result += i;
}
return result;
}
console.log(sumUp(1.5)) 
console.log(sumUp(100))
console.log(sumUp(50))
//VERIFY THE RESULTS -BEST CASE AND WORST CASE
//BEST CASE => 6
//WORST CASE => 100
//DERIVE THE TIME COMPLEXITY.
//O(n)
//EXPLORE ALTERNATIVE APPROACHES.
function sumUp(n){
    return n*(n+1)/2;
}
console.log(sumUp(6));
//CONSTANT TIME COMPLEXITY O(1).
