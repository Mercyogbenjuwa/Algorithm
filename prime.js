//Primality Text
//Determine whether an input number is a prime number

//VERIFY INPUTS/PROBLEMS
//Ensure the inputs fits the problem requiremnets.  and not less than 1 .

//THINK ABOUT THE PROBLEM + VERBAL SOLUTION.
//Return true for only numbers that can only be divisible by 1 and itself.
//Start comapring from 2 to the nth number.

//WRITE DOWN THE FIRST VERSION.
function isPrime(n){
    if(n < 1 || !Number.isInteger(n)){
        return false;
    }
    for (let i =2; i < n; i++){
        console.log('Time complexity');
        if (n % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(2));
console.log(isPrime(129));
console.log(isPrime(13));
console.log(isPrime(8));

//VERIFY THE RESULTS
//Check the results of the input, and ensure it's the desired output.

//DERIVE THE TIME COMPLEXITY
//Best case => 2
//Worst case => 129
//The time complexity is based on the value of n, therefore it's a linear time complexity because it's dependant on the input size O(n)

//EXPLORE ALTERNATIVES
//we can explore other mathematical formular.

