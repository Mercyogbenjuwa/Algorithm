//Return the nth element of the fibonacci sequence.

//VERIFY INPUTS/PROBLEMS
//All inputs must be a positive integer, and must not be 0.

//THINK ABOUT THE PROBLEM + VERBAL SOLUTION.
//We want to return the nth element, which is the number the use passes in, To get the next number in the fibonacci sequence you will add the two preceeding number.0,1,1,2,3,5,.....

//WRITE OUT THE FIRST VERSION
function fibonacci (number){
    if(number < 1 || !Number.isInteger(number)){
        return 'Error: Input must be a positive integer'
    }
    let current = 1;
    let previous = 0;
    for(let i = 2; i<= number; i++){
        console.log('number of times')//CHECKING THE TIME COMPLEXITY.
        let temp = current;
         current = current + previous;
         previous = current;
    }
    return previous;
}
console.log(fibonacci(7));
console.log(fibonacci(20));

//VERIFY RESULTS
//Check the results to ensure the desired output is what you get as the result.

//DERIVE THE TIME COMPLEXITY.
//Best case => 7
//Worst Case => 20.
//THe program is dependent on the input size, therefore it's proportional to the value of n.

//EXPLORE OTHER ALTERNATIVES.
//we can use recursion to solve the following, but we will still arrive at the same answer.
